import React, { useEffect, useState } from 'react';
import HomeButton from '../components/HomeButton';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import TaskTable from '../components/TaskTable';

const DailyTodo = () => {
  useEffect(() => {
    document.body.classList.add('universal-bg');
    return () => {
      document.body.classList.remove('universal-bg');
    };
  }, []);

  const [tasksByDate, setTasksByDate] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => setSelectedDate(date);

  const handleTaskSubmit = (task) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setTasksByDate((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), task],
    }));
  };

  return (
    <div className="container">
      <NavBar />
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Daily To Do</h1>
      <div className="left-pane">
        <Calendar
          size="small"
          setDate={handleDateChange}
          tasksByDate={tasksByDate}
        />
      </div>
      <div className="right-pane">
        <TaskTable
          date={selectedDate}
          tasks={tasksByDate[selectedDate.toISOString().split('T')[0]] || []}
          onTaskSubmit={handleTaskSubmit}
        />
      </div>
      <HomeButton />
    </div>
  );
};

export default DailyTodo;
