import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import pic1 from "../../assets/Features/Group 1000004861.png";
import pic2 from "../../assets/Features/Group 1000004864.png";

const FeaturesCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [pic2, pic1, pic2]; // Images in the carousel

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        width: '100%',
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
          color: '#40A39B',  // Primary Green for "Features"
        }}
      >
        Features <span style={{ color: '#000000' }}>We Offer</span>
      </Typography>

      {/* Carousel Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginTop: '40px',
          flexDirection: { xs: 'column', md: 'row' },  // Row layout for larger screens, column for small
        }}
      >
        {/* Left Image */}
        <Box
          component="img"
          src={pic2}
          alt="Left Image"
          sx={{
            display: { xs: 'none', md: 'block' },  // Hide on small screens, show on medium and above
            width: '406.08px',
            height: '311.91px',
            opacity: currentImage === 0 ? '100%' : '65%',
            transition: 'opacity 0.5s',
          }}
        />

        {/* Center Image */}
        <Box
          component="img"
          src={images[currentImage]}
          alt="Center Image"
          sx={{
            width: { xs: '300px', md: '507.59px' },  // Responsive sizing
            height: { xs: '230px', md: '389.89px' },
            borderRadius: '12px',
            transition: 'all 0.5s ease-in-out',
          }}
        />

        {/* Right Image */}
        <Box
          component="img"
          src={pic2}
          alt="Right Image"
          sx={{
            display: { xs: 'none', md: 'block' },  // Hide on small screens, show on medium and above
            width: '406.08px',
            height: '311.91px',
            opacity: currentImage === 2 ? '100%' : '65%',
            transition: 'opacity 0.5s',
          }}
        />
      </Box>

      {/* Carousel Arrows */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          marginTop: '24px',
        }}
      >
        {/* Left Arrow (No Circle, Green Color) */}
        <IconButton
          onClick={handlePrev}
          sx={{
            color: '#40A39B',  // Primary Green arrow color
            border: 'none',  // No circle border
          }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* Right Arrow (White Circle, Black Border, Green Arrow) */}
        <IconButton
          onClick={handleNext}
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',  // White background
            border: '2px solid #000000',  // Black border
            color: '#40A39B',  // Primary Green arrow color
            '&:hover': {
              backgroundColor: '#F0F0F0',
            },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FeaturesCarousel;
