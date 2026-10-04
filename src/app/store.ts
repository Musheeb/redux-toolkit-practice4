import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./features/counter/counterSlices";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
