import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Table.css';

const Edit = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
  return (
    
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  
        onChange={handleEditFormChange}
        value={editFormData.email}
        name="email"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" onChange={handleEditFormChange}
        value={editFormData.fullName}
        name="fullName"
        />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" onChange={handleEditFormChange}
      value={editFormData.addressPartOne}
      name="addressPartOne"
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" 
      name="addressPartTwo"
      type="text"
      value={editFormData.addressPartTwo} 
      />
    </Form.Group>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control
        value={editFormData.city}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select onChange={handleEditFormChange} value={editFormData.state} defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option> 
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control onChange={handleEditFormChange} value={editFormData.zip}/>
      </Form.Group>
    </Row>
    <Button variant="primary" type="submit" onClick={handleCancelClick}>
      Submit
    </Button>
  </Form>
  )
}

export default Edit;