import { createStore } from "redux";
import { userReducer } from "./reduxReducer";

export const reduxStore = createStore(userReducer);
