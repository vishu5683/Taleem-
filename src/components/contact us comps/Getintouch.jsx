import React, { useState } from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import ModalComponent from './ModalComponent.jsx'; // Import the modal component

const GetInTouch = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const cardStyle = {
    width: '100%',
    maxWidth: '367px',
    height: '253px',
    borderRadius: '18px',
    border: '1px solid #E6E6E6',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    position: 'relative',
    marginBottom: '30px', // Added margin-bottom
  };

  const circleStyle = {
    width: '84px',
    height: '84px',
    backgroundColor: '#40A39B',
    borderRadius: '50%',
    position: 'absolute',
    top: '-42px', // To position it half above the card
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4, px: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '32px' }}>
        Get in Touch with Us
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 8 }}>
        {/* Card 1: Call Us */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={cardStyle}>
            <Box sx={circleStyle}>
              <CallIcon sx={{ color: 'white', fontSize: '30px' }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 500, mt: 6 }}>
              Call Us
            </Typography>
            <Typography sx={{ textAlign: 'center', color: "#5F5F5F", fontWeight: 400 }}>
              Connect with our support team directly for immediate assistance
            </Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6', my: 2 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>+971 80 80 8888 001</Typography>
          </Box>
        </Grid>

        {/* Card 2: Email Us */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={cardStyle}>
            <Box sx={circleStyle}>
              <EmailIcon sx={{ color: 'white', fontSize: '30px' }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 500, mt: 6 }}>
              Email Us
            </Typography>
            <Typography sx={{ textAlign: 'center', color: "#5F5F5F", fontWeight: 400 }}>
              Connect with our support team directly for immediate assistance
            </Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6', my: 2 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>taleem@xyz.com</Typography>
          </Box>
        </Grid>

        {/* Card 3: Chat with Admin */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={cardStyle}>
            <Box sx={circleStyle}>
              <ChatIcon sx={{ color: 'white', fontSize: '30px' }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 500, mt: 6 }}>
              Chat with Admin
            </Typography>
            <Typography sx={{ textAlign: 'center', color: "#5F5F5F", fontWeight: 400 }}>
              For quick support, start a chat with our admin team right away
            </Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6', my: 2 }} />
            <Typography
              sx={{ fontWeight: 700, fontSize: '18px', cursor: 'pointer' }}
              onClick={handleOpenModal}
            >
              Click here to start
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Modal Component */}
      <ModalComponent open={openModal} handleClose={handleCloseModal} />
    </Box>
  );
};

export default GetInTouch;
