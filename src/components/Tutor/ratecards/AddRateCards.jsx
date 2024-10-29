import React, { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';

const AddRateCards = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleButtonClick = (button) => setSelectedButton(button);
  const handleSessionSelect = (session) => setSelectedSession(session);

  const buttonStyles = {
    padding: '4px 12px',
    borderRadius: '70px',
    textTransform: 'none',
    fontWeight: '500',
    fontSize: '14px',
    '&:hover': {
      background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
    },
  };

  const inputStyles = {
    width: '328px',
    height: '44px',
    fontSize:"12px",
fontWeight:"400",
    '& .MuiInputBase-input': { padding: '10px 12px' },
  };

  return (
    <MyClassLayout>
      <Box display="flex" flexDirection="column" alignItems="center" p={3} sx={{ fontFamily: 'Arial, sans-serif' }}>
        
        {/* Title and Dropdown Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" mb={2}>
          <Typography variant="h6" fontWeight="600" fontSize="24px">
            Add Rate Card
          </Typography>
          <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />} sx={{ ...buttonStyles, width: '124px', height: '32px', background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)', color: '#000' }}>
            Academic
          </Button>
        </Box>

        {/* Select Curriculum Section */}
        <Box width="100%" mb={1}>
          <Typography color="black" fontWeight="500"  fontSize="14px">Select Curriculum</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="740px" height="44px" bgcolor="#EBFFFC" borderRadius="8px" padding="10px 12px" mb={2}>
          <Typography color="#737373" fontWeight="400" fontSize="14px">Arabic</Typography>
          <KeyboardArrowDownIcon sx={{ color: '#737373' }} />
        </Box>

        {/* Select Grade Section */}
        <Box width="100%" mb={1}>
          <Typography variant="h6" fontWeight="500"  fontSize="14px">Select Grade</Typography>
        </Box>
        <Box display="flex" gap={2} width="100%" mb={2}>
          {['Primary', 'Middle', 'Secondary', 'Universities'].map((btnText) => (
            <Button
              key={btnText}
              onClick={() => handleButtonClick(btnText)}
              variant="outlined"
              sx={{
                color: selectedButton === btnText ? '#fff' : '#737373',
                backgroundColor: selectedButton === btnText ? '#40A39B' : '#fff',
                borderColor: '#E6E6E6',
                borderRadius: '17px',
                padding: '5px 16px',
                textTransform: 'none',
                '&:hover': { backgroundColor: selectedButton === btnText ? '#35948A' : '#f5f5f5' },
              }}
            >
              {btnText}
            </Button>
          ))}
        </Box>

        {/* Add Details Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" mb={2}>
          <Typography variant="h6" fontWeight="500" fontSize="17px" color="black">Add Details</Typography>
          <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />} sx={{ ...buttonStyles, width: '150px', background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)', color: '#000' }}>
            Qatari Riyal
          </Button>
        </Box>

        {/* Select Subject Section */}
        <Box width="100%" mb={1}>
          <Typography color="black" fontWeight="500" fontSize="14px">Select Subject</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="740px" height="44px" bgcolor="#FFFFFF" border="1px solid #E6E6E6" borderRadius="8px" padding="10px 12px" mb={2}>
          <Typography color="#737373" fontWeight="400"  fontSize="14px">Select subject</Typography>
          <KeyboardArrowDownIcon sx={{ color: '#737373' }} />
        </Box>

        {/* Price Section */}
        <Box display="flex" width="100%" mb={2} justifyContent="space-between">
          <Box>
            <Typography fontWeight="500" fontSize="15px" color="black">Price for Online</Typography>
            <TextField variant="outlined" placeholder="120 Qatari Riyal" sx={inputStyles} />
          </Box>
          <Box>
            <Typography fontWeight="500" fontSize="15px" color="black">Price for Face to Face</Typography>
            <TextField variant="outlined" placeholder="120 Qatari Riyal" sx={inputStyles} />
          </Box>
        </Box>

        {/* Session Type Section */}
        <Box width="100%" mb={1}>
          <Typography fontWeight="500" fontSize="14px" color="black">Session Type</Typography>
        </Box>
        <Box display="flex" gap={2} width="100%" mb={4}>
          {['Online', 'Face to Face', 'Group Sessions', 'Open Sessions'].map((session) => (
            <Box
              key={session}
              display="flex"
              alignItems="center"
              sx={{ cursor: 'pointer', gap: '10px' }}
              onClick={() => handleSessionSelect(session)}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="24px"
                height="24px"
                borderRadius="4px"
                bgcolor={selectedSession === session ? '#40A39B' : '#fff'}
                border="1px solid #E6E6E6"
              >
                {selectedSession === session && <DoneIcon sx={{ color: '#fff', fontSize: '16px' }} />}
              </Box>
              <Typography color="#737373" fontWeight="400">{session}</Typography>
            </Box>
          ))}
        </Box>

        {/* Add Optional Button */}
        <Box display="flex" width="100%" justifyContent="flex-start" mb={2}>
          <Button
            variant="outlined"
            sx={{
              width: '182px',
              height: '36px',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #40A39B',
              color: 'black',
              fontWeight: '500',
              textTransform: 'none',
            }}
          >
            + Add Optional
          </Button>
        </Box>

        {/* Cancel and Save Buttons */}
        <Box display="flex" width="100%" justifyContent="flex-end" gap={2}>
          <Button
            variant="outlined"
            sx={{
              width: '186px',
              height: '44px',
              borderRadius: '8px',
              border: '1px solid #40A39B',
              color: 'black',
              fontWeight: '500',
              textTransform: 'none',
              backgroundColor: '#fff',
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              width: '186px',
              height: '44px',
              borderRadius: '8px',
              backgroundColor: '#40A39B',
              color: '#fff',
              fontWeight: '500',
              textTransform: 'none',
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </MyClassLayout>
  );
};

export default AddRateCards;