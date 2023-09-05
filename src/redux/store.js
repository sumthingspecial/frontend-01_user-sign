import { configureStore } from "@reduxjs/toolkit";

const preloadedState = window.____PRELOADED_STATE__;

const store = configureStore({
  reducer: {},
  preloadedState,
  //   devTools: process.env.NODE_ENV !== "deploy",
});

export default store;
