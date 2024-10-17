import React from 'react';
import { Typography, TextField, Button, IconButton, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddAccountModal = ({ onClose }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  // Handle closing the modal by clicking outside the content
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-background') {
      onClose(); // Only close when clicking outside modal content
    }
  };

  return (
    <div
      id="modal-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
      }}
      onClick={handleOutsideClick} // Close modal on outside click
    >
      <div
        style={{
          width: isMobile ? '90%' : '500px',
          height: 'auto',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          position: 'relative',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
      >
        {/* Top left heading */}
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: '20px' }}>
          Add Account
        </Typography>

        {/* Full Name Input */}
        <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: '8px' }}>
          Full Name
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          defaultValue="Naseem Chikitani" // Prefilled value
          sx={{
            marginBottom: '20px',
          }}
        />

        {/* Save Profile Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#40A39B',
            color: '#fff',
            fontWeight: 600,
            borderRadius: '12px',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#368e82', // Slightly darker on hover
            },
          }}
        >
          Save Profile
        </Button>

        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: '#E0E0E0',
            color: '#fff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AddAccountModal;
