
export const authReducer = (state={}, action) => {
    switch(action.type){
        case "SIGN_IN":
            const {token} = action.payload;
            const tokenData = JSON.parse(window.atob(token.split(".")[1]))
            return {...tokenData}
        case "SIGN_OUT":
            return {}
        default:
            return state

    }
}