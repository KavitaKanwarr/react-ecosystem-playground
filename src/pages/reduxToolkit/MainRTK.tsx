import { Provider } from "react-redux";
import { store } from "../../store/reduxToolkit/rtkStore";
import RtkCounter from "./RtkCounter";
import RtkUser from "./RtkUser";

const MainRTK = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <RtkCounter />
        <RtkUser />
      </div>
    </Provider>
  );
};

export default MainRTK;
