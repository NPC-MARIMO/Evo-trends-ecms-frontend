import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  approvalURL: null,
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
  razorpayOrder: null,
  razorpayKeyId: null,
};

// PayPal thunks removed

// Razorpay: create an order on the server and return order details and key
export const createRazorpayOrder = createAsyncThunk(
  "/order/createRazorpayOrder",
  async (payload) => {
    // Backend expects order creation at /create and will return Razorpay fields
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/shop/order/create`,
      payload
    );

    return response.data;
  }
);

// Razorpay: verify payment on the server
export const verifyRazorpayPayment = createAsyncThunk(
  "/order/verifyRazorpayPayment",
  async (payload) => {
    // Use existing capturePayment/verify endpoint
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/shop/order/verify`,
      payload
    );

    return response.data;
  }
);

export const getAllOrdersByUserId = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/shop/order/list/${userId}`
    );

    return response.data;
  }
);

export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/shop/order/details/${id}`
    );

    return response.data;
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // PayPal reducers removed
      .addCase(getAllOrdersByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersByUserId.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      })
      // Razorpay reducers
      .addCase(createRazorpayOrder.pending, (state) => {
        state.isLoading = true;
        state.razorpayOrder = null;
        state.razorpayKeyId = null;
      })
      .addCase(createRazorpayOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        // Map to state if needed by UI later
        state.razorpayOrder = action.payload?.razorpayOrderId
          ? { id: action.payload.razorpayOrderId, amount: action.payload?.amount, currency: action.payload?.currency }
          : null;
        state.razorpayKeyId = action.payload?.key || null;
        state.orderId = action.payload?.orderId || state.orderId;
        if (action.payload?.orderId) {
          sessionStorage.setItem(
            "currentOrderId",
            JSON.stringify(action.payload.orderId)
          );
        }
      })
      .addCase(createRazorpayOrder.rejected, (state) => {
        state.isLoading = false;
        state.razorpayOrder = null;
        state.razorpayKeyId = null;
      })
      .addCase(verifyRazorpayPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyRazorpayPayment.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyRazorpayPayment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetOrderDetails } = shoppingOrderSlice.actions;

export default shoppingOrderSlice.reducer;
