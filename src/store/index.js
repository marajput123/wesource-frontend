import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";

const store = combineReducers({
    auth: authReducer
})

export default store