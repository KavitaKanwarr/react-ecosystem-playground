import { countAtom, doubleAtom, tripleAtom } from "../../store/jotaiStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

const JotaiCounter = () => {
  const [count, setCount] = useAtom(countAtom);
  const doubled = useAtomValue(doubleAtom);
  const tripple = useSetAtom(tripleAtom);
  console.log("🚀 ~ JotaiParentCounter ~ count:", count);
  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCount((prev) => prev - 1);
    tripple();
  };

  return (
    <div className="my-20">
      <h2>{count}</h2>
      <h4>Doubled: {doubled}</h4>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default JotaiCounter;
