
var Reducer = function(state,action){
    if(typeof state === "undefined"){
        return {
            arr:{
              username:"111",

              // Store.getState().username

            },
        }
    }
    switch (action.type) {
        case "":

           return state

        default:
            return state
    }
}


export default Reducer;
