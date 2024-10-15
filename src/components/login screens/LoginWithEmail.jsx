import React from 'react';
import { Box, Typography, Modal, FormControl, Select, MenuItem, TextField, Button } from '@mui/material';
import dividerLine from "../../assets/modal/Group 1000004577.png";
import googleLogo from "../../assets/modal/image 10.png";

const LoginWithEmail = ({ open, handleClose }) => {
  const [role, setRole] = React.useState('student');
  const [mobileNumber, setMobileNumber] = React.useState('');

  const handleChange = (event) => setRole(event.target.value);
  const handleMobileNumberChange = (event) => setMobileNumber(event.target.value);

  return (
    <Modal open={open} onClose={(event, reason) => reason !== "backdropClick" && handleClose()}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '50%' },
          bgcolor: 'white',
          borderRadius: '8px',
          boxShadow: 24,
          p: { xs: 4, sm: 8 },
          textAlign: 'center',
        }}
      >
        {/* Cancel Button */}
        <Box
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            backgroundColor: '#F2F2F2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography sx={{ color: '#5F6368', fontWeight: 'bold', fontSize: '16px' }}>×</Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: 'Metropolis',
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 700,
            mb: '16px',
          }}
        >
          Log In
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Metropolis',
            fontSize: { xs: '16px', sm: '18px' },
            color: '#737373',
            mb: '24px',
          }}
        >
          Let’s continue your learning journey together
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
          <Typography sx={{ fontSize: '16px', color: '#737373', mr: 1 }}>Continue as</Typography>
          <FormControl variant="outlined" sx={{ minWidth: '105px' }}>
            <Select
              value={role}
              onChange={handleChange}
              displayEmpty
              sx={{
                fontSize: '18px',
                color: '#737373',
                background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
                borderRadius: '70px',
                height: '32px',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }}
              inputProps={{ 'aria-label': 'Select Role' }}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="parent">Parent</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          placeholder="Enter your Email"
          fullWidth
          sx={{
            mb: 2,
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />

        <Button
          onClick={() => console.log('Get Started')}
          sx={{
            mb: 2,
            backgroundColor: '#40A39B',
            color: 'white',
            borderRadius: '12px',
            padding: '16px',
            fontWeight: 700,
            width: '100%',
          }}
        >
          Get Started
        </Button>

        <Typography
          sx={{
            fontSize: '16px',
            color: '#000000',
            cursor: 'pointer',
            mb: 2,
            fontWeight:"500"
          }}
        >
          Login with mobile number
        </Typography>

        <img src={dividerLine} alt="divider line" style={{ width: '100%', marginBottom: '16px' }} />

        <Button
          onClick={() => console.log('Login with Google')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            color: '#242424',
            border: '1px solid #40A39B',
            borderRadius: '12px',
            padding: '12px',
            width: '100%',
          }}
        >
          <img src={googleLogo} alt="Google logo" style={{ marginRight: '8px' }} />
          Login with Google
        </Button>

        <Typography
          sx={{
            fontSize: '14px',
            color: '#737373',
            mt: 2,
          }}
        >
          Don't have an account?{' '}
          <span style={{ color: '#40A39B', cursor: 'pointer' }}>Sign Up</span>
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoginWithEmail;
