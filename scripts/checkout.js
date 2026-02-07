import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/product.js";

// First task is to take data from cart list and then form html divs

let cartItemsHtml = "";
let cartItemId;
let matchingProduct;
let totalItemsCost = 0;
let shippingHandling = 0;
let totalBeforeTax = 0;
let itemCount = 0;

cart.forEach((cartItem) => {
  cartItemId = cartItem.productId;
  matchingProduct = products.find((item) => item.id === cartItemId);

  if (!matchingProduct) {
    console.error("Product not found:", items.productId);
    return;
  }

  cartItemsHtml += `
    <div class="items-summary">
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Wednesday, February 11
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
              <div class="cart-product-details">
                <div class="quantity">Quantity: ${cartItem.quantity}</div>
                <a href="amazon.html" class="update js-update-link" data-product-id="${matchingProduct.id}">Update</a>
                <a class="delete js-delete-link" data-product-id="${matchingProduct.id}">Delete</a>
              </div>
            </div>
          </div>
          <div class="cart-items-right">
            <div class="delivery-method-text">
              Choose a delivery option:
            </div>
            <div class="delivery-option-buttons">
              <input
                type="radio"
                checked
                name="delivery-option-1-${matchingProduct.id}"
                class="delivery-option-input"
              />
              <div>
                <div class="delivery-option-date">
                  Wednesday, February 11
                </div>
                <div class="delivery-option-price">FREE Shipping</div>
              </div>
            </div>
            <div class="delivery-option-buttons">
              <input
                type="radio"
                name="delivery-option-1-${matchingProduct.id}"
                class="delivery-option-input"
              />
              <div>
                <div class="delivery-option-date">Thursday, February 5</div>
                <div class="delivery-option-price">$4.99 - Shipping</div>
              </div>
            </div>
            <div class="delivery-option-buttons">
              <input
                type="radio"
                name="delivery-option-1-${matchingProduct.id}"
                class="delivery-option-input"
              />
              <div>
                <div class="delivery-option-date">Tuesday, February 3</div>
                <div class="delivery-option-price">$9.99 - Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  totalItemsCost += matchingProduct.priceCents * cartItem.quantity;
  itemCount += 1;
});
document.querySelector(".js-left").innerHTML = cartItemsHtml;

totalItemsCost /= 100;
totalBeforeTax = (totalItemsCost * 100 + shippingHandling) / 100;

let orderHtml = `
  <div class="payment-summary">
    <div class="payment-title">Order Summary</div>
    <div class="payment-details">
      <div class="elaborate-details">
        <div class="items">
          <div class="items-title">Items (${itemCount}):</div>
          <div class="item-price">$${totalItemsCost.toFixed(2)}</div>
        </div>
        <div class="shipping">
          <div class="shipping-title">Shipping & handling:</div>
          <div class="shipping-price">$${shippingHandling.toFixed(2)}</div>
        </div>
        <div class="tax-details">
          <div class="before-tax">
            <div class="total-before-tax">Total before tax:</div>
            <div class="total-before-tax-price">$${totalBeforeTax.toFixed(2)}</div>
          </div>
          <div class="actual-tax">
            <div class="estimated-title">Estimated tax (10%):</div>
            <div class="estimated-amount">$${(totalBeforeTax * 0.1).toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div class="final-price">
        <div class="order-total-title">Order total:</div>
        <div class="total-price">$${(totalBeforeTax + totalBeforeTax * 0.1).toFixed(2)}</div>
      </div>
    </div>
    <button class="place-order">Place your order</button>
  </div>
`;

document.querySelector(".js-right").innerHTML = orderHtml;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);
    // we need to update out HTML now
  });
});
