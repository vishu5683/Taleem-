import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ReviewCard = ({ imgSrc, name, reviewText, isMobile, handleClick, direction }) => (
  <Box
    sx={{
      width: { xs: '90%', sm: '447px' }, // Responsive width: 90% for extra small, 447px for small and up
      height: '300px', // Fixed height
      backgroundColor: '#FFFFFF',
      borderRadius: '18px',  // Corner curves
      border: '1px solid #EBBE49',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      position: 'relative',
      boxSizing: 'border-box',  // Ensures padding is included in width and height
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px', // Space between the image and the text
      }}
    >
      {/* Image on the left or right */}
      <Box
        component="img"
        src={imgSrc}
        alt="Profile Picture"
        sx={{
          width: { xs: '80px', md: '134px' },
          height: { xs: '80px', md: '134px' },
          borderRadius: '50%', // Circular image
        }}
      />

      {/* Name and Stars */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '28px',
            textAlign: 'left',
          }}
        >
          {name}
        </Typography>
        <Box sx={{ display: 'flex', gap: '4px' }}>
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              sx={{
                width: '27px',
                height: '27px',
                color: '#737373', // Grey-colored stars
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
    
    {/* Review Text */}
    <Typography
      sx={{
        fontFamily: 'Metropolis',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '22px',
        textAlign: 'left',
        color: '#737373',
        marginTop: '16px',
        padding: '7px',
        overflow: 'hidden',  // To handle text overflow neatly
        textOverflow: 'ellipsis',
      }}
    >
      {reviewText}
    </Typography>

    {/* Arrow for sliding */}
    {!isMobile && direction && (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          [direction]: '-23px',
          transform: 'translateY(-50%)',
          width: '46px',
          height: '46px',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid #E6E6E6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        onClick={handleClick}
      >
        <Typography sx={{ fontSize: '24px', color: '#737373' }}>
          {direction === 'left' ? '<' : '>'}
        </Typography>
      </Box>
    )}
  </Box>
);

export default ReviewCard;
