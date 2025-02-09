import React, { useState } from 'react';

const TaskTable = ({ date, tasks, onTaskSubmit }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => setTaskInput(e.target.value);

  const handleAddTask = () => {
    if (taskInput.trim()) {
      onTaskSubmit(taskInput);
      setTaskInput('');
    }
  };

  return (
    <div>
      <h2>Tasks for {date.toDateString()}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskTable;
