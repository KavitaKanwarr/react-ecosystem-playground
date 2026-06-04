import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/redux/reduxActions";
import type { initialReduxState } from "../../store/redux/reduxReducer";

const ReduxUser = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: initialReduxState) => state.username);
  const authorized = useSelector(
    (state: initialReduxState) => state.authorized
  );
  const handleLogin = () => {
    dispatch(login);
  };
  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <div>
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
