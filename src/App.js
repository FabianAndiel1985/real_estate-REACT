import React, {Component} from 'react';
import classes from './App.module.css';
import welcomePic from './assets/images/welcomePic.jpg';
import {Image,Modal,InputGroup,FormControl,Button} from 'react-bootstrap';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      daytime:"morning",
      lgShow:false
    }

    this.setUsernameRef =  (element) => {
      this.username = element;
    }

      this.setPasswordRef =  (element) => {
      this.password = element;
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
    if(this.state.lgShow == false) 
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

  onFocus(element) {
    element.style.border = "3px solid green";
  }

  onBlur(element) {
    element.style.border = "";
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
           Login Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <label htmlFor="username"> Username</label>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              id="username"
              ref={this.setUsernameRef}
              onFocus = {()=>this.onFocus(this.username)}
              onBlur= {()=>this.onBlur(this.username) }
            />
          </InputGroup>


          <label htmlFor="password"> Password</label>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="password"
              id="password"
              ref={this.setPasswordRef}
              onFocus = {()=>this.onFocus(this.password)}
              onBlur= {()=>this.onBlur(this.password)}
            />
          </InputGroup>

          <Button onClick={() => this.setLgShow()} variant="success">Login</Button>

        </Modal.Body>
      </Modal>
      </div>
    );
  }
}

export default App;
