import React, { useState } from 'react';
import { Box, Typography, Slider, Button, IconButton } from '@mui/material';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';
import EditIcon from '@mui/icons-material/Edit';

// Reusable component for each meeting point box
const MeetingPointBox = ({ pointNumber, address }) => (
  <Box
    sx={{
      width: '100%',
      height: '110px',
      borderRadius: '10px',
      backgroundColor: '#EBFFFC',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      mb: '16px',
    }}
  >
    <Box>
      <Box
        sx={{
          width: '114px',
          height: '26px',
          padding: '0px 12px',
          borderRadius: '70px',
          background: 'linear-gradient(105.04deg, #EBBE49 -25.33%, #FFC7C6 100%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 400, fontSize: '12px' }}>Meeting Point {pointNumber}</Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          mt: '10px',
          whiteSpace: 'pre-line', // Allows line breaks
        }}
      >
        {address}
      </Typography>
    </Box>
    <IconButton sx={{ color: '#5F6368', fontSize: '17px' }}>
      <EditIcon />
    </IconButton>
  </Box>
);

const MeetingPreference = () => {
  const [distance, setDistance] = useState(25); // Initial slider value

  // Handle slider change
  const handleSliderChange = (event, newValue) => {
    setDistance(newValue);
  };

  return (
    <MyClassLayout>
      <Box sx={{ padding: '24px' }}>
        {/* Page Title */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '32px',
            marginBottom: '16px',
          }}
        >
          Meeting Preference
        </Typography>

        {/* Booking Preference Box */}
        <Box
          sx={{
            backgroundColor: '#EBBE49',
            width: '100%',
            height: '101px',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Booking Preference Label */}
          <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>Booking Preference radius</Typography>

          {/* Range Slider with Dynamic Distance */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '8px' }}>
            <Slider
              value={distance}
              onChange={handleSliderChange}
              min={0}
              max={100}
              step={5}
              valueLabelDisplay="on" // Displays the value above the thumb
              valueLabelFormat={(value) => `${value} km`} // Adds km to the value
              sx={{
                width: '90%',
                height: '6px',
                color: '#40A39B',
                '& .MuiSlider-thumb': {
                  height: 18,
                  width: 18,
                },
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-rail': {
                  opacity: 0.5,
                  backgroundColor: '#E6E6E6',
                },
                '& .MuiSlider-valueLabel': {
                  top: -25,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#FFF',
                },
              }}
            />
          </Box>
        </Box>

        {/* Meeting Point Title and Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '24px',
            marginBottom: '16px',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>Meeting Point</Typography>
          <Button
            sx={{
              backgroundColor: '#40A39B',
              color: '#fff',
              padding: '12px 16px',
              borderRadius: '8px',
              fontWeight: 400,
              fontSize: '16px',
              width: '35%',
              height: '44px',
              textTransform:"none",
              '&:hover': { backgroundColor: '#368f80' },
            }}
          >
            Add New Meeting Point
          </Button>
        </Box>

        {/* Meeting Points */}
        <MeetingPointBox
          pointNumber={1}
          address={`Al Rayyan Complex\nA, Nr Al Hamra Restaurant, Rayyan Rd, Doha, Qatar`}
        />
        <MeetingPointBox
          pointNumber={2}
          address={`West Bay Complex\nB, Next to City Center Mall, West Bay, Doha, Qatar`}
        />
      </Box>
    </MyClassLayout>
  );
};

export default MeetingPreference;
