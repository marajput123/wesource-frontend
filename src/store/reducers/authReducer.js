
export const authReducer = (state={}, action) => {
    switch(action.type){
        case "SIGN_IN":
            const {jwtToken, id} = action.payload;
            window.localStorage.setItem('wesource-token', jwtToken)
            console.log(action.payload)
            return {...action.payload.user, jwtToken, id}
        case "SIGN_OUT":
            window.localStorage.removeItem('wesource-token')
            return {}
        case "UPDATE_USER":
            const {userProfile} = action.payload;
            return {...state, ...userProfile}
        default:
            return state

    }
}