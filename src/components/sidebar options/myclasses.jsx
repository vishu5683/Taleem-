import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyClassLayout from "../my classes dashboard/MyClassLayout";
import calIcon from "../../assets/schedule classes/cal.png";
import watchIcon from "../../assets/schedule classes/watch.png";
import profileIcon from "../../assets/schedule classes/profile.png";

const tabs = ["All", "Online", "Face to Face", "Open session"];
const classes = [
  {
    title: "Craft and Art Classes - For Beginner’s",
    categories: ["English", "Course"],
    time: "11:30 AM - 12:30 PM",
    session: "Individual",
    teacher: { name: "Quamar Alam", role: "Artist" },
  },
  {
    title: "Algebra for Primary Students (Grade - 6th)",
    categories: ["Arabic", "Academic"],
    time: "01:00 PM - 02:00 PM",
    session: "Individual",
    teacher: { name: "John Doe", role: "Artist" },
  },
];

// Reusable component for displaying icons with text
const IconText = ({ icon, text, value, alt, iconStyle = {} }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img src={icon} alt={alt} style={{ width: "19px", height: "19px", ...iconStyle }} />
    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "14px" }}>
      <span style={{ color: "#737373" }}>{text}: </span>
      <span style={{ color: "#000000" }}>{value}</span>
    </Typography>
  </Box>
);

// ClassBox component to display each class
const ClassBox = ({ title, categories, time, session, teacher }) => (
  <Box
    sx={{
      width: "744px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E6E6E6",
      borderRadius: "12px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "11px",
      marginBottom: "20px",
    }}
  >
    {/* Title and Category Tags */}
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "18px" }}>
        {title}
      </Typography>

      {/* Category Tags */}
      <Box sx={{ display: "flex", gap: "8px" }}>
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              padding: "5px 16px",
              borderRadius: "17px",
              border: "1px solid",
              borderImageSource: "linear-gradient(102.58deg, #40A39B -18.44%, #C6FFC9 100%)",
              background: "linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)",
              fontWeight: 400,
              fontSize: "12px",
              color: "#40A39B",
            }}
          >
            {category}
          </Box>
        ))}
      </Box>
    </Box>

    {/* Time and Session Info */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <IconText icon={calIcon} text="Time" value={time} alt="Calendar" />
      <IconText icon={watchIcon} text="Session" value={session} alt="Watch" />
    </Box>

    {/* Divider line */}
    <Box sx={{ width: "100%", height: "3px", backgroundColor: "rgba(240, 240, 240, 1)", marginBottom: "7px" }} />

    {/* Profile Section */}
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src={profileIcon} alt="Profile" style={{ width: "32px", height: "32px" }} />
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 500, fontSize: "14px" }}>
          {teacher.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "#737373", fontWeight: 400, fontSize: "12px" }}>
          {teacher.role}
        </Typography>
      </Box>
    </Box>
  </Box>
);

const MyClasses = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <MyClassLayout>
      <Box sx={{ padding: "20px" }}>
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            color: "#000000",
            marginBottom: "20px",
          }}
        >
          My Classes
        </Typography>

        {/* Tabs Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "800px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            {tabs.map((tab, index) => (
              <Box
                key={index}
                onClick={() => setSelectedTab(tab)}
                sx={{
                  padding: "3px 16px",
                  borderRadius: "54px",
                  border: "1px solid",
                  borderColor: selectedTab === tab ? "#40A39B" : "#E6E6E6",
                  backgroundColor: selectedTab === tab ? "#40A39B" : "#FFFFFF",
                  color: selectedTab === tab ? "#FFFFFF" : "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontWeight: 400,
                  height: "38px",
                }}
              >
                {tab}
              </Box>
            ))}
          </Box>

          {/* Calendar Icon with Today Dropdown */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
            <img src={calIcon} alt="Calendar" style={{ width: "17px", height: "19px" }} />
            <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 400 }}>
              Today
            </Typography>
            <ExpandMoreIcon sx={{ color: "#000000", width: "20px", height: "20px" }} />
          </Box>
        </Box>

        {/* Class Boxes */}
        {classes.map((classInfo, index) => (
          <ClassBox
            key={index}
            title={classInfo.title}
            categories={classInfo.categories}
            time={classInfo.time}
            session={classInfo.session}
            teacher={classInfo.teacher}
          />
        ))}
      </Box>
    </MyClassLayout>
  );
};

export default MyClasses;
