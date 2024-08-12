import React from 'react';
import HabitItem from './HabitItem';
import AddHabitForm from './AddHabitForm';

function DayView({ selectedDate, habits, addHabit, deleteHabit }) {

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6 w-full max-w-lg">
      <h2 className="text-xl font-semibold mb-4">{selectedDate.toDateString()}</h2>
      <ul className="space-y-2">
        {(habits["habits"] || []).map(habit => (
          <HabitItem
            key={habit.id}
            habit={habit}
            deleteHabit={() => deleteHabit(selectedDate, habit.id)}
          />
        ))}
      </ul>
      <AddHabitForm
        addHabit={(habitName) => addHabit(selectedDate, habitName)}
      />
    </div>
  );
}

export default DayView;
