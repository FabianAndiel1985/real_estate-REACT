import Product from '../model/product';

export function addProduct (event) {


	let priceField = event.currentTarget.parentNode.previousElementSibling;
	let price = parseFloat(priceField.innerHTML);
	let productName = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.innerHTML;
	let productId = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
	let product = new Product(productId,productName,price);

	return {type:"ADD",product:product};
}


export function reduceProduct (event) {
	
	let amount = event.currentTarget.parentNode.previousElementSibling.innerHTML;
	let price = parseFloat(event.currentTarget.parentNode.previousElementSibling.previousElementSibling.innerHTML)/amount;
	let productName = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
	let productId = event.currentTarget.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
	let product = new Product(productId,productName,price);



	return {type:"DECREMENT",product:product};
}