import React, { useState } from 'react';

const generateCalendar = (year, month) => {
  const dates = [];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) dates.push(null);
  for (let day = 1; day <= daysInMonth; day++) dates.push(day);

  return dates;
};

const Calendar = ({ size, setDate, tasksByDate }) => {
  const calendarClass = size === 'large' ? 'calendar-large' : 'calendar-small';
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // console.log('cd:', currentDate)
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  
  const handleDateClick = (date) => {
    if (date) {
      const newDate = new Date(year, month, date);
      setSelectedDate(newDate);
      setDate(newDate);
    }
  };

  const dates = generateCalendar(year, month);
  console.log('dates', dates)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <div>
      <div style={styles.monthYearDisplay}>
        <button className="prev-next-button" onClick={handlePrevMonth}>❮</button>
        <h2>{monthNames[month]} {year}</h2>
        <button className="prev-next-button" onClick={handleNextMonth}>❯</button>
      </div>

      <div className={calendarClass} style={styles.tableHeader}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} style={{ fontWeight: 'bold' }}>{day}</div>
        ))}
        {dates.map((date, index) => {
          console.log('date',date,'index',index, 'and', new Date(year, month, date).toISOString().split('T')[0])
          if (!date) return <div key={index} style={styles.dateCell}></div>; // Skip null dates
          const dateKey = new Date(year, month, date).toISOString().split('T')[0];
          const hasTask = tasksByDate?.[dateKey]?.length > 0;

          console.log('dateKey',dateKey,'hasTask',hasTask)
          return (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              style={{
                ...styles.dateCell,
                backgroundColor: selectedDate &&
                  selectedDate.getDate() === date &&
                  selectedDate.getMonth() === month ? '#d3d3d3' : '',
              }}
            >
              {date || ''}
              {hasTask && <div style={styles.redDot}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  monthYearDisplay: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tableHeader: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px' },
  dateCell: { padding: '10px', textAlign: 'center', border: '1px solid #ccc', position: 'relative' },
  redDot: { width: '8px', height: '8px', backgroundColor: 'red', borderRadius: '50%', position: 'absolute', top: '5px', right: '5px' },
};

export default Calendar;
