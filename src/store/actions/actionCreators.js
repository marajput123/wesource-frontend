import { wesourceBackend } from "../../apis"


export const signInAction = (jwtToken) => {
    const tokenData = JSON.parse(window.atob(jwtToken.split(".")[1]))
    return async (dispatch) => {
        try{
            const id = tokenData.id
            const res = await wesourceBackend.get(`/auth/${id}`,
                {
                    headers: { Authorization: `Bearer ${jwtToken}` }
                }
            )
            const user = res.data[0]
            const userProfile = {
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                rating:user.rating,
                username:user.username
            }
            return dispatch({
                type:"SIGN_IN",
                payload:{
                    jwtToken,
                    id,
                    user:userProfile
                }
            })
        }catch(err){
            return dispatch(errorAction())
        }
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

export const searchQueryAction = (query) => {
    return ({
        type:"SEARCH_QUERY",
        payload:{
            query:query
        }
    })
}

export const errorAction = () => {
    return ({
        type:"SERVER_ERROR"
    })
}