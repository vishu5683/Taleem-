import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton, TextField, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School'; 
import pic1 from '../../assets/ratiingpopup/Group 418011.png';

const ReviewPopup = () => {
  const [rating, setRating] = useState(3); // Default rating is 3

  // Function to handle star click
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <Box
      sx={{
        width: '900px',
        height: 'auto',
        borderRadius: '16px',
        position: 'relative',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
                <Typography
            sx={{
              fontWeight: 700,
              fontSize: '24px',
              marginBottom: '20px',
              textAlign: 'left',
            }}
          >
            Rate your student
          </Typography>
      {/* Close Button - Positioned at the top right */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          padding: '8px',
          backgroundColor: '#F2F2F2',
          borderRadius: '50%',
        }}
        onClick={() => console.log('Close modal')}
      >
        <CloseIcon sx={{ color: 'black' }} />
      </IconButton>

      {/* Content Wrapper */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
        {/* Left Side */}
        <Box sx={{ flex: 1 }}>


          {/* Student Card */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #E6E6E6',
              backgroundColor: '#F9F9F9',
              gap: '16px',
            }}
          >
            <img
              src={pic1}
              alt="Daniela Chikitani"
              style={{
                width: '75px',
                height: '75px',
                borderRadius: '50%',
              }}
            />
            <Box sx={{ textAlign: 'left' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '20px', marginBottom: '4px' }}>
                Daniela Chikitani
              </Typography>
              <Box display="flex" alignItems="center">
                <SchoolIcon sx={{ color: '#737373', marginRight: '8px' }} />
                <Typography sx={{ fontSize: '14px', color: '#737373' }}>
                  Music Tutors in University
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            width: '2px',
            backgroundColor: '#E6E6E6',
            margin: '0 24px',
          }}
        />

        {/* Right Side */}
        <Box sx={{ flex: 1 }}>
          {/* Star Rating */}
          <Box
            sx={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                marginBottom: '16px',
              }}
            >
              Rate your student
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {[...Array(5)].map((_, index) => (
                <IconButton
                  key={index}
                  sx={{ padding: '8px' }}
                  onClick={() => handleStarClick(index)}
                >
                  <StarIcon
                    sx={{
                      fontSize: '36px',
                      color: index < rating ? '#EBBE49' : '#E0E0E0',
                      cursor: 'pointer',
                    }}
                  />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Message Box */}
          <Box
            sx={{
              width: '100%',
              marginBottom: '24px',
            }}
          >
            <TextField
              placeholder="Leave your message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: '#737373', fontSize: '14px' },
              }}
            />
          </Box>

          {/* Submit Button */}
          <Box sx={{ textAlign: 'right' }}>
            <Button
              sx={{
                backgroundColor: '#40A39B',
                color: '#fff',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#368982',
                },
              }}
            >
            End Class
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewPopup;
