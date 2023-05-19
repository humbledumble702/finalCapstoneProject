import React, { useState } from 'react'
import BookingForm from './BookingForm'

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState();
  const [resDate, setResDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');


  
  const handleResDateChange = (e) => {
    setResDate(e.target.value);
  };

  const handleResTimeChange = (e) => {
    setAvailableTimes(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };



  return (
    <div>
      <BookingForm />
    </div>
  )
}

export default BookingPage