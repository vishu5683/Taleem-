import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import PromotionalBanner from '../common comps/promotionalbanner';

const ClassesLink = () => {
  return (
    <Box sx={{ maxWidth: '1145px', margin: '0 auto' }}>
      {/* Breadcrumb */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          fontSize: '12px',
          color: '#737373',
          marginBottom: '16px',
          textAlign: 'left',
        }}
      >
        Home &gt; Academic &gt; Tutors Listing
      </Typography>

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
          fontSize: '24px',
          marginBottom: '20px',
        }}
      >
        Class Details
      </Typography>

      {/* Class Information Box */}
      <Box
        sx={{
          width: '1145px',
          height: '335px',
          borderRadius: '12px',
          border: '1px solid #ccc',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: '24px',
        }}
      >
        {/* Class Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            marginBottom: '16px',
          }}
        >
          Algebra for Primary Students (Grade - 6th)
        </Typography>

        {/* Class Details in a single row */}
        <Grid container spacing={2} sx={{ alignItems: 'center', marginBottom: '24px' }}>
          <Box display="flex" alignItems="center" sx={{ marginRight: '24px' }}>
            <SchoolIcon sx={{ color: '#FFD700', marginRight: '8px' }} />
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Category : Academic
            </Typography>
          </Box>
          
          <Box display="flex" alignItems="center" sx={{ marginRight: '24px' }}>
            <SchoolIcon sx={{ color: '#FFD700', marginRight: '8px' }} />
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Session : Individual
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" sx={{ marginRight: '24px' }}>
            <CalendarTodayIcon sx={{ color: '#FFD700', marginRight: '8px' }} />
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Date : 08 Aug 2024
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" sx={{ marginRight: '24px' }}>
            <AccessTimeIcon sx={{ color: '#FFD700', marginRight: '8px' }} />
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Time : 11:30 AM - 12:30 PM
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <LanguageIcon sx={{ color: '#FFD700', marginRight: '8px' }} />
            <Typography variant="body1" sx={{ fontWeight: 400 }}>
              Language : English
            </Typography>
          </Box>
        </Grid>

        {/* Meeting and Passcode Box in a Row */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#40A39B',
            borderRadius: '16px',
            padding: '16px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            {/* Meeting ID */}
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Meeting ID
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '28px',
                letterSpacing: '4px',
              }}
            >
              739 8493 8775
            </Typography>
          </Box>

          <Box>
            {/* Passcode */}
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Passcode
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '24px',
                letterSpacing: '4px',
                lineHeight: '28px',
              }}
            >
              8kB7DR
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClassesLink;
