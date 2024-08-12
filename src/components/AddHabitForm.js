import React, { useState } from 'react';

function AddHabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      addHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input 
        type="text" 
        value={habitName} 
        onChange={(e) => setHabitName(e.target.value)} 
        placeholder="Enter habit"
        className="flex-1 px-4 py-2 border rounded-l-lg"
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
      >
        Add Habit
      </button>
    </form>
  );
}

export default AddHabitForm;
