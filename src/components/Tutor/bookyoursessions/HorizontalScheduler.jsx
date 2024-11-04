import React, { useState } from "react";

// Utility function to get the day name and date
const getDayAndDate = (date) => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = dayNames[date.getDay()];
  const dateNum = date.getDate();
  return { day, dateNum };
};

const HorizontalScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Adjust the selected date range by moving forward or backward
  const changeWeek = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  // Generate an array of dates for the scheduler (e.g., 7 days around the selected date)
  const generateDates = (currentDate) => {
    const dates = [];
    for (let i = -3; i <= 3; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + i);
      dates.push(newDate);
    }
    return dates;
  };

  const dates = generateDates(selectedDate);

  return (
    <div style={styles.schedulerContainer} className="justify-center">
      {/* Left arrow for moving to previous dates */}
      <div style={styles.arrow} onClick={() => changeWeek(-7)}>
        {"<"}
      </div>

      <div style={styles.container}>
        {dates.map((date, index) => {
          const { day, dateNum } = getDayAndDate(date);
          return (
            <div
              key={index}
              onClick={() => setSelectedDate(date)}
              style={{
                ...styles.dateBox,
                backgroundColor:
                  date.toDateString() === selectedDate.toDateString()
                    ? "#40A39B" // Highlight color
                    : "#EBFFFC",
              }}
            >
              <span style={styles.dayText}>{day}</span>
              <span style={styles.dateText}>{dateNum}</span>
            </div>
          );
        })}
      </div>

      {/* Right arrow for moving to next dates */}
      <div style={styles.arrow} onClick={() => changeWeek(7)}>
        {">"}
      </div>
    </div>
  );
};

const styles = {
  schedulerContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor:'#EBFFFC',
    borderRadius:'14px'
  },
  container: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    padding: "10px",
    
  },
  dateBox: {
    minWidth: "70px",
    padding: "10px",
    margin: "0 5px",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display:'grid'
  },
  dayText: {
    fontSize: "14px",
    // color: "#333",
    fontWeight: "bold",
  },
  dateText: {
    fontSize: "16px",
    color: "#333",
  },
  arrow: {
    fontSize: "24px",
    cursor: "pointer",
    padding: "0 10px",
    userSelect: "none",
  },
};

export default HorizontalScheduler;
