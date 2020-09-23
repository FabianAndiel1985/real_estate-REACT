import React, {Component} from 'react';
import styles from './App.module.css';
import welcomePic from './assets/images/welcomePic.jpg';

import {Container} from 'react-bootstrap';
import {getTime, 
        getDaytimeString, 
        getFontColour,
        setLgShow,
        getGreeting,
        onFocus,
        onBlur,
        setUsernameRef,
        setPasswordRef
      } from './app-helper-functions';
import Modal from './components/modal/modal';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      daytime:"morning",
      lgShow:false
    }

    this.setUsernameRef = setUsernameRef.bind(this);
    this.setPasswordRef = setPasswordRef.bind(this);
    this.getTime = getTime;
    this.getDaytimeString = getDaytimeString;
    this.getFontColour = getFontColour;
    this.setLgShow = setLgShow;
    this.getGreeting=getGreeting;
    this.onFocus = onFocus;
    this.onBlur = onBlur;
    this.Modal = Modal;
  }

  
  componentDidMount() {
    this.getGreeting();
  }

  render() {
   
    return ( 
      <Container className="mt-4">

        <h1 style={{'color': this.getFontColour()}}  className="text-center"> Good {this.state.daytime} </h1>
        <h1>Welcome to Fabian Andiel Real</h1>
        
        <img className="mt-5" src={require("./assets/images/welcomePic.jpg")}/>
        
        <p className="mt-3 mb-5">
          <a onClick={() => this.setLgShow()} className={styles.adminLogin}>
            Login as an Administrator
           </a>
        </p>

        {this.state.lgShow ?  <Modal/>: null}
      </Container>
    );
  }
}

export default App;
