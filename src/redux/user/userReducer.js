import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import userActions from "./userActions";

const summaryInit = {};
const summary = createReducer(summaryInit, {
  [userActions.addSelfSummary]: (state, {payload}) => payload,
  [userActions.getSummarySuccess]: (state, {payload}) => {
    return {
      ...state,
      ...payload,
    }
  },
});

const userInit = {};
const user = createReducer(userInit, {
  [userActions.registerSuccess]: (state, {payload}) => payload,
  [userActions.loginSuccess]: (state, {payload}) => payload.user,
  [userActions.logoutSuccess]: () => userInit,
});

const tokenInit = "";
const token = createReducer(tokenInit, {
  [userActions.loginSuccess]: (state, {payload}) => payload.token,
  [userActions.logoutSuccess]: () => tokenInit,
});

const refreshTokenInit = "";
const refreshToken = createReducer(refreshTokenInit, {
  [userActions.loginSuccess]: (state, {payload}) => payload.refreshToken,
  [userActions.logoutSuccess]: () => refreshTokenInit,
});

const errorInit = {};
const error = createReducer(errorInit, {
  [userActions.getSummaryError]: (state, {payload}) => payload,
  [userActions.registerError]: (state, {payload}) => payload,
  [userActions.loginError]: (state, {payload}) => payload,
  [userActions.logoutError]: (state, {payload}) => payload,
  [userActions.resetError]: (_) => errorInit,
});

export default combineReducers({
  summary,
  user,
  token,
  refreshToken,
  error,
});