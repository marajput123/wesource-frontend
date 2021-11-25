
export const AUTH_REDUCER_INITIAL_STATE = "CHECKING"

export const authReducer = (state=AUTH_REDUCER_INITIAL_STATE, action) => {
    switch(action.type){
        case "SIGN_IN":
            const {jwtToken} = action.payload;
            window.localStorage.setItem('wesource-token', jwtToken);
            return true;
        case "SIGN_OUT":
            window.localStorage.removeItem('wesource-token')
            return false;
        default:
            return state
    }
}