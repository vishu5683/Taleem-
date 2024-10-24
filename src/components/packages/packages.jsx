import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Packages = () => {
  const [selected, setSelected] = useState('online');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 0',
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '36px',
          textAlign: 'center',
          color: '#000000',
        }}
      >
     What are the <span style={{ color: '#40A39B' }}>Packages</span> we offer?

      </Typography>

      {/* Packages Box with Buttons */}
      <Box
        sx={{
          width: '302px',
          height: '86px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          marginTop: '22px', // Add some gap between heading and the box
          borderTop: '1px solid #40A39B', // Top border only, Primary Green
          border: '1px solid #40A39B', // Primary green border around buttons
          borderRadius: '8px', // Border radius for a smoother look
          padding: '10px', // Add some padding to the box
        }}
      >
        {/* Online Button */}
        <Button
          onClick={() => setSelected('online')}
          sx={{
            width: '120px',
            height: '56px',
            padding: '14px 16px',
            gap: '8px',
            borderRadius: '8px',
            fontWeight: 700, 
            fontSize: '24px', 
            textTransform: 'none',
            backgroundColor: selected === 'online' ? '#40A39B' : 'transparent',
            color: selected === 'online' ? '#FFFFFF' : '#40A39B',
            opacity: selected === 'online' ? 1 : 0.7,
            '&:hover': {
              backgroundColor: '#40A39B',
              color: '#FFFFFF',
              opacity: 1,
            },
          }}
        >
          Online
        </Button>

        {/* Offline Button */}
        <Button
          onClick={() => setSelected('offline')}
          sx={{
            width: '120px',
            height: '56px',
            padding: '14px 16px',
            gap: '8px',
            borderRadius: '8px',
            fontWeight: 700, 
            fontSize: '24px', 
            textTransform: 'none',
            backgroundColor: selected === 'offline' ? '#40A39B' : 'transparent',
            color: selected === 'offline' ? '#FFFFFF' : '#40A39B',
            opacity: selected === 'offline' ? 1 : 0.7,
            '&:hover': {
              backgroundColor: '#40A39B',
              color: '#FFFFFF',
              opacity: 1,
            },
          }}
        >
          Offline
        </Button>
      </Box>

      {/* Packages List */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '120px', // Gap between the boxes
          marginTop: '40px', // Space between the buttons and the packages
          flexWrap: 'wrap', // Ensure responsiveness on smaller screens
        }}
      >
        {[1, 2, 3].map((item) => (
          <Box
            key={item}
            sx={{
              width: '294px',
              height: '252px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '42px 43px',
              gap: '10px',
              borderRadius: '12px ',
              border: '1px solid #40A39B', // Primary green border
              opacity: 0.9, // Make the box visible
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for better visibility
            }}
          >
            {/* Package Details */}
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '8px',
                color: '#000000',
              }}
            >
              8-Hour Package
            </Typography>
            <Typography
              sx={{
                fontSize: '24px',
                textAlign: 'center',
                color: '#000000',
                fontWeight:'700'
              }}
            >
              736 AED
            </Typography>

            {/* Book a Tutor Button */}
            <Button
              sx={{
                width: '207px',
                height: '48px',
                fontWeight: 500,
                fontSize:"16px",
                backgroundColor: '#40A39B', // Primary green background
                color: '#FFFFFF', // White text
                borderRadius: '8px ',
                padding: '14px 0',
                marginTop: '16px', // Add some space between text and button
                '&:hover': {
                  backgroundColor: '#388E7B', // Slightly darker green on hover
                },
              }}
            >
              Book a Tutor
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Packages;
