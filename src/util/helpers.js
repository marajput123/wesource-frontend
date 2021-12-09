export const capatalize = (str) => {
    if((typeof str) === 'string' && str.length > 0){
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return str
}

export const formatQuery = (query) => {
    let queryString = ""
    if(query != null){
        Object.keys(query).map(queryKey => {
            queryString += `${queryKey}=${query[queryKey]}`
        })
    }
    return queryString
}

export const formatFilter = (filters, searchInput) => {
    let formattedFilters = {}
    Object.keys(filters).forEach(key => {
        if(filters[key] !== null && filters[key] !== "" && filters[key] !== false){
            switch(key){
                case "minimumValue":
                    return formattedFilters = {
                        ...formattedFilters,
                        "price__gte":parseFloat(filters[key])
                    }
                case "maximumValue":
                    return formattedFilters = {
                        ...formattedFilters,
                        "price__lte":parseFloat(filters[key])
                    }
                case "date":
                    let date = new Date(filters[key].ts)
                    date.setDate(date.getDate() + 1)
                    return formattedFilters = {
                        ...formattedFilters,
                        "date__lte": date.toISOString().split("T")[0]
                    }
            }
        }
    })
    if(searchInput !== ""){
        formattedFilters = {
            ...formattedFilters,
            "title__icontains":searchInput
        }
    }
    return formattedFilters
}