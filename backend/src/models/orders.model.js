import mongoose from "mongoose";
import { Cart } from "./cart.model";

// Orders will follow the same schema as like the cart
const Orders = Cart;

export default Orders;
