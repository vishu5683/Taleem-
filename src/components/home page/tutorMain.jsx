import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';

import img1 from "../../assets/homepage/12.svg"; // Importing the images
import img2 from "../../assets/homepage/34.svg";
import img3 from "../../assets/homepage/56.svg";

const TutorMainPage = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '16px' }}
    >
      {/* Promotional Banner */}
      <Box
        sx={{
          backgroundColor: '#D4EBFF',
          width: { xs: '100%', sm: '90%', md: '1145px' },
          height: '98px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
          padding: { xs: '0 16px', sm: '0 32px' }, // Responsive padding
        }}
      >
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Promotional Banner
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: '#D4EBFF',
          width: { xs: '100%', sm: '90%', md: '1145px' },
          height: '98px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 4,
          padding: { xs: '0 16px', sm: '0 32px' }, // Responsive padding
        }}
      >
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Hello Tutor
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#40A39B',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: '500',
            height: '36px',
            position: { xs: 'static', md: 'absolute' }, // Responsive button positioning
            bottom: '16px',
            right: '16px',
            width: '100%', // Full width on mobile
            maxWidth: { md: '228px' }, // Max width on larger screens
          }}
        >
          Setup Now
        </Button>
      </Box>

      {/* Class Banner 1 */}
      <Box
        sx={{
          backgroundColor: 'white',
          width: { xs: '100%', sm: '90%', md: '1143px' },
          borderRadius: '8px',
          border: '1px solid #ccc',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
          justifyContent: 'space-between',
          padding: '16px',
          mb: 4,
          position: 'relative',
        }}
      >
        {/* Left side content */}
        <Box>
          <Typography variant="h6" fontSize="16px" fontWeight="500" color="black">
            Algebra for Primary Students
          </Typography>
          <Typography variant="body2" fontSize="14px" fontWeight="400" color="black" mb={1}>
            (Grade - 4th to 6th)
          </Typography>

          {/* Icons and details */}
          <Box display="flex" flexDirection="column" gap={1} mt={1} color="#737373">
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarTodayIcon style={{ width: '11px', height: '11px' }} />
              <Typography variant="body2">10th Aug 2024, 11:30 AM</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <AccountCircleIcon style={{ width: '11px', height: '11px' }} />
              <Typography variant="body2">Daniela Chikitani</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <SchoolIcon style={{ width: '11px', height: '11px' }} />
              <Typography variant="body2">Online</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right side Join Now button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#40A39B',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: '500',
            height: '36px',
            position: { xs: 'static', md: 'absolute' }, // Responsive button positioning
            bottom: '16px',
            right: '16px',
            width: '100%', // Full width on mobile
            maxWidth: { md: '228px' }, // Max width on larger screens
          }}
        >
          Join Now
        </Button>
      </Box>

      {/* Images Section - Three images in a row with proper gaps */}
      <Grid 
        container 
        spacing={3}  // Adjust spacing between images
        justifyContent="center" 
        sx={{ mb: 4 }}
      >
        {[img1, img2, img3].map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
            <Box
              component="img"
              src={img}
              alt={`Image ${index + 1}`}
              sx={{
                width: { xs: '80%', sm: '90%', md: '237.56px' }, // Responsive widths
                height: 'auto', // Maintain aspect ratio
                borderRadius: '11.75px',
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Upcoming Classes Section */}
      <Typography variant="h5" fontWeight="bold" mb={4} textAlign="center">
        Upcoming Class
      </Typography>

      {/* Class Banner 2 */}
      <Box
        sx={{
          backgroundColor: 'white',
          width: { xs: '100%', sm: '90%', md: '1143px' },
          borderRadius: '8px',
          border: '1px solid #ccc',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Responsive layout
          justifyContent: 'space-between',
          padding: '16px',
          position: 'relative',
          mb: 4,
        }}
      >
        {/* Left side content */}
        <Box>
          <Typography variant="h6" fontSize="16px" fontWeight="500" color="black">
            Algebra for Primary Students
          </Typography>
          <Typography variant="body2" fontSize="14px" fontWeight="400" color="black" mb={1}>
            (Grade - 4th to 6th)
          </Typography>

          {/* Icons and details */}
          <Box display="flex" flexDirection="column" gap={1} mt={1} color="#737373">
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarTodayIcon style={{ width: '11px', height: '11px' }} />
              <Typography variant="body2">10th Aug 2024, 11:30 AM</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <AccountCircleIcon style={{ width: '11px', height: '11px' }} />
              <Typography variant="body2">Daniela Chikitani</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <SchoolIcon style={{ width: '11px', height: '11px' }} />
              <Typography variant="body2">Online</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right side Join Now button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#40A39B',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: '500',
            height: '36px',
            position: { xs: 'static', md: 'absolute' }, // Responsive button positioning
            bottom: '16px',
            right: '16px',
            width: '100%', // Full width on mobile
            maxWidth: { md: '228px' }, // Max width on larger screens
          }}
        >
          Join Now
        </Button>
      </Box>
    </Grid>
  );
};

export default TutorMainPage;
