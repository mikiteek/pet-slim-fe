import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import toggleComponentsActions from "./toggleComponentsActions";

const burgerMenu = createReducer(false, {
  [toggleComponentsActions.toggleBurgerMenu]: state => !state,
});

const modalWindow = createReducer(false, {
  [toggleComponentsActions.toggleModal]: state => !state,
});

const spinner = createReducer(false, {
  [toggleComponentsActions.toggleSpinner]: state => !state,
});

export default combineReducers({
  burgerMenu,
  modalWindow,
  spinner,
})