import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./features/counter/counterSlices";

//This is a centralized store, any component can use the value of the slices in the component from useSelector.
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
