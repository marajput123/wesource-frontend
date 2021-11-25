import { wesourceBackend } from "../../apis"

export const signInAction = (jwtToken) => {
    console.log(jwtToken)
    return async (dispatch) => {
        const tokenData = JSON.parse(window.atob(jwtToken.split(".")[1]))
        const id = tokenData.id
        wesourceBackend.get(`/auth/${id}`,
            {
                headers: { Authorization: `Bearer ${jwtToken}` }
            }
        ).then(res => {
            const user = res.data[0]
            console.log(user)
            const userProfile = {
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                rating:user.rating,
                username:user.username
            }
            console.log(`action creator - ${jwtToken}`);
            return dispatch({
                type:"SIGN_IN",
                payload:{
                    jwtToken,
                    id,
                    user:userProfile
                }
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const signOutAction = () => {
    return {
        type:"SIGN_OUT",
    }
}

export const updateUser = (userProfile) => {
    console.log(userProfile)
    return {
        type:"UPDATE_USER",
        payload:{
            userProfile
        }
    }
}