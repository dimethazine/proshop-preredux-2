import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
  preloadedState: {},
  middleware: [thunk],
});

export default store;
