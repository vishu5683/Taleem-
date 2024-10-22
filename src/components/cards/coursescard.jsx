import React from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import RectangleImage from "../../assets/course card/Rectangle 52398.svg"; // Import your image

const CoursesCard = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle card click and navigation
  const handleCardClick = () => {
    navigate('/coursedescriptions'); // Navigate to the /coursedescriptions page
  };

  return (
    <Card
      onClick={handleCardClick} // Attach the click handler to the card
      sx={{
        width: '367.09px',
        height: '300.93px',
        borderRadius: '14.52px',
        border: '0.81px solid #ccc',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer', // Change cursor to indicate clickability
        '&:hover': { boxShadow: 4 }, // Add a hover effect for better UX
      }}
    >
      {/* Image Section */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={RectangleImage}
          alt="Course Thumbnail"
          sx={{
            width: '338.05px',
            height: '157.32px',
            borderRadius: '14.52px',
            margin: '8px auto', // Center the image
            position: 'relative',
          }}
        />

        {/* Rating Box */}
        <Box
          sx={{
            position: 'absolute',
            top: '24.2px',
            left: '286.41px',
            width: '58.09px',
            height: '24.2px',
            backgroundColor: '#40A39B',
            padding: '3.23px',
            borderRadius: '6.45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3.23px',
          }}
        >
          <StarIcon sx={{ color: '#EBBE49', fontSize: '12px' }} />
          <Typography sx={{ fontSize: '12px', fontWeight: 400 ,color:"white"}}>4.0</Typography>
        </Box>
      </Box>

      {/* Course Info */}
      <Box sx={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* Course Title */}
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#000000',
            marginBottom: '8px',
            lineHeight: '1.3',
          }}
        >
          Data Science Foundations: From Basics to Insights
        </Typography>

        {/* Course Details (Level and Duration) */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <Typography
            sx={{
              fontSize: '14.52px',
              fontWeight: 400,
              color: '#737373',
            }}
          >
            <span style={{ fontWeight: 400 }}>Level:</span>{' '}
            <span style={{ color: '#000000' }}>Beginner</span>
          </Typography>
          <Typography
            sx={{
              fontSize: '14.52px',
              fontWeight: 400,
              color: '#737373',
            }}
          >
            <span style={{ fontWeight: 400 }}>Duration:</span>{' '}
            <span style={{ color: '#000000' }}>1 hr</span>
          </Typography>
        </Box>

        {/* Course Details (Type and Price) */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              fontSize: '14.52px',
              fontWeight: 400,
              color: '#737373',
            }}
          >
            <span style={{ fontWeight: 400 }}>Type:</span>{' '}
            <span style={{ color: '#000000' }}>Online</span>
          </Typography>
          <Typography
            sx={{
              fontSize: '14.52px',
              fontWeight: 400,
              color: '#737373',
            }}
          >
            <span style={{ fontWeight: 400 }}>Price:</span>{' '}
            <span style={{ color: '#000000' }}>20 QR/hr</span>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default CoursesCard;
