import React from "react";

export const ContactPicker = ({contacts,value,setContact}) => {
  return (
    <select onChange={(event) => setContact(event.target.value)}>
      <option>Choose an option plz</option>
      {contacts.map((contact)=>{
        return <option>{contact.name}</option>
      })}
    </select>
  );
};
