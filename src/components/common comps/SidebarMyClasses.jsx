import React, { useState } from 'react';
import { Box, MenuItem, Typography, Divider, Avatar, Modal } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import avatarImage from '../../assets/navbar/image.png'; // Ensure the path is correct
import ManageProfileModal from '../my classes dashboard/manageprofile'; // Import the modal component

const SidebarMyClasses = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate(); // Hook to handle navigation

  const menuItems = [
    { label: 'My Classes', route: '/myclasses' },
    { label: 'My Calendar', route: '/mycalendar' },
    { label: 'Manage Profile', action: 'openModal' },
    { label: 'Terms of Services', route: '/termsofservice' },
    { label: 'FAQs', route: '/faq' },
    { label: 'Rating & Feedbacks', route: '/feedbacks' },
    { label: 'Contact Us', route: '/contactus' },
  ];

  // Function to handle modal open and close
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handle item clicks
  const handleItemClick = (item) => {
    if (item.route) {
      navigate(item.route); // Navigate to the respective route
    } else if (item.action === 'openModal') {
      handleOpenModal(); // Open the modal for "Manage Profile"
    }
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '320px', md: '360px' }, // Responsive width
        background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
        padding: { xs: '12px', sm: '16px' }, // Adjusted padding for mobile
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow for better appearance
      }}
    >
      {/* User Profile Section */}
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 1)',
          borderRadius: '8px',
          padding: { xs: '12px', sm: '16px' },
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Avatar src={avatarImage} sx={{ width: 56, height: 56, marginRight: '12px' }} />
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: { xs: '14px', sm: '16px' } }}>Naseem</Typography>
          <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, color: '#737373' }}>naseem@gmail.com</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              marginTop: '8px',
              color: '#4A90E2',
            }}
            onClick={() => navigate('/profile')} // Navigate to the profile page
          >
            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, fontWeight: 500 }}>View Profile</Typography>
            <ChevronRight sx={{ marginLeft: '4px' }} />
          </Box>
        </Box>
      </Box>

      {/* Sidebar Menu Items */}
      {menuItems.map((item, index) => (
        <Box key={index}>
          <MenuItem
            sx={{
              justifyContent: 'space-between',
              padding: '12px 16px',
              fontSize: { xs: '14px', sm: '16px' },
              fontWeight: 500,
              color: '#333333',
              gap: '8px',
              cursor: 'pointer',
            }}
            onClick={() => handleItemClick(item)} // Handle item click based on the item
          >
            {item.label}
            <ChevronRight />
          </MenuItem>
          <Divider sx={{ backgroundColor: 'rgba(217, 217, 217, 1)', width: '80%', margin: 'auto' }} />
        </Box>
      ))}

      {/* Manage Profile Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal} // Make sure onClose works
        aria-labelledby="manage-profile-modal"
        aria-describedby="manage-profile-modal-description"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          {/* Pass the handleCloseModal function to ManageProfileModal */}
          <ManageProfileModal onClose={handleCloseModal} />
        </Box>
      </Modal>
    </Box>
  );
};

export default SidebarMyClasses;
