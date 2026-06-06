import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/reduxToolkit/counterSlice";
import type { RTKState } from "../../store/reduxToolkit/rtkStore";

const RtkCounter = () => {
  const dispatch = useDispatch();
  const rtkCount = useSelector((state: RTKState) => state.counter.rtkCount);

  const incrementCounter = () => {
    dispatch(increment());
  };

  const decrementCounter = () => {
    dispatch(decrement());
  };

  return (
    <div className="my-20">
      <h2>{rtkCount}</h2>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default RtkCounter;
