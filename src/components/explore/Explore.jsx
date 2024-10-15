import React from 'react';
import { Box, Typography, IconButton } from '@mui/material'; // Import Box here
import tutor1 from "../../assets/explore/Rectangle 52398 (1).svg";
import tutor2 from "../../assets/explore/Rectangle 52398 (3).svg";
import tutor3 from "../../assets/explore/Rectangle 52398.svg";
import TutorCard from '../card'; // Reusable TutorCard component
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Explore = () => {
  return (
    <Box sx={{ padding: '40px 0', textAlign: 'center' }}>
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '36px',
          marginBottom: '16px',
        }}
      >
         Explore the <span style={{ color: '#40A39B' }}>world's top</span> Tutors
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '24px',
          marginBottom: '40px',
          color:'#737373'
        }}
      >
        Our top tutors are here to provide the highest quality education tailored to your needs.
      </Typography>

      {/* Carousel Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        {/* Left Arrow */}
        <IconButton
          sx={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #737373', // Primary green border
            color: '#737373', // Primary green arrow
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: '#F0F0F0',
            },
            marginRight: '10px',
          }}
        >
          <ArrowBackIos />
        </IconButton>

        {/* Cards Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <TutorCard
            imageSrc={tutor1}
            name="Daniela Chikitani"
            subject="Maths’ Tutors in University"
            location="Doha, Qatar"
          />
          <TutorCard
            imageSrc={tutor2}
            name="Cate Silva"
            subject="Maths’ Tutors in University"
            location="Doha, Qatar"
          />
          <TutorCard
            imageSrc={tutor3}
            name="Daniela Chikitani"
            subject="Maths’ Tutors in University"
            location="Doha, Qatar"
          />
        </Box>

        {/* Right Arrow */}
        <IconButton
          sx={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #737373', // Primary green border
            color: '#737373', // Primary green arrow
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: '#F0F0F0',
            },
            marginLeft: '10px',
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Explore All Button */}
      <Box sx={{ marginTop: '40px' }}>
        <Box
          component="button"
          sx={{
            width: '190px',
            height: '48px',
            backgroundColor: '#FFFFFF', // Primary green background
            color: '#40A39B',
            borderRadius: '8px',
            border: '1px solid #40A39B',
            padding: '14px 16px',
            textAlign: 'center',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#368A83',
            },
          }}
        >
          Explore All
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;
