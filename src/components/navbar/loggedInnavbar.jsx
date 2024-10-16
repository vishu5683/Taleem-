import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Notifications, ExpandMore } from '@mui/icons-material';
import logo from '../../assets/navbar/nav logo.png';
import avatarImage from '../../assets/navbar/image.png';
import DropdownProfileMenu from './DropdownProfileMenu';
import NotificationPopup from './NotificationPopup.jsx'; // Import the NotificationPopup component

const LoggedInNavbar = () => {
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // New state for notification popup

  const handleOpenLanguage = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseLanguage = () => {
    setAnchorElLanguage(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen); // Toggle notification popup
  };

  const drawer = (
    <Box sx={{ width: 250, padding: '16px' }}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Prices" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Language" />
        </ListItem>
      </List>
    </Box>
  );

  // Dummy notifications data
  const notifications = [
    { title: 'Booking Confirmed', description: 'Your booking has been confirmed.' },
    { title: 'New Offer', description: '50% off on your next trip!' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        height: '96px',
        backgroundColor: 'white',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
        padding: '0 24px',
        justifyContent: 'center',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: '139px',
              height: '63px',
              padding: '8px 21px',
              borderRadius: '8px 0 0 0',
            }}
          />
        </Box>

        {/* Desktop Navigation Links */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '40px',
            alignItems: 'center',
            color: '#737373',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}>
            Home
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '16px', cursor: 'pointer' }}>
            My Bookings
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '16px', cursor: 'pointer' }}>
            Schedule
          </Typography>

          <Box>
            <Typography
              variant="body1"
              onClick={handleOpenLanguage}
              sx={{ fontWeight: 400, fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              Language
              <ExpandMore />
            </Typography>
            <Menu
              anchorEl={anchorElLanguage}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseLanguage}
            >
              <MenuItem onClick={handleCloseLanguage}>English</MenuItem>
              <MenuItem onClick={handleCloseLanguage}>French</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Desktop Notification & User Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '16px', alignItems: 'center' }}>
          <IconButton
            onClick={toggleNotifications} // Show notification popup when clicked
            sx={{
              backgroundColor: '#40A39B',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#37a393',
              },
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <Notifications />
          </IconButton>
          <Avatar alt="Naseem" src={avatarImage} sx={{ marginLeft: '8px' }} />
          <DropdownProfileMenu userName="Naseem" />
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>

      {/* Notification Popup */}
      <NotificationPopup open={notificationsOpen} onClose={toggleNotifications} notifications={notifications} />
    </AppBar>
  );
};

export default LoggedInNavbar;
