import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import {addProduct} from '../../actions/actions';
import {Table} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import styles from './products.module.css';
import axios from 'axios';

class Products extends React.Component {
	
  constructor(props){
		super(props);
    this.state = {
            products: 
            [
              {id:"0",name:"estate0",price:4.99},
              {id:"1",name:"estate1",price:7.99},
              {id:"2",name:"estate2",price:3.99},
              {id:"3",name:"estate3",price:7.20},
              {id:"4",name:"estate4",price:4.99},
              {id:"5",name:"estate5",price:1.39},
              {id:"6",name:"estate6",price:4.99},
              {id:"7",name:"estate7",price:2.99},
              {id:"8",name:"estate8",price:4.99}

            ],
        }
    }

    componentDidMount() {

     axios.get('http://localhost:8080/realEstateBackend/index.php').then((response) => {
           console.log(response);
        
        })
        .catch((error) => {
            console.log(error.message);
        });
    
    }

   
   
  render() {
    
    return (
    	<Container className="my-5">
        <Table>
          <thead>
            <tr>
              <th className={styles.tableHeading}>number</th>
              <th className={styles.tableHeading}>product</th>
              <th className={styles.tableHeading}>price </th>
              <th className={styles.tableHeading}>actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.products ? this.state.products.map(
                 (item,index)=>{
                   return (
                   <tr key={item.id}>
                    <td className={styles.tableText}>{item.id}</td>
                    <td className={styles.tableText}>{item.name}</td>
                    <td className={styles.tableText}>{item.price}</td>
                    <td> <button className={styles.tableText} onClick={(event)=>this.props.onClick(event)}> add to cart</button> </td>
                  </tr>
                  )           
                  }  
          )
               :null}
            
          </tbody>
        </Table>
    	</Container>);
  }
}



const mapDispatchToProps = {
      onClick:addProduct
   }

const mapStateToProps = 
null;

let Products2 = connect(mapStateToProps,mapDispatchToProps)(Products);

export default Products2;