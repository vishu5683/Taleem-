import React, { useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import pic1 from "../../assets/raring/Group 1000004553.png";
import pic3 from "../../assets/raring/Group 1000004554.png";
import ReviewCard from '../cards/ratingcard'; // Adjust the path as needed

const Rating = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // cycle back to last
    } else {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // cycle to the next
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '38px',
        }}
      >
        Rating & Review
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: '24px',
          color: '#737373',
          lineHeight: '20px',
        }}
      >
        What People say about Taleem
      </Typography>

      {/* Cards Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '24px',
          width: '100%',
          maxWidth: '1100px',
        }}
      >
        <ReviewCard
          imgSrc={pic1}
          name="Mr. Ahmed"
          reviewText="Taleem has completely transformed my learning experience. The tutors are not only knowledgeable but also incredibly supportive."
          isMobile={isMobile}
          handleClick={() => handleArrowClick('left')}
          direction={!isMobile ? 'left' : null}
        />

        <ReviewCard
          imgSrc={pic3}
          name="Fenton Martin"
          reviewText="As a Tutors on Taleem, I love the flexibility and
the opportunity to connect with students from
all over the world."
          isMobile={isMobile}
          handleClick={() => handleArrowClick('right')}
          direction={!isMobile ? 'right' : null}
        />
      </Box>

      {/* Slider Balls */}
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          marginTop: '16px',
        }}
      >
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={{
              width: '14px',
              height: '14px',
              backgroundColor: activeIndex === index ? '#40A39B' : '#D9D9D9',
              borderRadius: '50%',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Rating;
