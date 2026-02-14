import { renderItemsSummary } from "./checkout/itemSummary.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { loadProducts } from "../data/product.js";

new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
  renderItemsSummary();
  renderOrderSummary();
});
