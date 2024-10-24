import React from 'react';
import { Box, Typography, Divider, Card, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import banner from '../../assets/course card/banner.png';
import girl from '../../assets/course card/girl.png';

const CourseDescriptions = () => {
  return (
    <Box
      sx={{
        padding: { xs: '10px 20px', sm: '20px 50px', md: '20px 100px' },
      }}
    >
      {/* Breadcrumbs */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          fontSize: { xs: '10px', md: '12px' },
          color: '#737373',
          marginBottom: '16px',
          textAlign: 'left',
        }}
      >
        Home &gt; All Courses &gt; Course Listing &gt;{' '}
        <span style={{ fontWeight: 700 ,color:"black"}}>Course Details</span>
      </Typography>

      {/* Banner Image */}
      <Box
        component="img"
        src={banner}
        alt="Banner"
        sx={{
          width: { xs: '100%', md: '1140px' },
          height: { xs: '200px', md: '324px' },
          borderRadius: '12px',
          marginBottom: '40px',
        }}
      />

      {/* Left and Right Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        {/* Left Content */}
        <Box sx={{ width: { xs: '100%', md: '60%' } }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, fontSize: { xs: '20px', md: '24px' }, marginBottom: '16px' }}
          >
            Data Science Foundations: From Basics to Insights
          </Typography>

          {/* Course Info */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '16px',
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Level:
            </Typography>
            <Typography sx={{ color: '#000000' }}>Beginner</Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: '#E6E6E6', display: { xs: 'none', md: 'block' } }}
            />
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Type:
            </Typography>
            <Typography sx={{ color: '#000000' }}>Online</Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: '#E6E6E6', display: { xs: 'none', md: 'block' } }}
            />
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Duration:
            </Typography>
            <Typography sx={{ color: '#000000' }}>1 hr</Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: '#E6E6E6', display: { xs: 'none', md: 'block' } }}
            />
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Course Language:
            </Typography>
            <Typography sx={{ color: '#000000' }}>English</Typography>
          </Box>

          {/* Description */}
          <Divider sx={{ backgroundColor: '#E6E6E6', marginBottom: '16px' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '18px', md: '20px' }, marginBottom: '8px' }}>
            Description
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 400, fontSize: { xs: '14px', md: '18px' }, marginBottom: '16px' }}>
            Teaching Philosophy: Ms. Doe believes in making math accessible and enjoyable for all students. She uses a
            variety of teaching methods to cater to different learning styles and encourages students.
          </Typography>
        </Box>
      </Box>

      {/* Tutor Details Section */}
      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '18px', md: '20px' }, marginBottom: '8px' }}>
        Tutor Details
      </Typography>
      <Card
        sx={{
          width: { xs: '100%', md: '763px' },
          height: { xs: 'auto', md: '173px' },
          borderRadius: '12px',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: '20px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {/* Tutor Image */}
        <Box
          component="img"
          src={girl}
          alt="Tutor"
          sx={{
            width: { xs: '60px', md: '85px' },
            height: { xs: '60px', md: '92px' },
            borderRadius: '8px',
          }}
        />

        {/* Tutor Info */}
        <Box sx={{ flexGrow: 1, marginLeft: { xs: '0', md: '10px' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Daniela Chikitani
          </Typography>

          {/* Tutor Additional Info */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: '10px',
              marginTop: '8px',
            }}
          >
            <BusinessCenterIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              Music Tutors in University
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: '10px',
              marginTop: '8px',
            }}
          >
            <LocationOnIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              Doha, Qatar
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#E6E6E6', display: { xs: 'none', md: 'block' } }} />
            <StarBorderIcon sx={{ color: 'black', fontSize: '16px' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              4.0 Rating | 128 Reviews
            </Typography>
          </Box>
        </Box>

        {/* Right Side - Action Buttons */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: '10px' }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#40A39B',
              color: '#40A39B',
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#359c87',
                backgroundColor: 'transparent',
              },
              width: { xs: 'auto', md: '150px' },
            }}
          >
            View Profile
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#40A39B',
              color: '#ffffff',
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#359c87',
              },
              width: { xs: 'auto', md: '150px' },
            }}
          >
            Book Tutor
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CourseDescriptions;
