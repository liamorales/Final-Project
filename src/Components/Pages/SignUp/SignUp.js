import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,} from 'react';
import {nanoid} from 'nanoid';
import data from "./DancerData.json"
import Edit from './Edit';
import Read from './Read';
import './Table.css';


const SignUp =()=> {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    addressPartOne: "",
    addressPartTwo: "",
    city: "",
    email: "",
    zip: "",
    state: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    addressPartOne: "",
    addressPartTwo: "",
    city: "",
    email: "",
    zip: "",
    state: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      addressPartTwo: addFormData.addressPartTwo,
      email: addFormData.email,
      addressPartOne: addFormData.addressPartOne,
      city: addFormData.city,
      zip: addFormData.zip,
      state: addFormData.state,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      addressPartTwo: editFormData.addressPartTwo,
      email: editFormData.email,
      addressPartOne: editFormData.addressPartOne,
      city: editFormData.city,
      zip: editFormData.zip,
      state: editFormData.state,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      addressPartTwo: contact.addressPartTwo,
      email: contact.email,
      addressPartOne: contact.addressPartOne,
      city: contact.city,
      zip: contact.zip,
      state: contact.state,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  return (
    <>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            onChange={handleAddFormChange}
            name="email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name"
            onChange={handleAddFormChange}
            name="fullName" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St"
          onChange={handleAddFormChange}
          name="addressPartOne" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor"
          name="addressPartTwo"
          type="text"
          onChange={handleAddFormChange} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={handleAddFormChange} name="city" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select onChange={handleAddFormChange} name="state" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={handleAddFormChange} name="zip" />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit" size="sm" onSubmit={handleEditFormSubmit}>
        Submit
      </Button>
    </Form>
    <div>
        <table striped hover variant="dark" onSubmit={handleEditFormSubmit}>
          <thead>
            <tr>
              <th>WELCOME!</th>
            </tr>
          </thead>
          <tbody hover >
            {contacts.map((contact) => (
              <div>
                {editContactId === contact.id ? (
                  <Edit
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <Read
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
             </div>
            ))}
          </tbody>
        </table>
    </div>
    </>
  
  );

}
    

export default SignUp;