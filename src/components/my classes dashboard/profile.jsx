import React from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import { Phone, Mail } from '@mui/icons-material'; 
import ProfileBanner from '../common comps/profilebanners'; 
import profileImage from "../../assets/profile/image.svg";
import MyClassLayout from './MyClassLayout';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Profile = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle "Edit" button click and navigate to the profile update route
  const handleEditClick = () => {
    navigate('/profileupdate'); // Navigate to /profileupdate
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
              width: { xs: '150px', sm: '206px' },
              height: { xs: '150px', sm: '206px' },
              position: 'absolute',
              top: '83px',
              left: '52px',
              borderRadius: '128px',
              border: '6px solid transparent',
              opacity: 1,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              bottom: '19px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'black',
              opacity: 1,
              textAlign: 'center',
            }}
          >
            Naseem Chikitani
          </Typography>

          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#40A39B',
              color: 'white',
              width: '126px',
              height: '36px',
              borderRadius: '8px',
              opacity: 1,
              padding: '14px 16px',
              '&:hover': {
                backgroundColor: '#36A489',
              },
            }}
            onClick={handleEditClick} // Use the navigate function on click
          >
            Edit
          </Button>
        </ProfileBanner>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', padding: '0 16px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373', marginBottom: '8px' }}>
            <Phone sx={{ marginRight: '18px' }} />
            <Typography variant="body1">+463 634 6774</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373', marginBottom: '35px' }}>
            <Mail sx={{ marginRight: '8px' }} />
            <Typography variant="body1">daniela@gmail.com</Typography>
          </Box>

          <Divider sx={{ width: '100%', backgroundColor: '#D9D9D9', marginBottom: '20px' }} />
        </Box>
      </Box>
    </MyClassLayout>
  );
};

export default Profile;
