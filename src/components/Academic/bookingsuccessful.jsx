import React from 'react';
import { Box, Typography, Modal, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import confirm from "../../assets/bookurtutor/tick.png"; // Your image path

const BookingSuccessful = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}  
      onClose={onClose} 
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: 'auto',
          bgcolor: '#40A39B',
          borderRadius: '28px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Close Button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '34px',
            height: '34px',
            backgroundColor: '#F2F2F2',
            borderRadius: '17px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': { backgroundColor: '#E0E0E0' },
          }}
          onClick={onClose}  
        >
          <CloseIcon sx={{ color: '#000000' }} />
        </IconButton>

        {/* Image */}
        <Box
          component="img"
          src={confirm}
          alt="confirmation tick"
          sx={{
            width: '160px',
            height: '160px',
            marginBottom: '24px',
            bgcolor:"#40A39B"
          }}
        />

        {/* Modal Title */}
        <Typography
          id="modal-title"
          sx={{
            fontWeight: 700,
            fontSize: '32px',
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          Booking Successful!
        </Typography>

        {/* Modal Description */}
        <Typography
          id="modal-description"
          sx={{
            fontWeight: 500,
            fontSize: '20px',
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          Your payment is successful
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          {/* Explore Tutor Button */}
          <Button
            variant="outlined"
            sx={{
              width: '241px',
              height: '48px',
              padding: '14px 16px',
              borderRadius: '8px',
              color: '#FFFFFF',
              borderColor: '#FFFFFF',
              '&:hover': { backgroundColor: '#E0E0E0', borderColor: '#FFFFFF' },
            }}
          >
            Explore Tutor
          </Button>

          {/* View Booking Button */}
          <Button
            variant="contained"
            sx={{
              width: '241px',
              height: '48px',
              padding: '14px 16px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              color: '#40A39B',
              '&:hover': { backgroundColor: '#F0F0F0' },
            }}
          >
            View Booking
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BookingSuccessful;
