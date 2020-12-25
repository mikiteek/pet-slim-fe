import {createAction} from "@reduxjs/toolkit";

const getSummaryRequest = createAction("summary/getRequest");
const getSummarySuccess = createAction("summary/getSuccess");
const getSummaryError = createAction("summary/getError");

const addSelfSummary = createAction("seflSummary/addSummary");

export default {
  getSummaryRequest,
  getSummarySuccess,
  getSummaryError,
  addSelfSummary,
}