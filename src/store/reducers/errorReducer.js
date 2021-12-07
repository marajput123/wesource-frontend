export const errorReducer = (state=false,action) => {
    switch(action.type){
        case "SERVER_ERROR":
            return true
        default:
            if(state === false){
                return state
            }
            return state
    }
}