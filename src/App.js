import React,{Component} from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      daytime:"morning",
    }
  }

  getTime() {
      let d = new Date();
      return d.getHours();
  }


  getGreeting() {
    let daytime="";

    if(18 >= this.getTime() && this.getTime() >= 12) {
       daytime="afternoon";
    }

    else if(23 >= this.getTime() && this.getTime() >= 19) {
       daytime="evening";
    }

    else{
      daytime="morning";
    }

    this.setState({
        daytime:daytime
      })
  }

  getFontColour() {
      if (this.state.daytime == "morning" || this.state.daytime == "afternoon" ) {
        return "green";
      }
      return "white";
  }


  componentDidMount() {
    this.getGreeting();
  }



  render() {
   
    return ( 
      <div>
        <h1 style={{'color': this.getFontColour()}}  className="text-center"> Good {this.state.daytime} </h1>
      </div>
    );
  }
}

export default App;
