import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <button
        className="border-4 py-2 px-6"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <p>{counter}</p>
      <button
        className="border-4 py-2 px-6"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <br />
      <button
        className="border-4 py-2 px-6"
        onClick={() => {
          dispatch(incrementBy(10));
        }}
      >
        Increment By 10
      </button>
    </div>
  );
};

export default Counter;
