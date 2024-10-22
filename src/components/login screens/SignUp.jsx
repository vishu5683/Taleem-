import React, { useEffect } from 'react';
import { Box, Typography, Modal, FormControl, Select, MenuItem, TextField, Button } from '@mui/material';

const SignUp = ({ open, handleClose ,isStudent}) => {
  const [role, setRole] = React.useState('student');
  const [fullName, setFullName] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [gender, setGender] = React.useState('');
  const handleChange = (event) => setRole(event.target.value);

  const handleGenderChange = (event) => setGender(event.target.value);
  useEffect(() => {
    if (isStudent) {
      setRole("student");
    } else {
      setRole("tutor");
    }
  }, [isStudent]);

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
          p: { xs: 0, sm: 3 },
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
            mb: '1px',
          }}
        >
          Create your Account
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Metropolis',
            fontSize: { xs: '16px', sm: '18px' },
            color: '#737373',
            mb: '10px',
          }}
        >
          Let’s continue your learning journey together
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
          <Typography sx={{ fontSize: '16px', color: '#737373', mr: 1 }}>Continue as</Typography>
          <FormControl variant="outlined" sx={{ minWidth: '100px' }}>
            <Select
              value={role}
              onChange={handleChange}
              sx={{
                fontSize: '14px',
                color: '#737373',
                background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
                borderRadius: '50px',
                height: '32px',
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }}
              inputProps={{ 'aria-label': 'Select Role' }}
            >
             {isStudent ? (
                    <MenuItem value="student">Student</MenuItem>
                ) : (
                  <MenuItem value="tutor">Tutor</MenuItem>
                )}
                {isStudent && (<MenuItem value="parent">Parent</MenuItem>)}
            </Select>
          </FormControl>
        </Box>

        {/* Full Name */}
        <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 2 }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>
            Full Name*
          </Typography>
          <TextField
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            fullWidth
            sx={{
              height: "37px",
              borderRadius: '6px',
              '& .MuiOutlinedInput-root': { borderRadius: '6px' },
            }}
          />
        </Box>

        {/* Mobile Number */}
        <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 2 }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 2 }}>
            Mobile Number*
          </Typography>
          <TextField
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            fullWidth
            sx={{
              height: "37px",
              borderRadius: '6px',
              '& .MuiOutlinedInput-root': { borderRadius: '6px' },
            }}
          />
        </Box>

        {/* Email ID (Optional) */}
        <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 2 }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>
          Email ID (Optional)
          </Typography>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email id"
            fullWidth
            sx={{
              height: "37px",
              borderRadius: '6px',
              '& .MuiOutlinedInput-root': { borderRadius: '6px' },
            }}
          />
        </Box>

        {/* Gender */}
        <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 2 }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 2 }}>
            Gender
          </Typography>
          <FormControl fullWidth>
            <Select
              value={gender}
              onChange={handleGenderChange}
              sx={{
                height: "40px",
                borderRadius: '6px',
                color:"#737373",
                '& .MuiOutlinedInput-root': { borderRadius: '6px' },
              }}
              displayEmpty
            >
              <MenuItem value="" disabled>Select your gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Terms and Conditions */}
        <Typography
          sx={{
            fontSize: '14px',
            color: '#737373',
            mt: 1,
          }}
        >
   By Signing up you are agree with <br/>
   our <span style={{fontSize:"16px",fontWeight:"500"}}>Terms of Services & Privacy Policy</span>
        </Typography>

        {/* Submit Button */}
        <Button
          onClick={() => console.log('Create Account')}
          sx={{
            mt: 1,
            backgroundColor: '#40A39B',
            color: 'white',
            borderRadius: '8px',
            padding: '10px',
            fontWeight: 500,
            width: "420px",
            height: "48px",
            textTransform: 'none',
          }}
        >
       Get Started
        </Button>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#737373',
            mt: 1,
            cursor: 'pointer',
          }}
        >
          Don't have an account?{' '}
          <span style={{ color: '#40A39B' }}>Log In</span>
        </Typography>
      </Box>
    </Modal>
  );
};

export default SignUp;
