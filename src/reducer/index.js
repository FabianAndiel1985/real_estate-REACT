import {checkIfProductIsInCart,increaseProductAmountAndPrice} from './reducer-helper-functions';

let initialState = [];

function counter(state = initialState, action) {

    if (action.type == "INCREMENT") {
    	
    	let newPurchases = null;

    	let newProductInCart = checkIfProductIsInCart(state,action);

    	if (newProductInCart)  {
    		newPurchases = [...state,action.product];
	    	state = newPurchases;
    	}

    	else {
    		increaseProductAmountAndPrice(state,action);
    	}

        return state;
    }


    

   
   
}


export default counter;