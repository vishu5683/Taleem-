import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyClassLayout from "../my classes dashboard/MyClassLayout";
import watchIcon from "../../assets/schedule classes/cal.png";
import calIcon from "../../assets/schedule classes/watch.png";
import profileIcon from "../../assets/schedule classes/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Redux/Actions";

const myTabs = ["All", "Online", "Face to Face", "Open session"];
const myTutorTabs= ["All", "Online", "Face to Face"];
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

const IconText = ({ icon, text, value, alt, iconStyle = {} }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img src={icon} alt={alt} style={{ width: "19px", height: "19px", ...iconStyle }} />
    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "14px" }}>
      <span style={{ color: "#737373" }}>{text}: </span>
      <span style={{ color: "#000000" }}>{value}</span>
    </Typography>
  </Box>
);

const ClassBox = ({ title, categories, time, session, teacher, selectedTab }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [tabs,setTabs]=useState(myTabs);
  var getProfileData = useSelector(
    (state) => state.getProfileReducer?.getProfileData
  );
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  useEffect(()=>{
    if(getProfileData?.user_type == 3 ){
      setTabs(myTutorTabs)
    }
    else{
      setTabs(myTabs)
    }
  },[getProfileData])
  const handleClick = () => {
    if (selectedTab === "Face to Face") {
      navigate("/classdetailf2f");
    } else {
      navigate("/classdetails");
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: { xs: '100%', sm: '100%', md: '744px' },
        backgroundColor: "#FFFFFF",
        border: "1px solid #E6E6E6",
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "11px",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: "16px", md: "18px" } }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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
                fontSize: { xs: "10px", md: "12px" },
                color: "black",
              }}
            >
              {category}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <IconText icon={calIcon} text="Time" value={time} alt="Calendar" />
        <IconText icon={watchIcon} text="Session" value={session} alt="Watch" />
      </Box>

      <Box sx={{ width: "100%", height: "3px", backgroundColor: "rgba(240, 240, 240, 1)", marginBottom: "7px" }} />

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img src={profileIcon} alt="Profile" style={{ width: "32px", height: "32px" }} />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 500, fontSize: { xs: "12px", md: "14px" } }}>
            {teacher.name}
          </Typography>
          <Typography variant="h6" sx={{ color: "#737373", fontWeight: 400, fontSize: { xs: "10px", md: "12px" } }}>
            {teacher.role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const MyClasses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [tabs,setTabs]=useState(myTabs);
const [selectedTab, setSelectedTab] = useState("All");

  var getProfileData = useSelector(
    (state) => state.getProfileReducer?.getProfileData
  );
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  useEffect(()=>{
    if(getProfileData?.user_type == 3 ){
      setTabs(myTutorTabs)
    }
    else{
      setTabs(myTabs)
    }
  },[getProfileData])


  return (
    <MyClassLayout>
      <Box sx={{ padding: { xs: "10px", md: "20px" } }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: "16px", color: "#000000", marginBottom: "20px" }}>
          My Classes
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "800px",
            marginBottom: "20px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                {tab}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", marginTop: { xs: "10px", md: "0" } }}>
            <img src={calIcon} alt="Calendar" style={{ width: "17px", height: "19px" }} />
            <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 400 }}>
              Today
            </Typography>
            <ExpandMoreIcon sx={{ color: "#000000", width: "20px", height: "20px" }} />
          </Box>
        </Box>

        {classes.map((classInfo, index) => (
          <ClassBox
            key={index}
            title={classInfo.title}
            categories={classInfo.categories}
            time={classInfo.time}
            session={classInfo.session}
            teacher={classInfo.teacher}
            selectedTab={selectedTab}
          />
        ))}
      </Box>
    </MyClassLayout>
  );
};

export default MyClasses;
