// Redux is a predictable state container.
// reducers pure functions hona zaroori h bcz Isse debugging, testing, action replay aur time-travel debugging possible hoti hai. Small apps mein ye utna important nahi lagta, lekin large teams aur complex applications mein ye kaafi valuable hota hai.

import { LOGIN, LOGOUT } from "./reduxConstants";

// Core elements:
// 1. Store - Global State Container
// 2. Action (event) - an object describing what happened
// 3. Reducer - pure functions (Same input → Same output no api calls, no date.now, no math.random or any side effects) what decided how state changes
// 4. Dispatch (trigger event) - a function that send action to redux

// Flow
//      Component
//            ↓
//      dispatch(action)
//           ↓
//      Reducer
//           ↓
//      New State
//             ↓
//      Store Updated
//             ↓
//      subscribed Component Re-renders

export type initialReduxState = {
  username: string;
  authorized: boolean;
};

const initialState = {
  username: "kkanwar",
  authorized: false,
};

export const userReducer = (
  state: initialReduxState = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authorized: true,
      };
    case LOGOUT:
      return {
        ...state,
        authorized: false,
      };
    default:
      return state;
  }
};
