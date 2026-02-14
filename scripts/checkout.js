import { renderItemsSummary } from "./checkout/itemSummary.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { loadProducts, loadProductsFetch } from "../data/product.js";

new Promise((resolve) => {
  loadProductsFetch().then(() => {
    renderItemsSummary();
    renderOrderSummary();
  });
});
