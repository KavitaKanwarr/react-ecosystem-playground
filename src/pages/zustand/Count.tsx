import { useZustandStore } from "../../store/zustandStore";

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
    <div
      style={{
        margin: "auto auto",
        height: "100%",
      }}
    >
      <h2>{count}</h2>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Count;
