import React, { useState } from "react";
import "./calendarStyle.css";
import { Form, Modal } from "./Form";

export const LembretesComponents = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleFormSubmit = (newEventData) => {
    if (newEventData && selectedDate) {
      const newEventObject = {
        date: selectedDate,
        title: newEventData,
      };
      setEvents([...events, newEventObject]);
      setShowModal(false);
      setSelectedDate(null);
      setNewEvent("");
    }
  };

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(prevMonthDate);
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextMonthDate);
  };

  const getMonthName = () => {
    const options = { month: "long", year: "numeric" };
    return currentDate.toLocaleDateString("pt-BR", options);
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={handlePrevMonth}>
          ⏪
        </button>
        <h1>{getMonthName()}</h1>
        <button className="calendar-nav" onClick={handleNextMonth}>
          ⏩
        </button>
      </div>
      <div className="calendar-body">
        <div className="calendar-dates">
          {[...Array(getDaysInMonth())].map((_, index) => {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1);
            const isCurrentMonth = date.getMonth() === currentDate.getMonth();
            return (
              <button
                key={index}
                className={`calendar-date ${isCurrentMonth ? "" : "disabled"}`}
                onClick={() => handleDayClick(date)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <div className="calendar-events">
          {events.map((event) => (
            <div key={event.date.toISOString()} className="calendar-event">
              <div className="event-date">
                {event.date.toLocaleDateString()}
              </div>
              <div className="event-title">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal><Form onSubmit={handleFormSubmit}/></Modal>
      )}
    </div>
  );
};

