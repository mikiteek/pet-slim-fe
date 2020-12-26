import {createAction} from "@reduxjs/toolkit";

const getSummaryRequest = createAction("summary/getRequest");
const getSummarySuccess = createAction("summary/getSuccess");
const getSummaryError = createAction("summary/getError");

const addSelfSummary = createAction("seflSummary/addSummary");

const registerRequest = createAction("register/registerRequest");
const registerSuccess = createAction("register/registerSuccess");
const registerError = createAction("register/registerError");

export default {
  getSummaryRequest,
  getSummarySuccess,
  getSummaryError,
  addSelfSummary,
  registerRequest,
  registerSuccess,
  registerError
}