import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import toggleComponentsReducer from "./toggleComponents/toggleComponentsReducer";
import userReducer from "./user/userReducer";

const store = configureStore({
  reducer: {
    toggleComponents: toggleComponentsReducer,
    users: userReducer,
  },
  middleware: getDefaultMiddleware({serializableCheck: false,})
});

export default store;