import React, {Component} from 'react';
import classes from './App.module.css';
import welcomePic from './assets/images/welcomePic.jpg';
import {Image} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      daytime:"morning",
      lgShow:false
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

  setLgShow() {
    if(this.state.lgShow === false) 
    {
      this.setState({
        lgShow:true
      })
    }

    else {
      this.setState({
        lgShow:false
      })
    }
  }


  componentDidMount() {
    this.getGreeting();
  }

  render() {
   
    return ( 
      <div>
        <h1 style={{'color': this.getFontColour()}}  className="text-center"> Good {this.state.daytime} </h1>
        <img src={require("./assets/images/welcomePic.jpg")}/>
        <a onClick={() => this.setLgShow()} className={classes.adminLogin}>Login as an Administrator</a>

       <Modal
        size="lg"
        show={this.state.lgShow}
        onHide={() => this.setLgShow()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>



      </div>
    );
  }
}

export default App;
