import React from 'react';
import {
  Box,
  Typography,
  Modal,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

const SignUp = ({ open, handleClose }) => {
  const [gender, setGender] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [role, setRole] = React.useState('student');

  const handleGenderChange = (event) => setGender(event.target.value);
  const handleRoleChange = (event) => setRole(event.target.value);

  return (
    <Modal open={open} onClose={(event, reason) => reason !== 'backdropClick' && handleClose()}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '50%', md: '60%' },
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: 'white',
          borderRadius: '8px',
          boxShadow: 24,
          p: { xs: 3, sm: 4 },
          textAlign: 'center',
        }}
      >
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
          Create your Account
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
              onChange={handleRoleChange}
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

        <Box sx={{ textAlign: 'left' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 500, mb: 1 }}>Full Name*</Typography>
          <TextField
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            fullWidth
            sx={{ mb: 2, borderRadius: '6px', border: '1px solid #ccc' }}
          />

          <Typography sx={{ fontSize: '18px', fontWeight: 500, mb: 1 }}>Mobile Number*</Typography>
          <TextField
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            fullWidth
            sx={{ mb: 2, borderRadius: '6px', border: '1px solid #ccc' }}
          />

          <Typography sx={{ fontSize: '18px', fontWeight: 500, mb: 1 }}>Email ID*</Typography>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email ID"
            fullWidth
            sx={{ mb: 2, borderRadius: '6px', border: '1px solid #ccc' }}
          />

          <Typography sx={{ fontSize: '18px', fontWeight: 500, mb: 1 }}>Gender*</Typography>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <Select
              value={gender}
              onChange={handleGenderChange}
              displayEmpty
              sx={{
                fontSize: '16px',
                color: '#737373',
                backgroundColor: '#FFFFFF',
                borderRadius: '6px',
                height: '48px',
                '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #ccc' },
              }}
              inputProps={{ 'aria-label': 'Select Gender' }}
            >
              <MenuItem value="" disabled>
                Select Gender
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography sx={{ fontSize: '16px', color: '#737373', mb: 2 }}>
          By Signing up, you agree with our <br/>Terms of Services & Privacy Policy
        </Typography>

        <Button
          onClick={() => console.log('Get Started')}
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: '#40A39B',
            color: 'white',
            borderRadius: '12px',
            padding: '12px',
            fontWeight: 700,
            width: '100%',
            '&:hover': { backgroundColor: '#359487' },
          }}
        >
          Get Started
        </Button>

        <Typography sx={{ fontSize: '14px', color: '#737373', mt: 2 }}>
          Don't have an account?{' '}
          <span style={{ color: '#40A39B', cursor: 'pointer' }}>Log In</span>
        </Typography>
      </Box>
    </Modal>
  );
};

export default SignUp;
