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
