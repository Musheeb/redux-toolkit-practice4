import { useSelector, useDispatch } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  incrementByValue,
  resetAll,
} from "./counterSlices";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [valueByUser, setValueByUser] = useState(0);
  const addedValue = Number(valueByUser) || 0;
  const reset = () => {
    setValueByUser(0);
    dispatch(resetAll());
  };
  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={() => dispatch(incrementByOne())}>+</button>
      <button onClick={() => dispatch(decrementByOne())}>-</button>
      <div>
        <input
          type="text"
          value={addedValue}
          onChange={(e) => setValueByUser(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByValue(addedValue))}>
          Click To Add
        </button>
        <button onClick={reset}>Reset All</button>
      </div>
    </div>
  );
}
