import React from 'react';
import { Box, Typography } from '@mui/material';
import leftsideimg from '../../assets/contact us/girlimg.svg';
import GetInTouch from '../contact us comps/Getintouch';
import LastBanner from '../contact us comps/lastbanner';

const ContactUs = () => {
  return (
    <>
    <Box
      sx={{
        background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small devices
        padding: { xs: '24px', sm: '48px', md: '64px', lg: '80px' },
        textAlign: { xs: 'center', md: 'left' }, // Center text on small devices
      }}
    >
      {/* Left Side - Text */}
      <Box sx={{ flex: 1, paddingRight: { md: '40px', lg: '80px' }, mb: { xs: '24px', md: 0 } }}>
        <Typography
          sx={{
            fontSize: { xs: '32px', sm: '36px', md: '42px', lg: '48px' }, // Responsive font size
            fontWeight: 700,
            color: 'black',
            mb: 2,
          }}
        >
          We’re Here to Help!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '18px' }, // Responsive font size for description
            fontWeight: 400,
            color: '#4A4A4A',
            lineHeight: 1.6,
          }}
        >
          If you need assistance or have any questions, please reach out to us <br /> using one of the options below.
        </Typography>
      </Box>

      {/* Right Side - Image */}
      <Box
        component="img"
        src={leftsideimg}
        alt="Contact us"
        sx={{
          width: { xs: '100%', sm: '300px', md: '355px' }, // Responsive width for image
          height: { xs: 'auto', sm: '250px', md: '300px' }, // Adjust height for responsiveness
          borderRadius: '28px',
          objectFit: 'cover',
        }}
      />

      
    </Box>
    <GetInTouch/>
    <LastBanner/>
    </>
  );
};

export default ContactUs;
