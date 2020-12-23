import {configureStore} from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenu/burgerMenuReducer";

const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuReducer,
  },
});

export default store;