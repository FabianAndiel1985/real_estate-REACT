import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';

class Products extends React.Component {
	constructor(props){
		super(props);
	}

increment=()=> {return {type:"INCREMENT"}}
	
	componentDidMount() {
		console.log(this.props);
	}


  render() {

    return (
    	<div>
    	<button onClick={this.props.onClick} >Hello</button>
    	<p> {this.props.value}</p>
    	</div>);
  }

}




const mapDispatchToProps = (dispatch) => {
   return {
      onClick:()=> dispatch({type:"INCREMENT"})
   }
}


const mapStateToProps = 
(state) => {
  return {
    value:state
  }
}



let Products2 = connect(mapStateToProps,mapDispatchToProps)(Products);

export default Products2;