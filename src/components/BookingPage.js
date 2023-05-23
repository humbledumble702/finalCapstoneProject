import React, { useReducer } from 'react'
import BookingForm from './BookingForm'

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);


  //idek what is going on in this block¯\_(ツ)_/¯
function reducer(availableTimes, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedTime = action.payload;

      switch (selectedTime) {
        case '17:00':
          return ['17:00', '18:00', '19:00'];
        case '18:00':
          return ['18:00', '19:00', '20:00'];
        case '19:00':
          return ['19:00', '20:00', '21:00'];
        case '20:00':
          return ['20:00', '21:00', '22:00'];
        case '21:00':
          return ['21:00', '22:00'];
        case '22:00':
          return ['22:00'];
        default:
          return availableTimes;
      }

    default:
      return availableTimes;
  }
}
  function initializeTimes() {
    return ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
  }



  return (
    <div>
      <BookingForm />
    </div>
  )
}

export default BookingPage