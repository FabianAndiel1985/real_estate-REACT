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

    this.setState({
        daytime:daytime
      })
  }


  componentDidMount() {
    this.getGreeting();
  }



  render() {
    
    let morningStyle = {
      color: "green"
    }


//     getBackgroundColor(status) {
//     if (status === 'approved') {
//         return 'blue';
//     }
//     if (status === 'pending') {
//         return 'red';
//     }
//     return 'black';
// }



// render() {
//     // ...

//     return (
//         <div style={{ 'backgroundColor': this.getBackgroundColor(status) }}></div>
//     );
// }

    return (
      <h1 style={}  className="text-center"> Good {this.state.daytime} </h1>
    );
  }
}

export default App;
