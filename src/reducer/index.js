let initialState = [];

function counter(state = initialState, action) {

	
    if (action.type == "INCREMENT") {
    	let newPurchases = null;
    	let newProductInCart = true;

    	if(state != []) {

    		state.forEach((item)=> {
    			if(item.id == action.product.id ) {
    				console.log("bought the same");
    				item.amount++;
    				item.price += action.product.price;
    				newProductInCart = false;
    			}   			
    		})

    	}

    	if (newProductInCart)  {
    		newPurchases = [...state,action.product];
	    	state = newPurchases;
    	}

	   
        return state;
    }

   
   
}


export default counter;