import React, { Component } from 'react';
import axios from 'axios';
import TeamMemberDetail from './team-member-detail/team-member-detail';
import {Container, Row, Col} from 'react-bootstrap';
import axiosErrorHandling from '../higher-order-component/axios-error-handling';
import DateContext from '../higher-order-component/date-context';



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
            <div>
        		<h1> Im the team component as of {this.date} </h1>


        		<Container>
        		<Row>
       			{this.state.teamMembers ? this.state.teamMembers.map(
       				(item,index)=>{
       					return (
       					<Col xs={12} md={6} lg={4} className="mt-5 border">
	       					<TeamMemberDetail
	       						firstname={item.firstname}
	       						lastname = {item.lastname}
	       						job={item.job}
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