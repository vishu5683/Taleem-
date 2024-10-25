import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PromotionalBanner from "../common comps/promotionalbanner";
import boardIcon from "../../assets/academic/board.png";
import universityIcon from "../../assets/academic/university.svg";
import monitorIcon from "../../assets/academic/monitor.svg";
import Pic1 from "../../assets/academic/fi_1274998.svg";
import Pic2 from "../../assets/academic/fi_9119089.svg";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const grades = [
  { label: "Primary", icon: boardIcon },
  { label: "Middle", icon: Pic1 },
  { label: "Secondary", icon: Pic2 },
  { label: "University", icon: universityIcon },
];

const classes = [
  "Grade 1", "Grade 2", "Grade 3", // First row
  "Grade 4", "Grade 5", "Grade 6", // Second row
];

const TitleSection = ({ title, description }) => (
  <>
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        fontSize: "24px",
        color: "#000000",
        marginBottom: "8px",
        textAlign: "left",
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontWeight: 400,
        fontSize: "18px",
        color: "#5F5F5F",
        marginBottom: "25px", // Reduced the space here
        textAlign: "left",
      }}
    >
      {description}
    </Typography>
  </>
);

const Academic = () => {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const navigate = useNavigate();  // Initialize navigate hook

  const handleNextClick = () => {
    navigate('/tutorlisting');  // Navigate to the /tutorlisting route
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ maxWidth: "1145px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            color: "#737373",
            marginBottom: "16px",
            textAlign: "left",
          }}
        >
          Home &gt; Academic &gt;{' '}
          <span style={{ fontWeight: 700 ,color:"black"}}>Choose your grade</span>
        </Typography>

        {/* Promotional Banner */}
        <PromotionalBanner
          sx={{
            width: "100%",
            backgroundColor: "#F5F5F5",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "25px", // Reduced space here
          }}
        />

        {/* Grade Selection */}
        <TitleSection
          title="Choose your Grade"
          description="From Primary to University, Tailored Tutoring for Every Stage"
        />
<Box sx={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "20px" }}>
  {grades.map((grade, index) => (
    <Box
      key={index}
      onClick={() => setSelectedGrade(grade.label)}
      sx={{
        width: "268px",
        height: "70px",
        backgroundColor: "#C6FFC9",
        border: `2px solid ${selectedGrade === grade.label ? "#40A39B" : "transparent"}`,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        cursor: "pointer",
        transition: "border-color 0.3s",
        gap: "10px",
        justifyContent: "flex-start", // Ensure elements are packed together
      }}
    >
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: selectedGrade === grade.label ? "#40A39B" : "#FFFFFF",
          border: selectedGrade === grade.label ? "2px solid #FFFFFF" : "1px solid #6C6C6C",
        }}
      />
      <img src={grade.icon} alt={grade.label} style={{ width: "24px", height: "24px" }} />
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, fontSize: "16px", color: "#000000" }}
      >
        {grade.label}
      </Typography>
      <ExpandMoreIcon
        sx={{
          color: "#737373",
          width: "20px",
          height: "20px",
          marginLeft: "auto", // Push arrow to the left but keep space
        }}
      />
    </Box>
  ))}
</Box>



        {/* Class Selection */}
        <TitleSection title="Select Class" description="Choose the appropriate class for your grade" />
        {/* Row for Grade 1 to 3 */}
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginBottom: "8px", // Reduced space
          }}
        >
          {classes.slice(0, 3).map((classLabel, index) => (
            <Box
              key={index}
              onClick={() => setSelectedClass(classLabel)}
              sx={{
                width: "74px",
                height: "30px",
                backgroundColor: selectedClass === classLabel ? "#40A39B" : "transparent",
                color: selectedClass === classLabel ? "#FFFFFF" : "#000000",
                border: "1px solid #40A39B",
                borderRadius: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.3s",
                opacity: selectedClass === classLabel ? 1 : 0.5,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 400, fontSize: "12px" }}>
                {classLabel}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Row for Grade 4 to 6 */}
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginBottom: "24px", // Reduced space
          }}
        >
          {classes.slice(3).map((classLabel, index) => (
            <Box
              key={index}
              onClick={() => setSelectedClass(classLabel)}
              sx={{
                width: "74px",
                height: "30px",
                backgroundColor: selectedClass === classLabel ? "#40A39B" : "transparent",
                color: selectedClass === classLabel ? "#FFFFFF" : "#000000",
                border: "1px solid #40A39B",
                borderRadius: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.3s",
                opacity: selectedClass === classLabel ? 1 : 0.5,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 400, fontSize: "12px" }}>
                {classLabel}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Curriculum Selection */}
        <TitleSection
          title="Choose your Curriculum"
          description="From Primary to University, Tailored Tutoring for Every Stage"
        />
<Box sx={{ display: "flex", gap: "4px", flexWrap: "wrap", marginBottom: "20px" }}>
  {grades.map((grade, index) => (
    <Box
      key={index}
      onClick={() => setSelectedGrade(grade.label)}
      sx={{
        width: "268px",
        height: "70px",
        backgroundColor: "#C6FFC9",
        border: `2px solid ${selectedGrade === grade.label ? "#40A39B" : "transparent"}`,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        cursor: "pointer",
        transition: "border-color 0.3s",
        gap: "8px",
        justifyContent: "flex-start", // Ensure elements are packed together
      }}
    >
      <Box
        sx={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: selectedGrade === grade.label ? "#40A39B" : "#FFFFFF",
          border: selectedGrade === grade.label ? "2px solid #FFFFFF" : "1px solid #6C6C6C",
        }}
      />
      <img src={grade.icon} alt={grade.label} style={{ width: "24px", height: "24px" }} />
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, fontSize: "16px", color: "#000000" }}
      >
        {grade.label}
      </Typography>
      <ExpandMoreIcon
        sx={{
          color: "#737373",
          width: "20px",
          height: "20px",
          marginLeft: "auto", // Push arrow to the left but keep space
        }}
      />
    </Box>
  ))}
</Box>



        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginTop: "70px" }}>
          <Button
            variant="outlined"
            sx={{
              width: "164px",
              height: "48px",
              padding: "14px 16px",
              gap: "8px",
              borderRadius: "8px",
              border: "1px solid #40A39B",
              color: "#40A39B",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Back
          </Button>
          <Button
      variant="contained"
      onClick={handleNextClick}  // Navigate on button click
      sx={{
        width: "164px",
        height: "48px",
        padding: "14px 16px",
        gap: "8px",
        borderRadius: "8px",
        backgroundColor: "#40A39B",
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "none",
      }}
    >
      Next
    </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Academic;
