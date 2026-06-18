import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/redux/reduxActions";
import type { RootInitialState } from "../../store/redux/reduxStore";

const ReduxUser = () => {
  const dispatch = useDispatch();
  const { username, authorized } = useSelector(
    (state: RootInitialState) => state.user
  );
  const handleLogin = () => {
    dispatch(login);
  };
  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <div className="m-auto">
      {authorized ? (
        <>
          <h1>{username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h5>Please login</h5>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default ReduxUser;
