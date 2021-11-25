import { combineReducers } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { authReducer } from "./reducers/authReducer";


const store = combineReducers({
    profile: profileReducer,
    auth: authReducer
})

export default store