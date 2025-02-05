import React, { useState } from 'react';
import TaskTable from './TaskTable';

// Helper function to generate dates for the current month
const generateCalendar = (year, month) => {
  const dates = [];
  const firstDay = new Date(year, month, 1).getDay(); // Day of the week the month starts on
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month

  // Add empty cells for days before the start of the month
  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  // Add dates of the month
  for (let day = 1; day <= daysInMonth; day++) {
    dates.push(day);
  }

  return dates;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasksByDate, setTasksByDate] = useState({}); // Store tasks by date

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    if (day) {
      const clickedDate = new Date(year, month, day);
      setSelectedDate(clickedDate);
    }
  };

  const handleTaskSubmit = (task) => {
    if (selectedDate) {
      const dateKey = selectedDate.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
      setTasksByDate((prev) => ({
        ...prev,
        [dateKey]: task, // Add or update task for the selected date
      }));
    }
  };

  const dates = generateCalendar(year, month);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <div>
      <div style={styles.monthYearDisplay}>
        <button className="prev-next-button" style={styles.arrow} onClick={handlePrevMonth}>
            <i class="fa-solid fa-arrow-left" ></i>
        </button>
        <h2 style={styles.monthYear}>
          {monthNames[month]} {year}
        </h2>
        <button className="prev-next-button" style={styles.arrow} onClick={handleNextMonth}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      
      <div style={styles.tableHeader}>
        {/* Days of the week */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} style={{ fontWeight: 'bold' }}>
            {day}
          </div>
        ))}

        {/* Dates */}
        {dates.map((date, index) => {
          const dateKey = new Date(year, month, date).toISOString().split('T')[0];
          return (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              style={{
                ...styles.tableContent,
                cursor: date ? 'pointer' : 'default',
                position: 'relative',
                backgroundColor:
                  selectedDate &&
                  selectedDate.getDate() === date &&
                  selectedDate.getMonth() === month
                    ? 'rgba(255, 255, 255, 0.39)'
                    : '',
              }}
            >
              {date || ''}
              {/* Render red dot if there's a task for this date */}
              {tasksByDate[dateKey] && (
                <div style={styles.redDot}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  monthYearDisplay:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'10px',
    marginBottom:'20px'
  },
  monthYear:{
    display:'flex',
    width:'20vw',
    justifyContent:'center',
    alignItems:'center'
  },
  arrow:{
    display:'flex',
    width:'3vw',
    height:'3vh',
    alignItems:'center',
    borderRadius:'6px',
    border:'0',
    justifyContent:'center'
  },
  tableHeader: {
    width: '80vw', /* Takes 80% of the viewport width */
    maxWidth: '1200px', /* Optional: Set a max width for large screens */
    height: '70vh', 
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    marginTop: '20px'
  },
  tableContent: {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ccc',
    position: 'relative'
  },
  redDot:{
    position: 'absolute',
    borderRadius:'50%',
    left: '50%',
    width: '8px',
    height: '8px',
    backgroundColor: 'red'
  }
};

export default Calendar;
