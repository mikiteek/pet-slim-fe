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
});

const error = createReducer({}, {
  [userActions.getSummaryError]: (state, {payload}) => payload,
  [userActions.registerError]: (state, {payload}) => payload,
});

export default combineReducers({
  summary,
  user,
  error,
});