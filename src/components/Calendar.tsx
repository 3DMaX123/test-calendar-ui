import React from 'react'
import CalendarUi from './CalendarUi'
import "../styles/calendar.css";

const Calendar = () => {
  return (
    <div className="calendar">
        <p className="calendarSign">Calendar</p>
        <CalendarUi />
    </div>
  )
}

export default Calendar