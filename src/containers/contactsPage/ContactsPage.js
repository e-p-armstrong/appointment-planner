import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList }    from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
	const [phone,setPhone]  = useState(''); //'phone' refers to phone number, ofc. All state variables here refer to what is currently entered into the form.
	const [name, setName]   = useState('');
	const [email, setEmail] = useState('')
	const [isDuplicate, setDuplicate] = useState(false)
  
	
	useEffect(() => {
		props.contacts.forEach((contact) => {
			console.log("Contact.name and name are:",contact.name,name)
			if (contact.name === name){
				setDuplicate(true)
			}
			console.log("isDuplicate is:", isDuplicate)
		});
	},[name]);


	const handleSubmit = (event) => {
    event.preventDefault();
		if(isDuplicate) return;
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
		props.addNewContact(name,phone,email);
		console.log('this fired flawlessly')
		//Clears form values after submission.
		setName('')
		setEmail('')
		setPhone('')
  };
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
	
	
	console.log("Just before the return, isDuplicate: ",isDuplicate)
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
				{isDuplicate ? <h3 style={{color: "red"}}>Entered Name Already Present In Contacts List</h3> : undefined} 
				<ContactForm name={name} setName={setName} 
										 phone={phone} setPhone={setPhone} 
										 email={email} setEmail={setEmail} 
										 handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
				<TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
