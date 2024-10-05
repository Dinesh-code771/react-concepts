import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.count += parseInt(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
