export const signInAction = (jwtToken) => {
    return {
        type:"SIGN_IN",
        payload:{
            token:jwtToken
        }
    }
}

export const signOutAction = () => {
    return {
        type:"SIGN_OUT",
    }
}