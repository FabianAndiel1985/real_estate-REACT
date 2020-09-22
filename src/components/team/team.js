import React, { Component } from 'react';
import axios from 'axios';
import TeamMemberDetail from './team-member-detail/team-member-detail';
import {Container, Row, Col} from 'react-bootstrap';
import axiosErrorHandling from '../higher-order-component/axios-error-handling';
import DateContext from '../higher-order-component/date-context';
import styles from './team.module.css';



class Team extends Component {  
    

    constructor(props,context) {
        super(props);
        this.state = {
            teamMembers: "",
        }
        this.date = DateContext._currentValue2;    
    }

    transformResponseToObjectArray(response) {
        let teamMembers = [];
        for (var key in response.data) {
        	let object = {};
        	object["id"] = key;
        	for (var key2 in response.data[key]) {	
        		object[key2] = response.data[key][key2];
        	}
        	teamMembers.push(object);
        }
        return teamMembers;
    }

    componentDidMount() {
        axios.get('/team.json').then((response) => {
            let teamMembers = this.transformResponseToObjectArray(response);
            this.setState({
                teamMembers: teamMembers
            })
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
   

    render() {

        return (
            <div className="pt-5">
        		<h1 className={styles.heading}> Our team </h1>
            <sub className={styles.sub}> as of {this.date} </sub>


        		<Container className="mt-5" fluid style={{ padding: " 0 10% 0 10%" }}>
        		<Row>
       			{this.state.teamMembers ? this.state.teamMembers.map(
       				(item,index)=>{
       					return (
       					<Col key={item.id} xs={12} s={12}  md={12} lg={6} xl={4} className="mt-5">
	       					<TeamMemberDetail
	       						firstname={item.firstname}
	       						lastname = {item.lastname}
	       						job={item.job}
                    image={item.image}
	       					/> 
       					</Col>
       					)	
                 				
       				}
       				)
       			:null}
        		</Row>
        		</Container>
      		</div>
        );
    }

}


export default axiosErrorHandling(Team,axios);