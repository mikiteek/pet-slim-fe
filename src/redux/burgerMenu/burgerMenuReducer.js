import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import burgerMenuActions from "./burgerMenuActions";

const burgerMenu = createReducer(false, {
  [burgerMenuActions.toggleBurgerMenu]: state => !state,
});

export default combineReducers({
  burgerMenu,
})