export function getGreeting() {
    let daytime = this.getDaytimeString();
    this.setState({
        daytime:daytime
      })
  }

  export function handleChange(element) {
    const {name,value} = element.target;
    this.setState({[name]:value});
}

export function getDaytimeString() {
	if(18 >= this.getTime() && this.getTime() >= 12) {
       return "afternoon";
    }

    else if(23 >= this.getTime() && this.getTime() >= 19) {
       return "evening";
    }

    return "morning";
}


export function getTime() {
	 let d = new Date();
      return d.getHours();
}


export function getFontColour() {
	if (this.state.daytime == "morning" || this.state.daytime == "afternoon" ) {
	        return "green";
	      }
	      return "white";
}


export function setLgShow() {
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

export function  onFocus(element) {
    element.style.border = "3px solid green";
  }

export function onBlur(element) {
    element.style.border = "";
  }

export function setUsernameRef(element) {
      this.username = element;
    }

export function setPasswordRef(element)  {
      this.password = element;
    }

