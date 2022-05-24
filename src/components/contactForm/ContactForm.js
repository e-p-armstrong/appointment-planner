import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    // ContactForm
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' onChange={(event) => {setName(event.target.value)}} value={name} placeholder='e.g., Heralax Tekran'/>
      <label>Phone #</label>
      <input type='text' onChange={(event) => {setPhone(event.target.value)}} value={phone} placeholder='e.g., (666) 456-7890' />
      <label>Email</label>
      <input type='text' onChange={(event) => {setEmail(event.target.value)}} value={email} placeholder='e.g., ishouldhavewon@gmail.com'/>
      <input type='submit'/>
    </form>
  );
};
