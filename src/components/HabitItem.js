import React, { useState } from "react";

function HabitItem({ habit, deleteHabit }) {
  return (
    <li className="flex justify-between items-center p-2 bg-gray-100 rounded shadow-sm">
      <span className="cursor-pointer">{habit.name}</span>

      <button className="text-red-500" onClick={deleteHabit}>
        Delete
      </button>
    </li>
  );
}

export default HabitItem;
