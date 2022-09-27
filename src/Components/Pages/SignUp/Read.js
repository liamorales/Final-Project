import React from 'react';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';

const Read =({contact, handleEditClick, handleDeleteClick}) => {
    return(
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.addressPartOne}</td>
            <td>{contact.addressPartTwo}</td>
            <td>{contact.city}</td>
            <td>{contact.zip}</td>
            <td>{contact.email}</td>
        <td>
          <Button
            type="button"
            variant="success"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </Button>
          <Button variant="danger" 
          type="button" 
          onClick={() => handleDeleteClick(contact.id)}>
            Delete
          </Button>
        </td>
      </tr>
    )
}
export default Read;