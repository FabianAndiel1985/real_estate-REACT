import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Pic from '../../../assets/images/welcomePic.jpg';

function teamMemberDetail(props) {
	return(
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={require("../../../assets/images/welcomePic.jpg")} />
			  <Card.Body>
			    <div>
			      <Table>
					  <thead>
					  </thead>
					  <tbody>
					    <tr>
					      <th>firstname </th>
					      <td>{props.firstname}</td>
					    </tr>
					    <tr>
					     <th>lastname</th>
					      <td>{props.lastname}</td>
					    </tr>
					     <tr>
					     <th>job</th>
					     <td>{props.job} </td>
					    </tr>
					  </tbody>
					</Table>
					</div>
			    <Button variant="primary"> Get details </Button>
			  </Card.Body>
			</Card>
		)
}

export default teamMemberDetail;