let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product-area">
      <div class="product-details">
        <div class="product-image">
          <img src="${product.image}" alt="" />
        </div>
        <div class="product-description limit-to-two-lines">
          ${product.name}
        </div>
        <div class="product-rating">
          <div class="stars">
            <img src="images/ratings/rating-${product.rating.stars * 10}.png" alt="" />
          </div>
          <div class="number-bought">${product.rating.count}</div>
        </div>
        <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div class="added-to-cart">
        <img src="images/checkmark.png" alt="" />
        <div class="added-text">Added</div>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;
