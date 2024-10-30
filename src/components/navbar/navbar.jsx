import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import logo from '../../assets/navbar/nav logo.png';
import SignUp from "../login screens/SignUp";
import LoginWithStudent from "../login screens/LoginWithStudent";

const Navbar = () => {
    const [data, setData] = useState();
   const [isStudent, setStudent] = useState(1);
   const [anchorElPrices, setAnchorElPrices] = useState(null);
   const [anchorElLanguage, setAnchorElLanguage] = useState(null);
   const [mobileOpen, setMobileOpen] = useState(false);
   const [otpOpen, setOtpOpen] = useState(false);
   const [signUpOpen, setSignUpOpen] = useState(false);
   const [open, setOpen] = useState(false);
   const [tutorsInfoOpen, setTutorsInfoOpen] = useState(false);
   const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
  const handleOpenPrices = (event) => {
    setAnchorElPrices(event.currentTarget);
  };

  const handleClosePrices = () => {
    setAnchorElPrices(null);
  };

  const handleOpenLanguage = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseLanguage = () => {
    setAnchorElLanguage(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, padding: '16px' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Prices" />
        </ListItem>
        <ListItem button component={Link} to="/contactus">
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Language" />
        </ListItem>
      </List>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            height: '48px',
            padding: '14px 16px',
            borderRadius: '8px',
            borderColor: '#EBBE49',
            color: '#EBBE49',
          }}
          onClick={() => {
            setSignUpOpen(true);
            setStudent(1);
          }}
        >
          Join as a tutor
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '100%',
            height: '48px',
            padding: '14px 16px',
            borderRadius: '8px',
            backgroundColor: '#40A39B',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#37a393',
            },
          }}
          onClick={() => {
            handleOpen();
            setStudent(1);
          }}
        >
          Book a tutor
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        height: '96px',
        backgroundColor: 'white',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.1)',
        padding: '0 48px',
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
        {/* Logo at the Start */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
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
          </Link>
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
          <Typography
            variant="body1"
            component={Link}
            to="/home"
            sx={{ fontWeight: 700, fontSize: '16px', lineHeight: '20px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
          >
            Home
          </Typography>

          {/* Prices Dropdown */}
          <Box>
            <Typography
              variant="body1"
              onClick={handleOpenPrices}
              sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              Prices
              <ExpandMore />
            </Typography>
            <Menu
              anchorEl={anchorElPrices}
              open={Boolean(anchorElPrices)}
              onClose={handleClosePrices}
            >
              <MenuItem onClick={handleClosePrices}>Option 1</MenuItem>
              <MenuItem onClick={handleClosePrices}>Option 2</MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="body1"
            component={Link}
            to="/contactus"
            sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '20px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
          >
            Contact Us
          </Typography>

          {/* Language Dropdown */}
          <Box>
            <Typography
              variant="body1"
              onClick={handleOpenLanguage}
              sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
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
              <MenuItem onClick={handleCloseLanguage}>Arabic</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Desktop Buttons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '16px' }}>
          <Button
            variant="outlined"
            sx={{
              width: '166px',
              height: '48px',
              padding: '14px 16px',
              borderRadius: '8px',
              borderColor: '#EBBE49',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '16px',
              color: '#EBBE49',
            }}
            onClick={() => {
              setSignUpOpen(true);
              setStudent(1);
            }}
          >
            Join as a tutor
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '146px',
              height: '48px',
              padding: '14px 16px',
              borderRadius: '8px',
              backgroundColor: '#40A39B',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '16px',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#37a393',
              },
            }}
            onClick={() => {
              handleOpen();
              setStudent(1);
            }}
          >
            Book a tutor
          </Button>
        </Box>

        {/* Mobile Menu Icon at the End */}
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
       <SignUp
        open={signUpOpen}
        handleClose={() => setSignUpOpen(false)}
        isStudent={isStudent}
        data={data}
        setData={setData}
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        handleSubmit={() => {
          setSignUpOpen(false);
        }}
        signupOpen={setOpen}
      />
        <LoginWithStudent
        open={open}
        handleClose={handleClose}
        isStudent={isStudent}
        data={data}
        setData={setData}
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        signUpOpen={signUpOpen}
        setSignUpOpen={setSignUpOpen}
        // loginWithEmailOpen={loginWithEmailOpen}
        signupOpen={setOpen}
      />
    </AppBar>
  );
};

export default Navbar;
