const { createSlice } = require("@reduxjs/toolkit");

export const CounterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return (state = state + 1);
    },
    decrement: (state, action) => {
      return (state = state - 1);
    },
    incrementBy: (state, action) => {
      return (state = state + action.payload);
    },
  },
});

export const { increment, decrement, incrementBy } = CounterSlice.actions;

export default CounterSlice.reducer;
