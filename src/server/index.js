import { wesourceBackend } from "../apis"
import { formatQuery } from "../util/helpers"

export const getAllProducts = async (query = null) => {
    query = formatQuery(query)
    const products = await wesourceBackend.get(`products?page=1&${query}`)
    return products.data
}
