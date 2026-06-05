import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./reduxReducer";
import { thunk } from "redux-thunk";

// in order to create and combine multiple reducers
// Combine all slice reducers into one root object
// export const rootReducer = combineReducers({
//     data: emojiReducer, // Access this state via state.data
//     user: userReducer   // Access this state via state.user
//   });

export const reduxStore = createStore(userReducer, applyMiddleware(thunk));
export type AppDispatch = typeof reduxStore.dispatch;
