import {combineReducers} from "redux"
import {createReducer} from "@reduxjs/toolkit";
import diaryActions from "./diaryActions";

const dateInit = new Date(Date.now());
const date = createReducer(dateInit, {
  [diaryActions.setCurrentDate]: (state, {payload}) => payload,
});

export default combineReducers({
  date,
});