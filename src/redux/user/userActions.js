import {createAction} from "@reduxjs/toolkit";

const getSummaryRequest = createAction("summary/getRequest");
const getSummarySuccess = createAction("summary/getSuccess");
const getSummaryError = createAction("summary/getError");

const addSelfSummary = createAction("seflSummary/addSummary");

const registerRequest = createAction("register/registerRequest");
const registerSuccess = createAction("register/registerSuccess");
const registerError = createAction("register/registerError");

const loginRequest = createAction("login/loginRequest");
const loginSuccess = createAction("login/loginSuccess");
const loginError = createAction("login/loginError");

const resetError = createAction("error/resetError");

export default {
  getSummaryRequest,
  getSummarySuccess,
  getSummaryError,
  addSelfSummary,
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  resetError,
}