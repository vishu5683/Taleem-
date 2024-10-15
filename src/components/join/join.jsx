import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import pic1 from "../../assets/join section/image 36.svg";
import pic2 from "../../assets/join section/image.svg";
// import LoginWithStudent from '../login screens/LoginWithStudent';
import './Join.css';
// import OtpScreen from '../login screens/OtpScreen';
// import LoginWithStudent from '../login screens/LoginWithEmail';
import SignUp from '../login screens/SignUp';

const Join = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="join-container">
      {/* Get Started Heading */}
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: { xs: '24px', sm: '32px' },
          fontWeight: 700,
          lineHeight: { xs: '28px', sm: '36px' },
          textAlign: 'center',
          color: '#40A39B',
        }}
      >
        <span style={{ color: '#000000' }}>GET</span> Started!
      </Typography>

      {/* Join with Students/Parents & Tutor */}
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: { xs: '16px', sm: '20px' },
          fontWeight: 400,
          textAlign: 'center',
          lineHeight: { xs: '20px', sm: '24px' },
          marginBottom: '32px',
          color: "#737373",
        }}
      >
        Join with Student/Parents & Tutor
      </Typography>

      {/* Image Section */}
      <Box className="image-section">
        {/* Student/Parent Section */}
        <Box className="image-wrapper">
          <Box
            component="img"
            src={pic2}
            alt="Student/Parent"
            sx={{
              width: { xs: '200px', sm: '293px' },
              height: { xs: '180px', sm: '272px' },
              borderRadius: '12px',
              opacity: '60%',
            }}
          />
          <Box className="centered-text">
            <Typography
              sx={{
                fontFamily: 'Metropolis',
                fontSize: { xs: '24px', sm: '32px' },
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              Student / Parent
            </Typography>
            <Button
              onClick={handleOpen}
              sx={{
                width: { xs: '160px', sm: '207px' },
                height: '48px',
                marginTop: '16px',
                backgroundColor: '#40A39B',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#358F86',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        {/* Tutor Section */}
        <Box className="image-wrapper">
          <Box
            component="img"
            src={pic1}
            alt="Tutor"
            sx={{
              width: { xs: '200px', sm: '293px' },
              height: { xs: '180px', sm: '272px' },
              borderRadius: '12px',
              opacity: '65%',
            }}
          />
          <Box className="centered-text">
            <Typography
              sx={{
                fontFamily: 'Metropolis',
                fontSize: { xs: '24px', sm: '32px' },
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              Tutor
            </Typography>
            <Button
              sx={{
                width: { xs: '160px', sm: '207px' },
                height: '48px',
                marginTop: '16px',
                backgroundColor: '#40A39B',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#358F86',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Modal Component */}
      {/* <LoginWithStudent open={open} handleClose={handleClose} /> */}
      {/* <OtpScreen open={open} handleClose={handleClose} /> */}
        {/* <LoginWithStudent open={open} handleClose={handleClose} /> */}
        <SignUp open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Join;
