import { cart } from "../data/cart.js";
import { products } from "../data/product.js";

// First task is to take data from cart list and then form html divs

let cartItemsHtml = "";
let itemId;
let product;

cart.forEach((items) => {
  itemId = items.productId;
  product = products.find((item) => item.id === itemId);

  if (!product) {
    console.error("Product not found:", items.productId);
    return;
  }

  console.log(product);

  cartItemsHtml += `
    <div class="items-summary">
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Wednesday, February 11
        </div>
        <div class="cart-items-details-grid">
          <div class="cart-items-left">
            <img
              src="${product.image}"
              alt=""
              class="cart-item-image"
            />
          </div>
          <div class="cart-items-middle">
            <div class="cart-product-info">
              <div class="cart-product-title">
                ${product.name}
              </div>
              <div class="cart-product-price">$20.95</div>
              <div class="cart-product-details">
                <div class="quantity">Quantity: ${items.quantity}</div>
                <a href="amazon.html" class="update">Update</a>
                <a class="delete">Delete</a>
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
                name="delivery-option-1-${product.id}"
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
                name="delivery-option-1-${product.id}"
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
                name="delivery-option-1-${product.id}"
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
});
document.querySelector(".grid-left").innerHTML = cartItemsHtml;
