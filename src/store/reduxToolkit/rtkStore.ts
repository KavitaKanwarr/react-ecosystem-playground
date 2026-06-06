// INSTALL - @reduxjs/toolkit and react-redux

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

// RTK is a modern & recommended way of writing redux, it's built on top of redux following same architecture and principles but just less verbose and boilerplate. In short for smooth developer experinece

// immer - RTK internally uses immer , no need to specify it separately (it converts mutable state updates into immutable updates internally)

// configureStore creates a centralised store with defaults & devtools support

// createAsyncThunk - handles async operations and automatically generates pending, fulfilled and rejected actions - no need to manually dispatch these

// createSlice - creates reducers & actions. Slice means a specific features & its logic

// ---------------------------------------SYNTAX-----------------------------------------

// configureStore
// const store = configureStore({
//     reducer, -----> required
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware), -----> used to add custom middlewares without loosing the default ones like thunk
//     devTools: process.env.NODE_ENV !== 'production', -----> boolean default true to enable/disable devtools in prod
//     preloadedState: { -----> lets us pass initial states like from SSR
//          counter: { value: 10 }, // Initial data from server or localStorage
//     },
//      enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(), -----> lets us add enhancers to enhance store capabilities (Redux DevTools is a Store Enhancer)
//  });

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type RTKState = ReturnType<typeof store.getState>;
// in order to prevent type error in dispatch becaude useDispatch expects simple action and through this it'll know that it can handle thunks
export type RTKDispatch = typeof store.dispatch;
