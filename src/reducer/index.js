let initialState = [];

function counter(state = initialState, action) {

    if (action.type == "INCREMENT") {
    	console.log(action);
       state++;
    }

    else if (action.type == "DECREMENT") {

    }

   
    return state;
}


export default counter;