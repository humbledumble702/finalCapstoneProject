import React, { useState } from "react";

function BookingForm() {
  // eslint-disable-next-line
  //state for the form data
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();
  const[occasions, setOccasions] = useState()


  const fetchData = () => {
    fetch('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [time]: value,
      [date]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("it has been submitted👍");
  }

  return (
    <div>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleChange}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleChange}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={handleChange}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit" onClick={handleClick}>Book reservations</button>
      </form>
    </div>
  );
}

export default BookingForm;
