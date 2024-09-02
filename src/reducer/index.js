import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import addReducer from "../slices/addSlice"

const rootReducer =combineReducers({
    auth: authReducer,
    profile:profileReducer,
    add:addReducer,
})


export default rootReducer