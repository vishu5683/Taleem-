import React, { useState } from 'react';
import proicon from '../../assets/profile/managepro.png';
import { Box, Typography, Avatar, IconButton, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import AddAccountModal from './AddAccountModal'; // Assuming you have this modal component

const ProfileCard = ({ name, email }) => (
  <Box
    sx={{
      width: '95%',
      maxWidth: '860px',
      height: '140px',
      borderRadius: '18px',
      border: '1px solid #E6E6E6',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      position: 'relative',
    }}
  >
    <Avatar
      alt={name}
      src={proicon}
      sx={{ width: '100px', height: '100px', marginRight: '20px' }}
    />
    <Box>
      <Typography variant="h6" sx={{ fontWeight: '600' }}>{name}</Typography>
      <Typography variant="body2" sx={{ color: '#737373' }}>{email}</Typography>
    </Box>
    <CheckCircleIcon
      sx={{
        color: '#40A39B',
        fontSize: '32px',
        position: 'absolute',
        right: '20px',
      }}
    />
  </Box>
);

const ManageProfileModal = ({ onClose }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);

  // Close modal when clicking outside the modal content
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      onClose();
    }
  };

  // Open AddAccountModal without closing ManageProfileModal
  const handleAddAccountClick = () => {
    setShowAddAccountModal(true);
  };

  return (
    <>
    

      {/* Manage Profile Modal */}
      <div
        id="modal-background"
        onClick={handleBackgroundClick}
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
      >
        <div
          style={{
            width: isMobile ? '90%' : '800px',
            height: 'auto',
            minHeight: '584px',
            borderRadius: '28px',
            backgroundColor: '#ffffff',
            padding: isMobile ? '15px' : '20px',
            position: 'relative',
            margin: '0 auto',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing on content click
        >
          <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: '20px' }}>
            Manage Profile
          </Typography>

          {/* Profile Cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ProfileCard name="Daniela Chikitani" email="daniela@xyz.com" />
            <ProfileCard name="John Doe" email="john@xyz.com" />
          </Box>

          {/* Add Account Section */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start', // Left aligned
              marginTop: '40px',
              cursor: 'pointer',
      
            }}
            onClick={handleAddAccountClick} // Open AddAccountModal
          >
            <Box
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#40A39B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <AddIcon sx={{ fontSize: '40px' }} />
            </Box>
            <Typography variant="h6" sx={{ marginLeft: '20px', fontWeight: 500, fontSize: '24px' }}>
              Add Account
            </Typography>
          </Box>

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

      {/* Conditionally render AddAccountModal */}
      {showAddAccountModal && (
        <AddAccountModal onClose={() => setShowAddAccountModal(false)} />
      )}
      
    </>
  );
};

export default ManageProfileModal;
