import Product from '../model/product';

export function addProduct (event) {
	
	let price = parseInt(event.currentTarget.parentNode.previousElementSibling.innerHTML);
	let productName = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.innerHTML;
	let productId = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
	let product = new Product(productId,productName,price);

	return {type:"INCREMENT",product:product};
}


export function reduceProduct (event) {
	
	let amount = event.currentTarget.parentNode.previousElementSibling.innerHTML;
	let price = parseInt(event.currentTarget.parentNode.previousElementSibling.previousElementSibling.innerHTML)/amount;
	let productName = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
	let productId = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
	let product = new Product(productId,productName,price);



	return {type:"DECREMENT",product:product};
}