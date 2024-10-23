import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import img from '../../assets/bookurtutor/img.png';
import icon1 from '../../assets/bookurtutor/icon1.png';
import icon2 from '../../assets/bookurtutor/icon2.png';
import star from '../../assets/bookurtutor/star.png';
import { useNavigate } from 'react-router-dom';

const Extandedtutorcards = () => {
  const navigate = useNavigate();  // Initialize navigate hook

  const handleNextClick = () => {
    navigate('/bookyourtutor');  
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },  // Stack vertically on mobile, row on larger screens
        padding: { xs: '12px', md: '16px' },  // Reduce padding on mobile
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
        gap: { xs: '12px', md: '16px' },  // Reduce gap on mobile
        alignItems: 'flex-start',
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', md: '337px' },  // Full width on mobile, fixed width on larger screens
          height: 'auto',  // Maintain aspect ratio
          maxHeight: '205px',  // Limit image height on larger screens
          borderRadius: '8px',
        }}
        image={img}
        alt="Tutor"
      />

      {/* Tutor Name and Description */}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: { xs: '12px', md: '16px' },  // Adjust margin for mobile
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', fontSize: { xs: '16px', md: '18px' } }}>
            Daniela Chikitani
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#40A39B',
              borderRadius: '16px',
              width: '72px',
              height: '30px',
              gap: '8px',
            }}
          >
            <img src={star} alt="Rating" style={{ width: '18px', height: '18px' }} />
            <Typography sx={{ color: '#FFF', fontSize: { xs: '14px', md: '16px' } }}>4.0</Typography>
          </Box>
        </Box>

        {/* Details Section */}
        <Box sx={{ marginBottom: { xs: '20px', md: '30px' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373', marginBottom: '8px' }}>
            <img src={icon1} alt="University" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            <Typography variant="body2" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
              English Tutor at University
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373' }}>
            <img src={icon2} alt="Location" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            <Typography variant="body2" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
              Doha, Qatar
            </Typography>
          </Box>
        </Box>

        {/* Experience, Price, and Button */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },  // Stack on mobile, row on larger screens
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: { xs: '16px', md: '0' },  // Add gap between elements on mobile
          }}
        >
          {/* Experience and Price */}
          <Box
            sx={{
              backgroundColor: '#F8F8F8',
              padding: '16px',
              borderRadius: '12px',
              display: 'flex',
              gap: { xs: '16px', md: '32px' },  // Reduce gap on mobile
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ fontSize: { xs: '14px', md: '16px', color: "#737373" } }}>
                <strong>Experience:</strong> 7 years
              </Typography>
            </Box>

            {/* Divider Line */}
            <Box sx={{ fontSize: { xs: '18px', md: '20px' }, fontWeight: 300, alignSelf: 'center' }}> | </Box>

            <Box>
              <Typography variant="body2" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                <strong>120</strong> <span style={{color:"#737373 "}}>Riyals/hr</span>
              </Typography>
            </Box>
          </Box>

          {/* Button */}
          <Button
            variant="outlined"
            onClick={handleNextClick}
            sx={{
              width: { xs: '100%', md: '214px' },  // Full width button on mobile, fixed width on larger screens
              height: '48px',
              color: '#40A39B',
              borderColor: '#40A39B',
              textTransform: 'none',
              fontWeight: 'medium',
            }}
          >
            Book Tutor
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Extandedtutorcards;
