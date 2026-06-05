import { Provider } from "react-redux";
import { reduxStore } from "../../store/redux/reduxStore";
import ReduxUser from "./ReduxUser";
import ThunkExample from "./ThunkExample";

const MainRedux = () => {
  return (
    <Provider store={reduxStore}>
      <ReduxUser />
      <ThunkExample />
    </Provider>
  );
};

export default MainRedux;
