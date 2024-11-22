import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import adminProductReducer from "./admin/products-slice/index"
import shopProductReducer from "./shop/products-slice/index"

const store = configureStore({
    reducer: {
      auth: authReducer,
      adminProducts : adminProductReducer,
      shopProducts : shopProductReducer
    },
  });
  
  export default store;
  