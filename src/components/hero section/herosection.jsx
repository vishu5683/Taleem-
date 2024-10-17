import React from 'react';
import { Box, Typography, Grid, InputBase, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search'; // MUI icon for search
import bgimg from '../../assets/hero sec/Banner1.png';

// Styled component for background image
const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '600px', // Default height for larger screens
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '55px', // Left padding for desktop
  [theme.breakpoints.down('md')]: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    height: 'auto',
    padding: '40px 20px', // Reduced padding for mobile
  },
}));

// Styled search box
const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '497px', // Fixed width for desktop
  height: '64px', // Fixed height
  padding: '8px 8px 8px 16px',
  gap: '5px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  [theme.breakpoints.down('md')]: {
    width: '100%', // Full width on mobile
    height: '50px', // Reduced height for mobile
    padding: '6px 6px 6px 12px', // Smaller padding on mobile
  },
}));

// Styled search button
const SearchButton = styled(Button)(({ theme }) => ({
  width: '120px', // Fixed width
  height: '48px',
  padding: '14px 16px',
  borderRadius: '8px',
  textTransform: 'none',
  backgroundColor: '#40A39B',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#37a393',
  },
  [theme.breakpoints.down('md')]: {
    width: '100px', // Reduced width for mobile
    height: '40px', // Reduced height for mobile
    fontSize: '14px', // Smaller font for mobile
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if device is mobile

  return (
    <HeroSectionWrapper>
      <Grid container justifyContent="flex-start">
        <Grid item xs={12} md={6}>
          <Box sx={{ color: 'black', padding: { xs: '0', sm: '0', md: '0' } }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              fontSize={{ xs: '24px', sm: '32px', md: '48px' }} // Reduced font size for phones
              lineHeight="1.2"
            >
              Connect with your <br />
              Perfect Tutor <br />
              for learning.
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              fontSize={{ xs: '12px', sm: '16px', md: '18px' }} // Smaller font size on phones
              mt={2}
            >
              Accelerate your professional growth with <br />
              1:1 expert guidance of <br />
              28,409+ tutors in our community.
            </Typography>

            {/* Conditionally render Search Box on non-mobile devices */}
            {!isMobile && (
              <SearchBox>
                <SearchIcon style={{ marginRight: '10px', color: 'black' }} />
                <InputBase
                  placeholder="Search Tutor, Subject, Courses, etc."
                  fullWidth
                  sx={{
                    fontSize: { xs: '14px', sm: '16px', md: '16px' }, // Reduced font size on mobile
                  }}
                />
                <SearchButton>Search</SearchButton>
              </SearchBox>
            )}
          </Box>
        </Grid>
      </Grid>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
