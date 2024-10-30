import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddIcon from '@mui/icons-material/Add';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';

const InputField = ({ label, withIcon = true }) => (
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
    <Typography>{label}</Typography>
    {withIcon && <KeyboardArrowDownIcon sx={{ color: '#737373' }} />}
  </Box>
);

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
        <Typography variant="h4" fontWeight="600">
          Book Open Session
        </Typography>

        <Typography fontWeight="550" fontSize="14px">
          Date
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <InputField label="Start Date" />
          <InputField label="End Date" />
          <InputField label="No. of Sessions" withIcon={false} />
        </Box>

        <Typography fontWeight="550" fontSize="14px" mt={2}>
          Add your time for Online availability
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={1}>
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
            <Box display="flex" alignItems="center" gap={1}>
              <WatchLaterIcon sx={{ fontSize: '19px', color: 'black' }} />
              <Typography fontSize="14px" color="black" fontWeight="550">
                01:30 PM - 02:30 PM
              </Typography>
            </Box>

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

        <Typography fontWeight="550" fontSize="14px" mt={2}>
          Select the Rate Card
        </Typography>

        <InputField label="Thermo Dynamic" />

        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#40A39B',
              width: '186px',
              textTransform:"none",
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
