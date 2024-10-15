import React from 'react';
import logo from "../../assets/login form/logo.png";

import { Box, TextField, Button, Typography, Link } from '@mui/material';

const LoginForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: '100%', sm: '80%', md: '600px', lg: '900px' },
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#EBFFFC',
        borderRadius: '20px ',
        position: 'relative',
        padding: { xs: '20px', md: '30px' },
        mt: 5,
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '80%',
          maxWidth: '276px',
          height: 'auto',
          margin: '50px',
        }}
      />

      {/* Texts below the logo */}
      <Typography 
        variant="h5" 
        sx={{ 
          fontSize: { xs: '20px', md: '24px' },
          marginBottom: '10px',
          fontWeight: '700',
          lineHeight: '28px',
          textAlign: 'center',
        }}
      >
        Login to your account
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          marginBottom: '20px', 
          color: 'gray', 
          fontWeight: '400', 
          fontSize: { xs: '16px', md: '18px' },
          lineHeight: '26px',
          textAlign: 'center',
        }}
      >
        Let’s continue your learning journey together
      </Typography>

      {/* Email Input Field */}
      <TextField
        placeholder="Enter email address"
        variant="outlined"
        sx={{
          width: { xs: '100%', sm: '420px' },
          height: '48px',
          marginBottom: '23px',
          borderRadius: '1px',
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFFFFF',
            '& input': {
              color: '#737373',
            },
            '& fieldset': {
              borderColor: '#40A39B',
            },
            // '&:hover fieldset': {
            //   borderColor: '#388f88',
            // },
          },
        }}
      />

      {/* Login Button */}
      <Button
        variant="contained"
        sx={{
          width: { xs: '100%', sm: '420px' },
          height: '48px',
          padding: '12px 16px',
          borderRadius: '8px',
          backgroundColor: '#40A39B',
          '&:hover': {
            backgroundColor: '#388f88',
          },
        }}
      >
        Log In
      </Button>

      {/* Forgot Password Link */}
      <Link
        href="#"
        sx={{
          marginTop: '20px',
          width: '143px',
          height: '20px',
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '20px',
          display: 'block',
          textAlign: 'center',
          color: '#40A39B',
          mb:'30px',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Forgot Password?
      </Link>
    </Box>
  );
};

export default LoginForm;
