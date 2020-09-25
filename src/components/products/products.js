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
            products: null
        }
    }

    componentDidMount() {

     axios.get('http://localhost:8080/realEstateBackend/index.php').then((response) => {
             this.setState({
                products: response.data
            });
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
          {this.state.products != null ? this.state.products.map(
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