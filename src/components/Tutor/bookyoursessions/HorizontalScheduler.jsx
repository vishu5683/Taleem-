import React, { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
        <KeyboardArrowLeftIcon style={{ color: "#737373", width: "25px", height: "23px" }} />
      </div>

      <div style={styles.container}>
        {dates.map((date, index) => {
          const { day, dateNum } = getDayAndDate(date);
          const isSelected = date.toDateString() === selectedDate.toDateString();
          return (
            <div
              key={index}
              onClick={() => setSelectedDate(date)}
              style={{
                ...styles.dateBox,
                backgroundColor: isSelected ? "#40A39B" : "transparent",
                color: isSelected ? "white" : "#737373",
                border: isSelected ? "1.43px solid #40A39B" : "none",
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
        <KeyboardArrowRightIcon style={{ color: "#737373", width: "25px", height: "23px" }} />
      </div>
    </div>
  );
};

const styles = {
  schedulerContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#EBFFFC",
    borderRadius: "16px",
    width: "740px",
    height: "98px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    padding: "10px",
  },
  dateBox: {
    width: "58.69px",
    height: "71.57px",
    borderRadius: "16px",
    padding: "10px",
    margin: "0 5px",
    cursor: "pointer",
    textAlign: "center",
    display: "grid",
    alignItems: "center",
  },
  dayText: {
    fontSize: "14.31px",
    fontWeight: "400",
  },
  dateText: {
    fontSize: "20.04px",
    fontWeight: "700",
  },
  arrow: {
    padding: "0 10px",
    cursor: "pointer",
    userSelect: "none",
  },
};

export default HorizontalScheduler;
