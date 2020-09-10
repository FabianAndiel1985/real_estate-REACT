import React, { Component } from 'react';
import axios from 'axios';

class Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teamMembers: "",
        }
    }

    transformResponseToObjectArray(response) {
        let teamMembers = [];

        for (var key in response.data) {
            let object = {};
            object[key] = response.data[key];
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
        }).catch((error) => {
            console.log(error.message)
        });
    }

    render() {

        return (
            <div>
        <h1> Im the team component</h1>
      </div>
        );
    }

}

export default Team;