import React, { useState } from 'react';
import { Box, Menu, MenuItem, Typography, Divider, Avatar } from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import avatarImage from '../../assets/navbar/image.png';

const DropdownProfileMenu = ({ userName, userEmail }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (route) => {
    // Close the modal first
    handleClose();
    
    // Navigate to the selected route
    navigate(route);
  };

  // Define the menuItems array here
  const menuItems = [
    'Manage Profile',
    'Wallet',
    'Terms of Services',
    'FAQs',
    'Rating & Feedbacks',
    'Contact Us',
    'Log Out',
  ];

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        variant="body1"
        onClick={handleOpen}
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '8px',
          color: "#737373",
        }}
      >
        {userName}
        <ExpandMore />
      </Typography>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            width: { xs: '320px', sm: '360px' }, // Responsive width
            height: '70%',
            top: '96px !important',
            right: '0 !important',  // Align to the right side of the screen
            background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
            padding: '16px',
            borderRadius: '8px',
          },
        }}
      >
        {/* User Profile Section */}
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 1)',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <Avatar src={avatarImage} sx={{ width: 56, height: 56, marginRight: '12px' }} />
          <Box>
            <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>Naseem</Typography>
            <Typography sx={{ fontSize: '14px', color: '#737373' }}>naseem@gmail.com</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginTop: '8px',
                color: '#4A90E2',
              }}
              onClick={() => handleNavigation('/profile')} // Navigate to profile
            >
              <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>View Profile</Typography>
              <ChevronRight sx={{ marginLeft: '4px' }} />
            </Box>
          </Box>
        </Box>

        {/* Profile Options */}
        {menuItems.map((item, index) => (
          <Box key={index}>
            <MenuItem
              sx={{
                justifyContent: 'space-between',
                padding: '12px 16px',
                fontSize: '16px',
                fontWeight: 500, // Updated to 500
                color: '#333333',
                gap: '8px',
              }}
              onClick={() => handleNavigation(menuRoutes[item])} // Map items to corresponding routes
            >
              {item}
              <ChevronRight />
            </MenuItem>
            <Divider sx={{ backgroundColor: 'rgba(217, 217, 217, 1)', width: '80%', margin: 'auto' }} />
          </Box>
        ))}
      </Menu>
    </Box>
  );
};

// Mapping menu items to routes
const menuRoutes = {
  'Manage Profile': '/profileupdate',
  'Wallet': '/wallet', // This route can be modified based on your wallet path
  'Terms of Services': '/termsofservice',
  'FAQs': '/faq',
  'Rating & Feedbacks': '/feedback', // Modify as per your feedback route
  'Contact Us': '/contactus',
  'Log Out': '/', // Log out route (assuming '/' is the home page after logout)
};

export default DropdownProfileMenu;
