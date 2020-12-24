import {configureStore} from "@reduxjs/toolkit";
import toggleComponentsReducer from "./toggleComponents/toggleComponentsReducer";

const store = configureStore({
  reducer: {
    toggleComponents: toggleComponentsReducer,
  },
});

export default store;