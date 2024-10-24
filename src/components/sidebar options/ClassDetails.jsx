import React from 'react';
import { Box, Typography, Grid, Button, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';
import PromotionalBanner from '../common comps/promotionalbanner';

// Reusable component for class details items
const ClassDetailItem = ({ icon: Icon, label, value }) => (
  <Box display="flex" alignItems="center">
    <Icon sx={{ color: '#EBBE49', marginRight: '8px' }} />
    <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '12px' }}>
      {label} : {value}
    </Typography>
  </Box>
);

// Reusable divider with margin-left
const CustomDivider = () => (
  <Divider
    orientation="vertical"
    sx={{
      backgroundColor: '#D9D9D9',
      width: '1px',
      height: '36px',
      mx: 1,
      ml: 10,
    }}
  />
);

const ClassDetails = () => {
  return (
    <Box sx={{ maxWidth: '1145px', margin: '20px auto', px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Promotional Banner */}
      <PromotionalBanner
        sx={{
          width: '100%',
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '25px',
        }}
      />

      {/* Class Details Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '20px', sm: '24px' },
          marginBottom: '20px',
        }}
      >
        Class Details
      </Typography>

      {/* Class Information Box */}
      <Box
        sx={{
          width: '100%',
          borderRadius: '12px',
          border: '1px solid #ccc',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: { xs: '16px', sm: '24px' },
          mb: 5,
        }}
      >
        {/* Class Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '16px', sm: '18px' },
            marginBottom: '20px',
          }}
        >
          Algebra for Primary Students (Grade - 6th)
        </Typography>

        {/* Class Details in a single row */}
        <Grid container spacing={2} sx={{ alignItems: 'center', marginBottom: '24px' }}>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={SchoolIcon} label="Category" value="Academic" />
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={SchoolIcon} label="Session" value="Individual" />
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={LanguageIcon} label="Language" value="English" />
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={CalendarTodayIcon} label="Package Starting Date" value="08 Aug 2024" />
          </Grid>
        </Grid>
      </Box>

      {/* Instructions */}
      <Typography variant="body1" sx={{ fontWeight:700, mb: 2 }}>
        Instructions
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 400, mb: 2 }}>
        Please join your class link before the class starts.
      </Typography>

      {/* Package Details Section */}
      <Typography variant="body1" sx={{ fontWeight:700, mb: 2 }}>
      Package Details
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          mb: 5,
        }}
      >
        {/* Package */}
        <Box sx={{ textAlign: 'start', mr: 3 }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Package</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>1 Week</Typography>
        </Box>
        <CustomDivider />

        {/* Class Type */}
        <Box sx={{ textAlign: 'start', mr: 2 }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Class Type</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>Online</Typography>
        </Box>
        <CustomDivider />

        {/* Booking ID */}
        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Booking ID</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>1000546565</Typography>
        </Box>
        <CustomDivider />

        {/* Date */}
        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Date</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>08 Aug 2024, 10:40 AM</Typography>
        </Box>
        <CustomDivider />

        {/* Payment Mode */}
        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Payment Mode</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>Card</Typography>
        </Box>
        <CustomDivider />

        {/* Status */}
        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Status</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>Completed</Typography>
        </Box>
      </Box>

      <Typography variant="body1" sx={{ fontWeight:700, mb: 2 }}>
      Schedule
      </Typography>
      {/* Start Class Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#40A39B',
            color: '#fff',
            width: { xs: '100%', sm: '319px' },
            height: '48px',
            padding: '14px 16px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#368b85',
            },
          }}
        >
          Join Class
        </Button>
      </Box>
    </Box>
  );
};

export default ClassDetails;
