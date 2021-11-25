
export const profileReducer = (state={}, action) => {
    switch(action.type){
        case "SIGN_IN":
            const {jwtToken, id} = action.payload;
            return {...action.payload.user, jwtToken, id}
        case "SIGN_OUT":
            return {}
        case "UPDATE_USER":
            const {userProfile} = action.payload;
            return {...state, ...userProfile}
        default:
            return state
    }
}