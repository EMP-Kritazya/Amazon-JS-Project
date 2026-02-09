import {
  calculateCartQuantity,
  cart,
  removeFromCart,
  totalCartItems,
  updateCart,
} from "../data/cart.js";
import { products } from "../data/product.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions } from "../data/deliveryOptions.js";

// First task is to take data from cart list and then form html divs

// Variables
let cartItemsHtml = "";
let orderHtml = "";
let cartItemId;
let matchingProduct;
let totalItemsCost = 0;
let shippingHandling = 0;
let totalBeforeTax = 0;

cart.forEach((cartItem) => {
  cartItemId = cartItem.productId;
  matchingProduct = products.find((item) => item.id === cartItemId);

  if (!matchingProduct) {
    console.error("Product not found:", items.productId);
    return;
  }

  const deliveryOptionId = cartItem.deliveryOptionId;

  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  const dateString = deliveryDate.format("dddd, MMMM D");

  cartItemsHtml += `
    <div class="items-summary js-cart-item-container-${matchingProduct.id}">
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>
        <div class="cart-items-details-grid">
          <div class="cart-items-left">
            <img
              src="${matchingProduct.image}"
              alt=""
              class="cart-item-image"
            />
          </div>
          <div class="cart-items-middle">
            <div class="cart-product-info">
              <div class="cart-product-title">
                ${matchingProduct.name}
              </div>
              <div class="cart-product-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</div>
              <div class="cart-product-details js-cart-details-${matchingProduct.id}">
                <div class="quantity js-update-quantity-${matchingProduct.id}">Quantity: <span class="quantity-number js-quantity-${matchingProduct.id}">${cartItem.quantity}</span></div>
                <a class="update js-update-link" data-product-id="${matchingProduct.id}">Update</a>
                <input class="quantity-input js-input-quantity-${matchingProduct.id}"/>
                <span class="save-quantity-link js-save-link" data-product-id = "${matchingProduct.id}">Save</span>
                <a class="delete js-delete-link" data-product-id="${matchingProduct.id}">Delete</a>
              </div>
            </div>
          </div>
          <div class="cart-items-right">
            <div class="delivery-method-text">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector(".js-left").innerHTML = cartItemsHtml;
// Updates the cart quantity in the Header of the page
updateHeaderCartQuantity();
// Updates total cost of all items in the cart
updateTotal();
// Updates Order Summary tile
updateOrderSummary();

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = "";
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");
    const priceString =
      deliveryOption.priceCents === 0
        ? "FREE"
        : `$${deliveryOption.priceCents / 100} -`;
    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    html += `
      <div class="delivery-option-buttons">
        <input
          ${isChecked ? "checked" : ""}
          type="radio"
          name="delivery-option-1-${matchingProduct.id}"
          class="delivery-option-input"
        />
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString} Shipping</div>
        </div>
      </div>
    `;
  });
  return html;
}

// Listens for click on delete link for all items and functions accordingly
document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);
    document.querySelector(`.js-cart-item-container-${productId}`).remove();

    calculateCartQuantity();
    updateCartQuantity(productId);
    updateTotal();
    updateHeaderCartQuantity();
  });
});

// Listens for click on update link for all items and functions accordingly
document.querySelectorAll(".js-update-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    // I need to display the selector and Save link
    document
      .querySelector(`.js-cart-details-${productId}`)
      .classList.add("is-editing-quantity", "is-not-editable");
  });
});

// Listens for click on save link for all items and functions accordingly
document.querySelectorAll(".js-save-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    // I need to get value from the input box and update cart quantity for that Item
    const newQuantity = parseInt(
      document.querySelector(`.js-input-quantity-${productId}`).value,
    );

    // Revert back to showing update and delete links and also updates the item quantity
    document
      .querySelector(`.js-cart-details-${productId}`)
      .classList.remove("is-editing-quantity", "is-not-editable");

    updateCart(productId, newQuantity);

    updateTotal();

    updateCartQuantity(productId);
  });
});

function updateOrderSummary() {
  totalBeforeTax = totalItemsCost + shippingHandling;
  orderHtml = `
  <div class="payment-summary">
    <div class="payment-title">Order Summary</div>
    <div class="payment-details">
      <div class="elaborate-details">
        <div class="items">
          <div class="items-title">Items (${totalCartItems}):</div>
          <div class="item-price">$${(totalItemsCost / 100).toFixed(2)}</div>
        </div>
        <div class="shipping">
          <div class="shipping-title">Shipping & handling:</div>
          <div class="shipping-price">$${shippingHandling.toFixed(2)}</div>
        </div>
        <div class="tax-details">
          <div class="before-tax">
            <div class="total-before-tax">Total before tax:</div>
            <div class="total-before-tax-price">$${(totalBeforeTax / 100).toFixed(2)}</div>
          </div>
          <div class="actual-tax">
            <div class="estimated-title">Estimated tax (10%):</div>
            <div class="estimated-amount">$${((totalBeforeTax * 0.1) / 100).toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div class="final-price">
        <div class="order-total-title">Order total:</div>
        <div class="total-price">$${((totalBeforeTax + totalBeforeTax * 0.1) / 100).toFixed(2)}</div>
      </div>
    </div>
    <button class="place-order">Place your order</button>
  </div>
`;
  document.querySelector(".js-right").innerHTML = orderHtml;
}

// Display total cart size in the header
function updateHeaderCartQuantity() {
  calculateCartQuantity();
  document.querySelector(".return-to-home-link").innerHTML =
    `${totalCartItems} items`;
}

// Updates totalCost for all items
function updateTotal() {
  // reset variables
  totalItemsCost = 0;

  // update variables
  cart.forEach((cartItem) => {
    let matchingItem = products.find((item) => item.id === cartItem.productId);
    totalItemsCost += cartItem.quantity * matchingItem.priceCents;
  });
  updateOrderSummary();
}

// Update cart item quantity after update number of items
function updateCartQuantity(productId) {
  const product = cart.find((item) => item.productId === productId);
  const quantity = product.quantity;

  document.querySelector(`.js-quantity-${productId}`).innerHTML = quantity;
  updateHeaderCartQuantity();
}
