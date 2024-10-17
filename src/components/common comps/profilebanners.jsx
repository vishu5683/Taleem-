import React from 'react';
import { Box } from '@mui/material';

const ProfileBanner = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '186px',
        borderRadius: '12px',
        background: 'linear-gradient(102.58deg, #40A39B -18.44%, #C6FFC9 100%)',
        position: 'relative', // Enable absolute positioning for children
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default ProfileBanner;
