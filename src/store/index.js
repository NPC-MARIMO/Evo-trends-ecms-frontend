import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import adminProductReducer from "./admin/products-slice/index"

const store = configureStore({
    reducer: {
      auth: authReducer,
      adminProducts : adminProductReducer
    },
  });
  
  export default store;
  