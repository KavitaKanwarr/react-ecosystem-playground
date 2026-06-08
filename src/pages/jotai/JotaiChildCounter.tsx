import { countAtom, userAtom } from "../../store/jotaiStore";
import { useAtom } from "jotai";

const JotaiChildCounter = () => {
  const [count] = useAtom(countAtom);
  const [user] = useAtom(userAtom);
  console.log("🚀 ~ JotaiChildCounter ~ count:", count);

  return (
    <div className="my-20">
      <h2>{user?.name}</h2>
      <h2>Children - {count}</h2>
    </div>
  );
};

export default JotaiChildCounter;
