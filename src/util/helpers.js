export const capatalize = (str) => {
    if((typeof str) === 'string' && str.length > 0){
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return str
}