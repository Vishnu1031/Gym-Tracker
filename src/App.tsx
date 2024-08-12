import React, { useState, useEffect } from "react";
import CalendarView from "./components/CalendarView";
import DayView from "./components/DayView";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [habits, setHabits] = useState({});

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits") || "");
    setHabits(storedHabits);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (date, habitName) => {
    const dateKey = date.toDateString();
    setHabits({
      ...habits,
      [dateKey]: {
        ...habits[dateKey],
        ["habits"]: [
          ...(habits[dateKey]?.["habits"] || []),
          { id: Date.now(), name: habitName },
        ],
      },
    });
  };

  const deleteHabit = (date, id) => {
    const dateKey = date.toDateString();
    setHabits({
      ...habits,
      [dateKey]: {
        ...habits[dateKey],
        ["habits"]: habits[dateKey]["habits"].filter(
          (habit) => habit.id !== id
        ),
      },
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">Gym Habit Tracker</h1>
      <CalendarView
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        habits={habits}
      />
      <DayView
        selectedDate={selectedDate}
        habits={habits[selectedDate.toDateString()] || {}}
        addHabit={addHabit}
        deleteHabit={deleteHabit}
      />
    </div>
  );
}

export default App;
