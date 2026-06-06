// Redux is a predictable state container.
// reducers (how to update the state) pure functions hona zaroori h bcz Isse debugging, testing, action replay aur time-travel debugging possible hoti hai. Small apps mein ye utna important nahi lagta, lekin large teams aur complex applications mein ye kaafi valuable hota hai.

import { produce } from "immer";
import {
  FETCH_EMOJIS,
  FETCH_FAILED,
  FETCH_SUCCESS,
  LOGIN,
  LOGOUT,
} from "./reduxConstants";

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

export type initialUserReduxState = {
  username: string;
  authorized: boolean;
};

const initialUserState = {
  username: "kkanwar",
  authorized: false,
};

export const userReducer = (
  state: initialUserReduxState = initialUserState,
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
    // case FETCH_EMOJIS:
    //   return {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       loading: true,
    //     },
    //   };
    // case FETCH_SUCCESS:
    //   return {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       loading: false,
    //       fetchedData: action.payload,
    //     },
    //   };
    // case FETCH_FAILED:
    //   return {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       loading: false,
    //       error: action.payload,
    //     },
    //   };
    default:
      return state;
  }
};

export type initialEmojisReduxState = {
  loading: boolean;
  fetchedData: unknown;
  error: unknown;
};

const initialEmojisState = {
  loading: false,
  fetchedData: null,
  error: null,
};

export const emojisReducer = (state = initialEmojisState, action) => {
  // in order to use immer wrap reducer login in produce
  // or we could simply write - export const emojisReducer = produce((draft, action) => {
  return produce(state, (draft) => {
    // 'draft' is a proxy copy of your state. You can safely "mutate" it!
    switch (action.type) {
      case FETCH_EMOJIS:
        draft.loading = true;
        break; // Use break instead of return statements
      case FETCH_SUCCESS:
        draft.loading = false;
        draft.fetchedData = action.payload;
        break;
      case FETCH_FAILED:
        draft.loading = false;
        draft.error = action.payload;
        break;
    }
  });
};
