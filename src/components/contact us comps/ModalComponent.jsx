import React from 'react';
import { Box, Typography, TextField, Modal, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ModalComponent = ({ open, handleClose }) => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',  // Set responsive width
    maxWidth: 600,  // Maximum width of 600px
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    outline: 'none',
  };

  const inputStyle = {
    width: '100%',  // Make width 100% for responsiveness
    maxWidth: '500px',  // Fixed width for larger screens
    height: '48px',
    borderRadius: '6px',
    marginBottom: '20px',
    color: '#737373',
  };

  const messageStyle = {
    width: '100%',  // Make width 100% for responsiveness
    maxWidth: '500px',
    height: '112px',
    borderRadius: '6px',
    marginBottom: '20px',
    color: '#737373',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '22px',  // Position above the modal
    right: '9px',  // Position to the right
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#F2F2F2',
    color: 'black',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    width: '100%',
    maxWidth: '500px',
    height: '48px',
    backgroundColor: '#40A39B',  // Button background color
    color: 'white',  // Button text color
    fontWeight: 'bold',
    textTransform: 'none',  // Prevent text from being uppercased
    borderRadius: '6px',
    marginTop: '20px',
    
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        {/* Close Button */}
        <IconButton onClick={handleClose} sx={closeButtonStyle}>
          <CloseIcon sx={{ fontSize: '24px' }} />
        </IconButton>

        {/* Modal Heading */}
        <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '24px', marginBottom: '20px' }}>
          Raise your Concern
        </Typography>

        {/* Full Name Title */}
        <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>
          Full Name
        </Typography>
        <TextField
          placeholder="Naseem Chikitani"
          fullWidth
          variant="outlined"
          sx={inputStyle}
          InputProps={{ style: { fontSize: '16px' } }}
        />

        {/* Email Address Title */}
        <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>
          Email Address
        </Typography>
        <TextField
          placeholder="naseem@xyz.com"
          fullWidth
          variant="outlined"
          sx={inputStyle}
          InputProps={{ style: { fontSize: '16px' } }}
        />

        {/* Your Message Title */}
        <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>
          Your Message*
        </Typography>
        <TextField
          placeholder="Leave your message..."
          multiline
          fullWidth
          rows={4}
          variant="outlined"
          sx={messageStyle}
          InputProps={{ style: { fontSize: '16px' } }}
        />

        {/* Raise Your Concern Button */}
        <Button variant="contained" sx={buttonStyle}>
          Raise Concern
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
