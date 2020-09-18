import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {reduceProduct} from '../../actions/actions';

class ShoppingCart extends React.Component {

  render() {

    function calculate(array) {
       let totalPrice = 0;
       for(let i=0;i<array.length;i++){
         totalPrice += array[i].price;
       }
       console.log(totalPrice);
       return totalPrice;
    }

    const totalAmount = this.props.products != null ? 
      calculate(this.props.products)
     :null ;
    
    return (
    	<div>
    	<h1>Your purchases </h1>
    	<Table>
        <thead>
          <tr>
            <th>number</th>
            <th>product</th>
            <th>price </th>
            <th>amount</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {this.props.products? this.props.products.map(
               (item,index)=>{
                 return (
                 <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                  <td><button onClick={(event)=>this.props.onClick(event)}> Reduce amount</button></td>
                </tr>
                )           
                }  
        )
             :null}
          
        </tbody>
      </Table> 
      <p> Your total is: {totalAmount}</p>
      </div>
    	);
  }
}


const mapStateToProps = (state)=> {
	return{
		products:state
	}
}

const mapDispatchToProps = {
      onClick:reduceProduct
   }


let ShoppingCart2 = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);

export default ShoppingCart2;