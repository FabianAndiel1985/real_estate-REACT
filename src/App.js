import React, {Component} from 'react';
import styles from './App.module.css';
import welcomePic from './assets/images/welcomePic.jpg';
import {Image,Modal,InputGroup,FormControl,Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {getTime, 
        getDaytimeString, 
        getFontColour,
        setLgShow,
        getGreeting,
        onFocus,
        onBlur,
        setUsernameRef,
        setPasswordRef,
        handleChange
      } from './app-helper-functions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      daytime:"morning",
      lgShow:false,
      user: '',
      email: '',
      password: ''
    }

    this.setUsernameRef = setUsernameRef.bind(this);
    this.setPasswordRef = setPasswordRef.bind(this);
    this.handleChange = handleChange.bind(this);
    this.getTime = getTime;
    this.getDaytimeString = getDaytimeString;
    this.getFontColour = getFontColour;
    this.setLgShow = setLgShow;
    this.getGreeting=getGreeting;
    this.onFocus = onFocus;
    this.onBlur = onBlur;
  }

  
  componentDidMount() {
    this.getGreeting();
  }

  render() {
   
    return ( 
      <Container className={styles.appContainer}  className="mt-4 mb-5">

        <h1 style={{'color': this.getFontColour()}}  className="text-center"> Good {this.state.daytime} </h1>
        <h1>Welcome to Fabian Andiel Real</h1>
        
        <img className="mt-5" src={require("./assets/images/welcomePic.jpg")}/>
        
        <p className="mt-3">
          <a onClick={() => this.setLgShow()} className={styles.adminLogin}>
            Login as an Administrator
           </a>
        </p>

        <Button onClick={() => console.log(this.state)}>Check Status</Button>


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

          <label htmlFor="email"> Username</label>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="email"
              id="email"
              name="email"
              onChange= {(e)=> this.handleChange(e)}
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
              name="password"
              ref={this.setPasswordRef}
              onChange= {(e)=> this.handleChange(e)}
              onFocus = {()=>this.onFocus(this.password)}
              onBlur= {()=>this.onBlur(this.password)}
            />
          </InputGroup>

          <Button onClick={() => this.setLgShow()} variant="success">Login</Button>

        </Modal.Body>
      </Modal>
      </Container>
    );
  }
}

export default App;
