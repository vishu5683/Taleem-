import React from 'react';
import { Box, Typography, Modal, FormControl, Select, MenuItem, TextField, Button } from '@mui/material';
import dividerLine from "../../assets/modal/Group 1000004577.png";
import googleLogo from "../../assets/modal/image 10.png";

const LoginWithEmail = ({ open, handleClose, openPhoneNumberLogin }) => {
  const [role, setRole] = React.useState('student');
  const [email, setEmail] = React.useState('');

  const handleChange = (event) => setRole(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  return (
    <Modal open={open} onClose={(event, reason) => reason !== "backdropClick" && handleClose()}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '85%', sm: '600px', md: '720px' },
          bgcolor: 'white',
          borderRadius: '12px',
          p: { xs: 3, sm: 4 },
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
            mb: '12px',
          }}
        >
          Log In
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Metropolis',
            fontSize: { xs: '16px', sm: '18px' },
            color: '#737373',
            mb: '20px',
          }}
        >
          Let’s continue your learning journey together
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <Typography sx={{ fontSize: '16px', color: '#737373', mr: 1 }}>Continue as</Typography>
          <FormControl variant="outlined" sx={{ minWidth: '100px' }}>
            <Select
              value={role}
              onChange={handleChange}
              sx={{
                fontSize: '16px',
                color: '#737373',
                background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
                borderRadius: '50px',
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

        {/* Email Label and Input */}
        <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 700,
              color: '#000000',
              mb: 1,
            }}
          >
            Email
          </Typography>
          <TextField
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            fullWidth
            sx={{
              height: "48px",
              borderRadius: '6px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '6px',
                borderColor: '#ccc',
              },
            }}
          />
        </Box>

        <Button
          onClick={() => console.log('Get Started with Email')}
          sx={{
            mb: 2,
            backgroundColor: '#40A39B',
            color: 'white',
            borderRadius: '8px',
            padding: '10px',
            fontWeight: 700,
            width: "420px",
            height: "52px",
            textTransform: 'none',
          }}
        >
          Get Started
        </Button>

        <Typography
          onClick={openPhoneNumberLogin}
          sx={{
            fontSize: '16px',
            color: '#000',
            fontWeight: 500,
            cursor: 'pointer',
            mb: 2,
          }}
        >
          Login with Phone number
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img src={dividerLine} alt="divider line" style={{ width: '60%' }} />
        </Box>

        <Button
          onClick={() => console.log('Login with Google')}
          sx={{
            backgroundColor: 'transparent',
            color: '#242424',
            border: '1px solid #E6E6E6',
            borderRadius: '8px',
            padding: '10px',
            width: '420px',
            height: "48px",
            textTransform: 'none',
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          <img src={googleLogo} alt="Google logo" style={{ marginRight: '8px', width: '20px', height: "20px" }} />
          Login with Google
        </Button>

        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 400,
            color: '#737373',
            mt: 2,
            cursor: 'pointer',
          }}
        >
          Don't have an account?{' '}
          <span style={{ color: '#40A39B' }}>Sign Up</span>
        </Typography>
        
      </Box>
    </Modal>
    
  );
};

export default LoginWithEmail;
