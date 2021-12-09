import { combineReducers } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { authReducer } from "./reducers/authReducer";
import { errorReducer } from "./reducers/errorReducer";
import {searchQueryReducer} from "./reducers/searchQueryReducer";


const store = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    error: errorReducer,
    searchQuery: searchQueryReducer
})

export default store