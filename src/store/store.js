import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "../store/slices/CounterSlice";
import CartReducer from "../store/slices/CartSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    cart: CartReducer,
  },
});
