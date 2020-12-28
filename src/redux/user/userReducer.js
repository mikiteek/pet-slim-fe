import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import userActions from "./userActions";

const summary = createReducer({}, {
  [userActions.addSelfSummary]: (state, {payload}) => payload,
  [userActions.getSummarySuccess]: (state, {payload}) => {
    return {
      ...state,
      ...payload,
    }
  },
});

const user = createReducer({}, {
  [userActions.registerSuccess]: (state, {payload}) => payload,
  [userActions.loginSuccess]: (state, {payload}) => {
    console.log(payload)
    return payload.user
  },
});

const token = createReducer("", {
  [userActions.loginSuccess]: (state, {payload}) => payload.token,
});

const refreshToken = createReducer("", {
  [userActions.loginSuccess]: (state, {payload}) => payload.refreshToken,
});

const errorInit = {};
const error = createReducer(errorInit, {
  [userActions.getSummaryError]: (state, {payload}) => payload,
  [userActions.registerError]: (state, {payload}) => payload,
  [userActions.loginError]: (state, {payload}) => payload,
  [userActions.resetError]: (_) => errorInit,
});

export default combineReducers({
  summary,
  user,
  token,
  refreshToken,
  error,
});