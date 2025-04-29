import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import lemSlice from "./lem/lemSlice";
import usersSlice from "./users/usersSlice";
import postSlice from "./posts/postSlice";
import priceListSlice from "./priceLists/priceListSlice";

const rootReducer = combineReducers({
  Auth: authSlice,
  Lem: lemSlice,
  User: usersSlice,
  Post: postSlice,
  PriceList: priceListSlice,
});

export default rootReducer;
