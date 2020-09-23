import React,{Fragment} from 'react';
import {Image,InputGroup,FormControl,Button} from 'react-bootstrap';
function Modal() {
	
	return(
		<Modal>
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
              onFocus = {this.onFocus(this.username)}
              onBlur= {this.onBlur(this.username) }
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

			
		 )
}

export default Modal;