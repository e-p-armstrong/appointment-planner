import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type='text' onChange={(event) => {setTitle(event.target.value)}} value={title} placeholder='e.g., Coffee with Heralax Tekran'/>
      <label>Contact #</label>
      <ContactPicker contacts={contacts} value={contact} setContact={setContact}/>
      <label>Date</label>
      <input type='date' onChange={(event) => {setDate(event.target.value)}} value={date} placeholder='July 5th 2020' min={getTodayString()}/>
      <label>Time</label>
      <input type='text' onChange={(event) => {setTime(event.target.value)}} value={time} placeholder='e.g., 4:21 PM'/>
      <input type='submit'/>
    </form>
  );
};
