import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export const AddEvento = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (moment) => {
      setSelectedDate(moment.toDate());
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Fazer algo com a data selecionada
      if (selectedDate) {
        console.log('Data selecionada:', selectedDate);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Datetime value={selectedDate} onChange={handleDateChange} />
        <button type="submit">Submit</button>
      </form>
    );
};
