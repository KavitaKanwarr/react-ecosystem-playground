import { useZustandStore } from "../../store/zustandStore";
import ApiCall from "./ApiCall";
import User from "./User";

const Count = () => {
  // Selectors improve performance by subscribing components only to the specific state they need, preventing unnecessary re-renders in this case - count
  const count = useZustandStore((state) => {
    return state.count;
  });
  // selector - A function that extracts a specific piece of state from the store. (state) => state.count
  console.log("🚀 ~ Count ~ count:", count);
  const incrementCounter = useZustandStore((state) => state.incrementCounter);
  const decrementCounter = useZustandStore((state) => state.decrementCounter);

  return (
    <div className="container">
      <div className="my-20">
        <h2>{count}</h2>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
      <div className="my-20">
        <ApiCall />
        <User />
      </div>
    </div>
  );
};

export default Count;
