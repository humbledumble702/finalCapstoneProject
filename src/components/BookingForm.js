import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    date: '',
    bookingTime: {availableTimes},
    numberOfGuests: '',
    occasion: ''
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(
      (prev) => {
        return {...prev, [name]: value};
      })
  };
    // const fetchData = () => {
    //   fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
    //   .then(response => response.json())
    //   .then(jsonData => setFormData(jsonData))
    // }

    const handleClick = (e) => {
        e.preventDefault();
    console.log("it has been submitted👍");
  }

  return (
    <div>
      <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={formData.date} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={formData.bookingTime} onChange={handleChange}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.numberOfGuests} onChange={handleChange} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Book reservations</button>
      </form>
    </div>
  );
}

export default BookingForm;
