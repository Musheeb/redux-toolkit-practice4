import { useSelector, useDispatch } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  incrementByValue,
  resetAll,
} from "./counterSlices";
import { useState } from "react";

export default function Counter() {
  // useSelector provides the state from the store.
  // Definition - used to read data from redux store state.
  const count = useSelector((state) => state.counter.count);
  // dispatch is to trigger the state update. 
  // Definition - used to send (actions) to the redux store to trigger state updates.
  const dispatch = useDispatch();
  const [valueByUser, setValueByUser] = useState(0);
  // Parsing is important, because it will crash if value is not number and to prevent the typescript errors as well.
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
