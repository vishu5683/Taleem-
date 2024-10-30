import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddIcon from '@mui/icons-material/Add';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';

const BookYourSession = () => {
  return (
    <MyClassLayout>
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
        <Typography fontWeight="500" fontSize="14px" mt={2}>
          Add your time for Online availability
        </Typography>

        {/* Time Slot Box with Add Button */}
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          {/* Time Slot Box */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              width: '673px',
              padding: '10px 12px',
              bgcolor: '#EBFFFC',
              borderRadius: '8px',
            }}
          >
            {/* Time Icon and Time Text */}
            <Box display="flex" alignItems="center" gap={1}>
              <WatchLaterIcon sx={{ fontSize: '19px', color: '#737373' }} />
              <Typography fontSize="14px" color="#737373">
                01:30 PM - 02:30 PM
              </Typography>
            </Box>

            {/* Daily Dropdown Box */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                width: '65px',
                padding: '5px 7px',
                bgcolor: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #737373',
              }}
            >
              <Typography fontSize="12px" color="#737373">
                Daily
              </Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: '18px', color: '#737373' }} />
            </Box>
          </Box>

          {/* Add Button */}
          <IconButton
            sx={{
              width: '46px',
              height: '46px',
              bgcolor: '#40A39B',
              borderRadius: '8px',
              color: 'white',
              '&:hover': {
                bgcolor: '#369487',
              },
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>

        {/* Select Rate Card Section */}
        <Typography fontWeight="500" fontSize="14px" mt={2}>
          Select the Rate Card
        </Typography>

        {/* Rate Card Input */}
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
          <Typography>Thermo Dynamic</Typography>
          <KeyboardArrowDownIcon sx={{ color: '#737373' }} />
        </Box>

        {/* Submit Button */}
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#40A39B',
              width: '186px',
              height: '44px',
              padding: '12px 16px',
              borderRadius: '8px',
              color: 'white',
              '&:hover': {
                bgcolor: '#369487',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </MyClassLayout>
  );
};

export default BookYourSession;
