import { combineReducers } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { authReducer } from "./reducers/authReducer";
import { errorReducer } from "./reducers/errorReducer";


const store = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    error: errorReducer
})

export default store