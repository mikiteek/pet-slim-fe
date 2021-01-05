import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import toggleComponentsReducer from "./toggleComponents/toggleComponentsReducer";
import userReducer from "./user/userReducer";
import diaryReducer from "./diary/diaryReducer";

const store = configureStore({
  reducer: {
    toggleComponents: toggleComponentsReducer,
    users: userReducer,
    diary: diaryReducer,
  },
  middleware: getDefaultMiddleware({serializableCheck: false,})
});

export default store;