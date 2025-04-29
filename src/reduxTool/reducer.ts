import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import lemSlice from "./lem/lemSlice";

const rootReducer = combineReducers({
  Auth: authSlice,
  Lem: lemSlice,
});

export default rootReducer;
