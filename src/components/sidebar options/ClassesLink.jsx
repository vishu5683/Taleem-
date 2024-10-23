import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import ChatIcon from '@mui/icons-material/Chat';
import PromotionalBanner from '../common comps/promotionalbanner';
import profileIcon from '../../assets/schedule classes/profile.png';

const ClassesLink = () => {
  const teacher = { name: 'Quamar Alam', role: 'Artist' };

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
          mb: 10,
        }}
      >
        {/* Class Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '16px', sm: '18px' },
            marginBottom: '24px',
          }}
        >
          Algebra for Primary Students (Grade - 6th)
        </Typography>

        {/* Class Details in a single row */}
        <Grid 
  container 
  spacing={2} 
  sx={{ 
    alignItems: 'center', 
    marginBottom: '24px',
    flexWrap: { xs: 'wrap', md: 'nowrap' } // Wrap on small screens, stay in one row on larger screens
  }}
>
  <Grid item xs={12} sm={6} md="auto">
    <Box display="flex" alignItems="center">
      <SchoolIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
      <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '12px' }}>
        Category : Academic
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md="auto">
    <Box display="flex" alignItems="center">
      <SchoolIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
      <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '12px' }}>
        Session : Individual
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md="auto">
    <Box display="flex" alignItems="center">
      <CalendarTodayIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
      <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '12px' }}>
        Date : 08 Aug 2024
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md="auto">
    <Box display="flex" alignItems="center">
      <AccessTimeIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
      <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '12px' }}>
        Time : 11:30 AM - 12:30 PM
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={6} md="auto">
    <Box display="flex" alignItems="center">
      <LanguageIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
      <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '12px' }}>
        Language : English
      </Typography>
    </Box>
  </Grid>
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
            justifyContent: { xs: 'center', sm: 'space-between' },
            flexDirection: { xs: 'column', sm: 'row' },
            textAlign: { xs: 'center', sm: 'left' },
            marginBottom: '20px', // Adding margin bottom
          }}
        >
          <Box mb={{ xs: '16px', sm: '0' }}>
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

        {/* Profile Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: { xs: 2, sm: 0 } }}>
            <img src={profileIcon} alt="Profile" style={{ width: '32px', height: '32px' }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '14px' }}>
                {teacher.name}
              </Typography>
              <Typography variant="h6" sx={{ color: '#737373', fontWeight: 400, fontSize: '12px' }}>
                {teacher.role}
              </Typography>
            </Box>
          </Box>

          {/* Chat Button */}
          <Button
            variant="contained"
            startIcon={<ChatIcon />}
            sx={{
              backgroundColor: '#40A39B',
              color: '#fff',
              width: { xs: '100%', sm: '94px' },
              height: '40px',
              padding: '8px 16px',
              gap: '8px',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#368b85',
              },
            }}
          >
            Chat
          </Button>
        </Box>

      </Box>

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
          Start Class
        </Button>
      </Box>
    </Box>
  );
};

export default ClassesLink;
