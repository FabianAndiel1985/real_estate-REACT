import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';

class ShoppingCart extends React.Component {

  render() {
    
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
                </tr>
                )           
                }  
        )
             :null}
          
        </tbody>
      </Table>
      </div>
    	);
  }
}


const mapStateToProps = (state)=> {
	return{
		products:state
	}
}


let ShoppingCart2 = connect(mapStateToProps)(ShoppingCart);

export default ShoppingCart2;