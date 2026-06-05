import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {
  emojisReducer,
  userReducer,
  type initialEmojisReduxState,
  type initialUserReduxState,
} from "./reduxReducer";
import { thunk } from "redux-thunk";
// TWO WAYS - to add devtools support wither install @redux-devtools/extension or the native setup accessing using standard redux utilities like compose
// import { composeWithDevTools or composeWithDevToolsDevelopmentOnly for dev env only } from "@redux-devtools/extension";

// in order to create and combine multiple reducers
// Combine all slice reducers into one root object
export const rootReducer = combineReducers({
  user: userReducer, // Access this state via state.user
  data: emojisReducer, // Access this state via state.data
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//  createStore(reducer, [preloadedState], [enhancer])
//          First position (reducer): Requires a pure function that calculates your next state tree based on an action.
//          Last position (enhancer): Requires a higher-order function that adds third-party capabilities (like async tracking or logging) to the store's inner loop
export const reduxStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export type AppDispatch = typeof reduxStore.dispatch;
export type RootInitialState = {
  user: initialUserReduxState;
  data: initialEmojisReduxState;
};
