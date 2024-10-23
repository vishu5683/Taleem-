import React from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import { Phone, Mail } from '@mui/icons-material'; 
import ProfileBanner from '../common comps/profilebanners'; 
import profileImage from "../../assets/profile/image.svg";
import MyClassLayout from './MyClassLayout';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';

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
              width: { xs: '120px', sm: '150px', md: '206px' },
              height: { xs: '120px', sm: '150px', md: '206px' },
              position: 'absolute',
              top: { xs: '60px', sm: '83px' },
              left: { xs: '20px', sm: '52px' },
              borderRadius: '128px',
              border: '6px solid transparent',
              opacity: 1,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              bottom: { xs: '10px', sm: '19px' },
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'black',
              opacity: 1,
              textAlign: 'center',
              fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Responsive font size
            }}
          >
            Naseem Chikitani
          </Typography>

          <Button
            variant="contained"
            sx={{
              position: 'absolute',
              bottom: { xs: '10px', sm: '20px' },
              right: { xs: '10px', sm: '20px' },
              backgroundColor: '#40A39B',
              color: 'white',
              width: { xs: '90px', sm: '126px' },
              height: { xs: '30px', sm: '36px' },
              borderRadius: '8px',
              padding: { xs: '10px 12px', sm: '14px 16px' },
              fontSize: { xs: '0.75rem', sm: '1rem' }, // Adjust font size for mobile
              '&:hover': {
                backgroundColor: '#36A489',
              },
            }}
            onClick={handleEditClick} // Use the navigate function on click
          >
            Edit
          </Button>
        </ProfileBanner>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: { xs: '10px', sm: '20px' }, padding: { xs: '0 8px', sm: '0 16px' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373', marginBottom: '8px', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '4px', sm: '0' } }}>
            <Phone sx={{ marginRight: { sm: '18px' } }} />
            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>+463 634 6774</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373', marginBottom: '35px', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '4px', sm: '0' } }}>
            <Mail sx={{ marginRight: { sm: '8px' } }} />
            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>daniela@gmail.com</Typography>
          </Box>

          <Divider sx={{ width: '100%', backgroundColor: '#D9D9D9', marginBottom: '20px' }} />

          {/* New Section: Address and Grade with Icons */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', color: '#737373', paddingLeft: { xs: '8px', sm: '16px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <HomeIcon sx={{ marginRight: '8px', color: '#737373' }} />
              <Typography variant="body1" sx={{ fontWeight: 600, color: 'black', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Address: <span style={{ fontWeight: 400, color: '#737373' }}>89123 Keshawn Valleys</span>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SchoolIcon sx={{ marginRight: '8px', color: '#737373' }} />
              <Typography variant="body1" sx={{ fontWeight: 600, color: 'black', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                Grade: <span style={{ fontWeight: 400, color: '#737373' }}>12th, Primary</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </MyClassLayout>
  );
};

export default Profile;
