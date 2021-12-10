import { wesourceBackend } from "../apis"
import { formatQuery } from "../util/helpers"

export const getAllProducts = async (query = null) => {
    const products = await wesourceBackend.get(
        `products?page=1&`,
        {
            params:
            {...query}
        }
    )
    return products.data
}

export const getMyProducts = async (userId) => {
    const myProductIds = await wesourceBackend.get(
        `group?user_id=${userId}`
    )
    return myProductIds
}


export const postProduct = async (product, jwtToken, onSuccess=null, onError=null) => {
    try{
        const result = await wesourceBackend.post(
            "product",
            {
                ...product
            },
            {headers: { Authorization: `Bearer ${jwtToken}` }}
        )
        if(onSuccess){
            onSuccess()
        }
        return result
    }catch(err){
        if(onError){
            onError()
        }
    }
}

export const getGroup = async (groupId) => {
    try{
        const group = await wesourceBackend.get(
            `group/${groupId}`
        )
    }catch(err){

    }
}

export const addUserToGroup = async(groupId, userId, jwtToken, onSuccess=null, onError=null) => {
    try{
        const result = await wesourceBackend.post(
            `group/${groupId}`,
            {
                user_id:userId
            },
            {headers: { Authorization: `Bearer ${jwtToken}` }}
        )
        if(result.status === 201){
            if(onSuccess){
                return onSuccess ()
            }
            return result
        }
        return result
    }catch(err){
        onError()
    }
}