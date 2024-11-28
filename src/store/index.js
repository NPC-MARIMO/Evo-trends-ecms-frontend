import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import adminProductReducer from "./admin/products-slice/index"
import shopProductReducer from "./shop/products-slice/index"
import shopCartReducer from "./shop/cart-slice/index"
import shopAddressReducer from "./shop/address-slice/index"

const store = configureStore({
    reducer: {
      auth: authReducer,
      adminProducts : adminProductReducer,
      shopProducts : shopProductReducer,
      shoppingCart : shopCartReducer,
      shoppingAddress : shopAddressReducer
    },
  });
  
  export default store;
  