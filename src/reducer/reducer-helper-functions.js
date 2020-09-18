export function checkIfProductIsInCart (state,action) {
	
	let newProductInCart  = true;
	
	state.forEach((item)=> {
    			if(item.id == action.product.id ) {
    				newProductInCart = false;
    			} 			
    		})
	return newProductInCart;
}

export function increaseProductAmountAndPrice(state,action) {
		state.forEach((item)=> {
    			if(item.id == action.product.id ) {
    				item.amount++;
    				item.price += action.product.price;
    			} 			
    		})
}