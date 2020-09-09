import React, {Component} from 'react';

class Team extends Component {


  componentDidMount() {
   
    console.log(this.props.history);
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