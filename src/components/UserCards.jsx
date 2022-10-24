import React from 'react';
import Figure from "react-bootstrap/Figure";
import {GrLocationPin} from "react-icons/gr";

const UserCards = ({name,location,email,phone,picture,dob}) => {
  return (
    <div>
    <Figure className='d-flex gap-4'>
      <Figure.Image
        className='rounded-circle'
        alt="171x180"
        src={picture?.large}
      />
      <Figure.Caption>
        <h1>{name?.title} {name?.first} {name?.last}</h1>
        <h5>{phone}</h5>
        <h5>{email}</h5>
        <h5>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h5>
        <p><GrLocationPin/>{location?.city}</p>
      </Figure.Caption>
    </Figure>
    </div>
  )
}

export default UserCards