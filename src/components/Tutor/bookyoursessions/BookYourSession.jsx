import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BookYourSession = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '800px',
        margin: 'auto',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Header Section */}
      <Typography variant="h4" fontWeight="600">
        Book Open Session
      </Typography>

      {/* Date Label */}
      <Typography fontWeight="500" fontSize="14px">
        Date
      </Typography>

      {/* Input Fields */}
      <Box display="flex" flexDirection="column" gap={2}>
        {/* Start Date */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '739px',
            height: '44px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #737373',
            color: '#737373',
          }}
        >
          <Typography>Start Date</Typography>
          <KeyboardArrowDownIcon sx={{ color: '#737373' }} />
        </Box>

        {/* End Date */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '739px',
            height: '44px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #737373',
            color: '#737373',
          }}
        >
          <Typography>End Date</Typography>
          <KeyboardArrowDownIcon sx={{ color: '#737373' }} />
        </Box>

        {/* Number of Sessions */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '739px',
            height: '44px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #737373',
            color: '#737373',
          }}
        >
          <Typography>No. of Sessions</Typography>
          <KeyboardArrowDownIcon sx={{ color: '#737373' }} />
        </Box>
      </Box>

      {/* Availability Label */}
      <Typography fontWeight="500" fontSize="14px">
        Add your time for Online availability
      </Typography>
    </Box>
  );
};

export default BookYourSession;
