import {createAction} from "@reduxjs/toolkit";

const setCurrentDate = createAction("diary/setCurrentDate");

export default {
  setCurrentDate,
};