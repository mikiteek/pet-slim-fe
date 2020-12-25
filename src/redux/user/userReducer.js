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

export default combineReducers({
  summary,
});