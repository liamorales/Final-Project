import React from 'react';
import './Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';

const Read =({contact, handleEditClick, handleDeleteClick}) => {
    return(
        <tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>
          <Button variant='secondary'
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </Button>
          <Button variant='secondary' type="button" onClick={() => handleDeleteClick(contact.id)}>
            Delete
          </Button>
        </td>
      </tr>
    )
}
export default Read;