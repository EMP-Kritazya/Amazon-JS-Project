import { renderItemsSummary } from "./checkout/itemSummary.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { loadProducts, loadProductsFetch } from "../data/product.js";

async function loadPage() {
  await loadProductsFetch();
  renderItemsSummary();
  renderOrderSummary();
}
loadPage();

// new Promise((resolve) => {
//   loadProductsFetch().then(() => {
//     renderItemsSummary();
//     renderOrderSummary();
//   });
// });
