import React from 'react';
import { Box, Typography } from '@mui/material';
import bannerimage from "../../assets/contact us/Rectangle 52403.png";
import shapes from "../../assets/contact us/Shapes.png";
import playstore from "../../assets/contact us/Frame 418195.png";
import apple from "../../assets/contact us/Frame 418196.png";
import tutorimage from "../../assets/contact us/image 33.svg";

const LastBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: { xs: '24px', sm: '48px', md: '64px', lg: '80px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: { xs: '300px', md: '350px', lg: '100%' }, // Reduced height
        overflow: 'hidden',
      }}
    >
      {/* Left Shape */}
      <Box
        component="img"
        src={shapes}
        alt="shapes"
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100%', // Same height as the component
          width: { xs: '80px', md: '25%' }, // Adjust width as needed
        }}
      />

      {/* Center Content */}
      <Box sx={{ textAlign: 'center', flex: 1, zIndex: 1 }}>
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
          <Box component="img" src={playstore} alt="Play Store" sx={{ width: { xs: '100px', md: '16%' } }} />
          <Box component="img" src={apple} alt="Apple Store" sx={{ width: { xs: '100px', md: '16%' } }} />
        </Box>
      </Box>

      {/* Tutor Image */}
      <Box
        component="img"
        src={tutorimage}
        alt="Tutor"
        sx={{
          position: 'absolute',
          right: '30%', // Position between the shape and center content
        
          height: '100%', // Overlap 50% with shape
          transform: 'translateX(50%)', // Adjust for overlap
          top:"0"
        }}
      />

      {/* Right Shape */}
      <Box
        component="img"
        src={shapes}
        alt="shapes"
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100%', // Same height as component
          width: { xs: '80px', md: '25%' }, // Adjust width as needed
        }}
      />
    </Box>
  );
};

export default LastBanner;
