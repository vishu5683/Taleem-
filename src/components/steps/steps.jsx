import React from 'react';
import { Box, Typography } from '@mui/material';
import step1 from "../../assets/steps/Step 1.svg";
import step2 from "../../assets/steps/Step 2.svg";
import step3 from "../../assets/steps/Step 3.svg";
import step4 from "../../assets/steps/Step 4.svg";

const Steps = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '24px 16px', md: '40px 0' }, // Reduced padding for smaller screens
      }}
    >
      {/* Heading Section */}
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: { xs: '24px', md: '32px' }, // Smaller font for mobile
          fontWeight: 700,
          textAlign: 'center',
          color: '#000000', // Black color for "How Does It"
        }}
      >
        How Does It{' '}
        <span style={{ color: '#40A39B' }}>Works?</span> {/* Primary Green for "Works?" */}
      </Typography>

      {/* Steps Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap', // Makes it responsive on smaller screens
          gap: { xs: '24px', md: '50px' }, // Adjusted gap for smaller screens
          marginTop: '24px',
        }}
      >
        {/* Step 1 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '200px' }}>
          <Box component="img" src={step1} alt="Step 1" sx={{ width: '44px', height: '44px', mb: 1 }} />
          <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Step: 1</Typography>
          <Typography sx={{ fontSize: '16px', color: '#666666', textAlign: 'center', mt: '6px' }}>
            Lorem ipsum
          </Typography>
        </Box>

        {/* Step 2 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '200px' }}>
          <Box component="img" src={step2} alt="Step 2" sx={{ width: '44px', height: '44px', mb: 1 }} />
          <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Step: 2</Typography>
          <Typography sx={{ fontSize: '16px', color: '#666666', textAlign: 'center', mt: '6px' }}>
            Lorem ipsum
          </Typography>
        </Box>

        {/* Step 3 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '200px' }}>
          <Box component="img" src={step3} alt="Step 3" sx={{ width: '44px', height: '44px', mb: 1 }} />
          <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Step: 3</Typography>
          <Typography sx={{ fontSize: '16px', color: '#666666', textAlign: 'center', mt: '6px' }}>
            Lorem ipsum
          </Typography>
        </Box>

        {/* Step 4 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '200px' }}>
          <Box component="img" src={step4} alt="Step 4" sx={{ width: '44px', height: '44px', mb: 1 }} />
          <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Step: 4</Typography>
          <Typography sx={{ fontSize: '16px', color: '#666666', textAlign: 'center', mt: '6px' }}>
            Lorem ipsum
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Steps;
