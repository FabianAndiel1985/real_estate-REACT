import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import {addProduct} from '../../actions/actions';

class Products extends React.Component {
	
  constructor(props){
		super(props);
    this.state = {
            producs: 
            [
              {id:"0",name:"product0",price:4.99,amount:1},
              {id:"1",name:"product1",price:7.99,amount:1},
              {id:"2",name:"product2",price:3.99,amount:1},
              {id:"3",name:"product3",price:7.20,amount:1},
              {id:"4",name:"product4",price:4.99,amount:1},
              {id:"5",name:"product5",price:1.39,amount:1},
              {id:"6",name:"product6",price:4.99,amount:1},
              {id:"7",name:"product7",price:2.99,amount:1},
              {id:"8",name:"producz8",price:4.99,amount:1},

            ],
        }
	}


  render() {

    return (
    	<div>
    	<button onClick={this.props.onClick} >Hello</button>
    	<p> {this.props.value}</p>
    	</div>);
  }

}

const mapDispatchToProps = {
      onClick:addProduct
   }

const mapStateToProps = 
(state) => {
  return {
    value:state
  }
}

let Products2 = connect(mapStateToProps,mapDispatchToProps)(Products);

export default Products2;