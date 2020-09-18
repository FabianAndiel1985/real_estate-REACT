import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import {addProduct} from '../../actions/actions';
import {Table} from 'react-bootstrap';

class Products extends React.Component {
	
  constructor(props){
		super(props);
    this.state = {
            products: 
            [
              {id:"0",name:"product0",price:4.99},
              {id:"1",name:"product1",price:7.99},
              {id:"2",name:"product2",price:3.99},
              {id:"3",name:"product3",price:7.20},
              {id:"4",name:"product4",price:4.99},
              {id:"5",name:"product5",price:1.39},
              {id:"6",name:"product6",price:4.99},
              {id:"7",name:"product7",price:2.99},
              {id:"8",name:"producz8",price:4.99},

            ],
        }
    }

   
   
  render() {
    
    return (
    	<div>
    
    	<p> {this.props.value}</p>
      <Table>
        <thead>
          <tr>
            <th>number</th>
            <th>product</th>
            <th>price </th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
        {this.state.products ? this.state.products.map(
               (item,index)=>{
                 return (
                 <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td> <button onClick={(event)=>this.props.onClick(event)}> add to cart</button> </td>
                </tr>
                )           
                }  
        )
             :null}
          
        </tbody>
      </Table>
    	</div>);
  }
}



const mapDispatchToProps = {
      onClick:addProduct
   }

const mapStateToProps = 
null;

let Products2 = connect(mapStateToProps,mapDispatchToProps)(Products);

export default Products2;