import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import toggleComponentsActions from "./toggleComponentsActions";

const burgerMenu = createReducer(false, {
  [toggleComponentsActions.toggleBurgerMenu]: state => !state,
});

const modalWindow = createReducer(false, {
  [toggleComponentsActions.toggleModal]: state => !state,
});

export default combineReducers({
  burgerMenu,
  modalWindow
})