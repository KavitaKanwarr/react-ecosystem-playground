import JotaiChildCounter from "./JotaiChildCounter";
import JotaiCounter from "./JotaiCounter";
import JotaiUser from "./JotaiUser";

const MainJotai = () => {
  return (
    <div className="container">
      <JotaiCounter />
      <JotaiChildCounter />
      <JotaiUser />
    </div>
  );
};

export default MainJotai;
