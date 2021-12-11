import { TrySharp } from "@mui/icons-material"
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
        return group.data
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

export const GETUser = async (userId, jwtToken ,onSuccess=null, onError=null) => {
    try{
        const user = await wesourceBackend.get(`auth/${userId}`, 
            {headers: { Authorization: `Bearer ${jwtToken}` }}
        )
        if(onSuccess){
            onSuccess(user.data)
            return user.data
        }
        return user
    }catch(err){
        if(onError){
            onError()
        }
    }
}

export const POSTAnnouncement = async (groupdId, description, jwtToken) => {
    try{
        const announcement = await wesourceBackend.post(
            `group/announcement/${groupdId}`,
            {
                description:description
            },
            {headers: { Authorization: `Bearer ${jwtToken}` }}
        )
        let convertedDate = new Date(announcement.data.date["$date"])
        convertedDate = convertedDate.toDateString().split(" ").slice(1).join(" ")
        return {...announcement.data, date:convertedDate}
    }catch(err){
        return "Could not post"
    }
}

export const DELETEAnnouncement = async (groupId, announcementId, jwtToken) => {
    try{
        const announcement = await wesourceBackend.delete(
            `group/announcement/${groupId}`,
            {
                headers: { Authorization: `Bearer ${jwtToken}` },
                data: {
                    announcementId:announcementId
                },
            }
        )
            return true
        }catch(err){
            return false
        }
}