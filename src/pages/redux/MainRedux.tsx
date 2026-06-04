import { Provider } from "react-redux";
import { reduxStore } from "../../store/redux/reduxStore";
import ReduxUser from "./ReduxUser";

const MainRedux = () => {
  return (
    <Provider store={reduxStore}>
      <ReduxUser />
    </Provider>
  );
};

export default MainRedux;
