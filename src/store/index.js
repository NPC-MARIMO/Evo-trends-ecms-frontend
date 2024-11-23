import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import adminProductReducer from "./admin/products-slice/index"
import shopProductReducer from "./shop/products-slice/index"
import shopCartReducer from "./shop/cart-slice/index"

const store = configureStore({
    reducer: {
      auth: authReducer,
      adminProducts : adminProductReducer,
      shopProducts : shopProductReducer,
      shoppingCart : shopCartReducer,
    },
  });
  
  export default store;
  