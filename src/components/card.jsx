import React from 'react';
import { Box, Typography } from '@mui/material';
import pic1 from "../assets/explore/Vector (1).png";
import pic2 from "../assets/explore/Vector (2).png";
import Rating from "../assets/explore/Frame 418160.png";
import exp from "../assets/explore/Frame 418178.png";

const TutorCard = ({ imageSrc, name, subject, location }) => {
  return (
    <Box
      sx={{
        width: '367px',
        height: 'auto',
        borderRadius: '18px',
        border: '1px solid #E6E6E6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
        opacity: 1,
        overflow: 'hidden',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: 'relative',
          padding: '8px',
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          alt={name}
          sx={{
            width: '337px',
            height: '260px',
            borderRadius: '18px 0px 0px 0px',
            objectFit: 'cover',
          }}
        />

        {/* Rating Image positioned at the top-right corner */}
        <Box
          component="img"
          src={Rating}
          alt="Rating"
          sx={{
            position: 'absolute',
            top: '13px',
            right: '15px',
            width: '72px',
            height: '30px',
            borderRadius: '8px 0px 0px 0px',
            opacity: 1,
          }}
        />
      </Box>

      {/* Name */}
      <Typography
        sx={{
          fontFamily: 'Metropolis',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '28px',
          textAlign: 'left',
          margin: '16px 16px 8px',
          alignSelf: 'flex-start',
        }}
      >
        {name}
      </Typography>

      {/* Subject */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          margin: '0 16px 8px', // Adjusted for consistency
          alignSelf: 'flex-start',
        }}
      >
        <Box
          component="img"
          src={pic1}
          alt="Subject Icon"
          sx={{
            width: '18px',
            height: '16px',
          }}
        />
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '22px',
            color: '#737373',
          }}
        >
          {subject}
        </Typography>
      </Box>

      {/* Location */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          margin: '0 16px 8px', // Adjusted for consistency
          alignSelf: 'flex-start',
        }}
      >
        <Box
          component="img"
          src={pic2}
          alt="Location Icon"
          sx={{
            width: '14.19px',
            height: '17.56px',
          }}
        />
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '22px',
            color: '#737373',
          }}
        >
          {location}
        </Typography>
      </Box>

      {/* Experience Image */}
      <Box
        component="img"
        src={exp}
        alt="Experience"
        sx={{
          width: '337px',
          borderRadius: '18px',
          marginBottom: '16px', // Adds bottom margin to the experience image
          marginTop: '10px',
        }}
      />
    </Box>
  );
};

export default TutorCard;
