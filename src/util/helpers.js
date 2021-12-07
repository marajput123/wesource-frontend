export const capatalize = (str) => {
    if((typeof str) === 'string' && str.length > 0){
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return str
}

export const formatQuery = (query) => {
    const queryString = ""
    if(query != null){
        Object.keys(query).map(queryKey => {
            queryString += `${queryKey}=${query[queryKey]}`
        })
    }
    return queryString
}