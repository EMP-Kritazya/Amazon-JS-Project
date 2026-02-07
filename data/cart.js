export let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Adds the product to the cart
// If the product already exists then it will just update it's quantity
// If not then it will push a new product to the cart
export function addToCart(productId) {
  let matchingItem;
  let quantitySelected = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value,
  );

  cart.forEach((item) => {
    if (item.productId === productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantitySelected;
  } else {
    cart.push({
      productId: productId,
      quantity: quantitySelected,
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  const updatedCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      updatedCart.push(cartItem);
    }
  });
  cart = updatedCart;
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
