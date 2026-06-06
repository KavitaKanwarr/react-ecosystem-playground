import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // prefixes our actions counter/increment
  initialState: { rtkCount: 0 },
  reducers: {
    increment: (state) => {
      state.rtkCount++;
    }, // we can safely "mutate" state here because of Immer.js under the hood
    decrement: (state) => {
      state.rtkCount--;
    },
  },
});

// RTK automatically generates these actions
export const { increment, decrement } = counterSlice.actions;

// Export the reducer to provide to the store
const counterReducer = counterSlice.reducer;
export default counterReducer;
