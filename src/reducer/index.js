let initialState = [{ id: 0, name: "product1", price: 70.80 }];

function counter(state = 0, action) {

    if (action.type == "INCREMENT") {
       state++;
    }


    else if (action.type == "DECREMENT") {

    }

   
    return state;
}


export default counter;