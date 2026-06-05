import {
  FETCH_EMOJIS,
  FETCH_FAILED,
  FETCH_SUCCESS,
  LOGIN,
  LOGOUT,
} from "./reduxConstants";

export const login = {
  type: LOGIN,
};

export const logout = {
  type: LOGOUT,
};

export const fetchEmojis = () => {
  return async (dispatch, getState) => {
    console.log("🚀 ~ fetchEmojis ~ getState:", getState);
    dispatch({ type: FETCH_EMOJIS });

    try {
      const data = await fetch("https://api.github.com/emojis");
      console.log("🚀 ~ fetchEmojis ~ data:", data);
      const parsedData = await data.json();
      const limitedObject = Object.fromEntries(
        Object.entries(parsedData).slice(0, 40)
      );

      dispatch({ type: FETCH_SUCCESS, payload: limitedObject });
    } catch (error) {
      console.log(error);

      dispatch({ type: FETCH_FAILED, payload: error });
    }
  };
};
