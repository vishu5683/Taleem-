import React from 'react';
import { Box, Typography } from '@mui/material';
import bgimage from "../../assets/contact us/Banner3.png"; // Updated to use bgimage
import playstore from "../../assets/contact us/Frame 418195.png";
import apple from "../../assets/contact us/Frame 418196.png";
const LastBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgimage})`, // Use bgimage as the background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: { xs: '24px', sm: '48px', md: '64px', lg: '80px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center the content
        height: { xs: '300px', md: '350px', lg: '100%' },
        overflow: 'hidden',
      }}
    >
      {/* Center Content */}
      <Box sx={{ textAlign: 'center', zIndex: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: '20px', md: '26px', lg: '32px' },
            fontWeight: 600,
            color: 'black',
            mb: 2,
          }}
        >
          Download App From
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Box
            component="img"
            src={playstore}
            alt="Play Store"
            sx={{
              width: { xs: '120px', sm: '140px', md: '160px', lg: '180px' }, // Dynamically increase width
              height: 'auto', // Keep aspect ratio
            }}
          />
          <Box
            component="img"
            src={apple}
            alt="Apple Store"
            sx={{
              width: { xs: '120px', sm: '140px', md: '160px', lg: '180px' }, // Dynamically increase width
              height: 'auto', // Keep aspect ratio
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LastBanner;
