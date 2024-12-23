import React, { useEffect } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import { Phone, Mail } from "@mui/icons-material";
import ProfileBanner from "../common comps/profilebanners";
import profileImage from "../../assets/profile/image.svg";
import MyClassLayout from "./MyClassLayout";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  getStudentProfile,
  getTutorProfile,
} from "../../Redux/Actions";
import ArrowForwardIcon from '@mui/icons-material/KeyboardArrowRight';

const Profile = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const dispatch = useDispatch();

  var  profileTutorData = useSelector(
    (state) => state.getTutorProfileReducer?.getTutorProfileData?.profileData
  );
  var  profileStudentData = useSelector(
    (state) => state.getStudentProfileReducer?.getStudentProfileData?.profileData
  );
  var getProfileData = useSelector(
    (state) => state.getProfileReducer?.getProfileData
  );

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  useEffect(() => {
    if (getProfileData?.user_type == 3) {
      dispatch(getTutorProfile());
     
    } else {
      dispatch(getStudentProfile());
    }
  }, [getProfileData]);

  useEffect(()=>{
    console.log(profileTutorData,"profileTutorData")
  },[profileTutorData])

  // Function to handle "Edit" button click and navigate to the profile update route
  const handleEditClick = () => {
    navigate("/profileupdate"); // Navigate to /profileupdate
  };

  return (
    <MyClassLayout>
      <Box>
        <ProfileBanner>
          <Box
            component="img"
            src={profileImage}
            alt="Profile"
            sx={{
              width: { xs: "120px", sm: "150px", md: "206px" },
              height: { xs: "120px", sm: "150px", md: "206px" },
              position: "absolute",
              top: { xs: "60px", sm: "83px" },
              left: { xs: "20px", sm: "52px" },
              borderRadius: "128px",
              border: "6px solid transparent",
              opacity: 1,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              bottom: { xs: "10px", sm: "19px" },
              left: "50%",
              transform: "translateX(-50%)",
              color: "black",
              opacity: 1,
              textAlign: "center",
              fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
            }}
          >
            {getProfileData?.user_type==3 ? profileTutorData?.name : profileStudentData?.name}
          </Typography>

          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: { xs: "10px", sm: "20px" },
              right: { xs: "10px", sm: "20px" },
              backgroundColor: "#40A39B",
              color: "white",
              width: { xs: "90px", sm: "126px" },
              height: { xs: "30px", sm: "36px" },
              borderRadius: "8px",
              padding: { xs: "10px 12px", sm: "14px 16px" },
              fontSize: { xs: "0.75rem", sm: "1rem" }, // Adjust font size for mobile
              "&:hover": {
                backgroundColor: "#36A489",
              },
            }}
            onClick={handleEditClick} // Use the navigate function on click
          >
            Edit
          </Button>
        </ProfileBanner>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: { xs: "10px", sm: "20px" },
            padding: { xs: "0 8px", sm: "0 16px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#737373",
              marginBottom: "8px",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "4px", sm: "0" },
            }}
          >
            <Phone sx={{ marginRight: { sm: "18px" } }} />
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              +{getProfileData?.user_type==3 ? profileTutorData?.mobile_no : profileStudentData?.mobile_no}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#737373",
              marginBottom: "35px",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "4px", sm: "0" },
            }}
          >
            <Mail sx={{ marginRight: { sm: "8px" } }} />
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              {getProfileData?.user_type==3 ? profileTutorData?.email : profileStudentData?.email}
            </Typography>
          </Box>

          <Divider
            sx={{
              width: "100%",
              backgroundColor: "#D9D9D9",
              marginBottom: "20px",
            }}
          />

          {/* New Section: Address and Grade with Icons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              color: "#737373",
              paddingLeft: { xs: "8px", sm: "16px" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <HomeIcon sx={{ marginRight: "8px", color: "#737373" }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: "black",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                Address:{" "}
                <span style={{ fontWeight: 400, color: "#737373" }}>
              {getProfileData?.user_type ==3? profileTutorData?.address : profileStudentData?.address}
              
                </span>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SchoolIcon sx={{ marginRight: "8px", color: "#737373" }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: "black",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                }}
              >
                Grade:{" "}
                <span style={{ fontWeight: 400, color: "#737373" }}>
                {getProfileData?.user_type==3 ? profileTutorData?.grade : profileStudentData?.grade}

                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {getProfileData?.user_type == 3 && (
    

    <Box
    sx={{
      width: '100%',
      height: '76px',
      backgroundColor: '#EBFFFC',
      borderRadius: '12px',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '35px',
      cursor: 'pointer', // Change cursor to pointer for better UX
      '&:hover': { backgroundColor: '#DFF9F6' }, // Optional hover effect
    }}
    onClick={() => navigate('/meetingpreference')}
  >
    {/* Left-side text */}
    <Typography sx={{ fontWeight: 530, fontSize: '19px' }}>
      Meeting Preference
    </Typography>

    {/* Right arrow icon */}
    <ArrowForwardIcon sx={{ fontSize: '24px', color: 'black' }} />
  </Box>
      
      )}
    </MyClassLayout>
  );
};

export default Profile;
