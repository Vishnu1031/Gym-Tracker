import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView({ selectedDate,habits, setSelectedDate }) {
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const isCompleted = Object.keys(habits).includes(date.toDateString()) && habits[date.toDateString()]['habits'].length>0;
      return isCompleted ? 'bg-green-500 text-white p-8 rounded-full' : 'p-8 rounded-full';
    }
  };

  const handleDateClick = (date,view) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-gray-300 p-2 w-1/2 rounded-lg shadow-lg">
      <Calendar
        onClickDay={handleDateClick}
        value={selectedDate}
        className="w-full p-8"
        tileClassName={tileClassName}
      />
    </div>
  );
}

export default CalendarView;



