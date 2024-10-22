import React from 'react';
import { Box, Typography, Divider, Card, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import banner from '../../assets/course card/banner.png';
import girl from '../../assets/course card/girl.png';

const CourseDescriptions = () => {
  return (
    <Box sx={{ padding: '20px 100px' }}>
      {/* Breadcrumbs */}
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
        Home &gt; All Courses &gt; Course Listing &gt;{' '}
        <span style={{ fontWeight: 700 }}>Course Details</span>
      </Typography>

      {/* Banner Image */}
      <Box
        component="img"
        src={banner}
        alt="Banner"
        sx={{
          width: '1140px',
          height: '324px',
          borderRadius: '12px',
          marginBottom: '40px',
        }}
      />

      {/* Left and Right Content */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {/* Left Content */}
        <Box sx={{ width: '60%' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, fontSize:"24px",marginBottom: '16px' }}>
            Data Science Foundations: From Basics to Insights
          </Typography>

          {/* Course Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Level:
            </Typography>
            <Typography sx={{ color: '#000000' }}>Beginner</Typography>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#E6E6E6' }} />
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Type:
            </Typography>
            <Typography sx={{ color: '#000000' }}>Online</Typography>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#E6E6E6' }} />

            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              Duration:
            </Typography>
            <Typography sx={{ color: '#000000' }}>1 hr</Typography>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#E6E6E6' }} />

         

            <Typography variant="body2" sx={{ fontWeight: 400 }}>
            Course Language :
            </Typography>
            <Typography sx={{ color: '#000000' }}>English</Typography>
          </Box>

          {/* Description */}
          <Divider sx={{ backgroundColor: '#E6E6E6', marginBottom: '16px' }} />
          <Typography variant="h6" sx={{ fontWeight: 700,fontSize:"20px", marginBottom: '8px' }}>
            Description
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 400,fontSize:"18px", marginBottom: '16px' }}>
            Teaching Philosophy: Ms. Doe believes in making math accessible and enjoyable for all
            students. She uses a variety of teaching methods to cater to different learning styles and
            encourages students.
          </Typography>
        </Box>
     
      

      </Box>

      {/* Tutor Details Section */}
      <Typography variant="h6" sx={{ fontWeight: 700,fontSize:"20px", marginBottom: '8px' }}>
        Tutor Details
          </Typography>
      <Card
        sx={{
          width: '763px',
          height: '173px',
          borderRadius: '12px',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: '20px',
          display: 'flex',
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
            width: '85px',
            height: '92px',
            borderRadius: '8px',
          }}
        />

        {/* Tutor Info */}
        <Box sx={{ flexGrow: 1 ,marginLeft:"10px"}}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Daniela Chikitani
          </Typography>

          {/* Tutor Additional Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
            <BusinessCenterIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              Music Tutors in University
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
            <LocationOnIcon sx={{ color: '#F3C623' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              Doha, Qatar
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#E6E6E6' }} />
            <StarBorderIcon sx={{ color: 'black', fontSize: '16px' }} />
            <Typography variant="body2" sx={{ color: '#333' }}>
              4.0 Rating | 128 Reviews
            </Typography>
          </Box>
        </Box>

        {/* Right Side - Action Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
