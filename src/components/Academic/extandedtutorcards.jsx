import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import img from '../../assets/bookurtutor/img.png';
import icon1 from '../../assets/bookurtutor/icon1.png';
import icon2 from '../../assets/bookurtutor/icon2.png';
import star from '../../assets/bookurtutor/star.png';

const Extandedtutorcards = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: '16px',
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
        gap: '16px',
        alignItems: 'flex-start',
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        sx={{ width: '337px', height: '205px', borderRadius: '8px' }}
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
            marginBottom: '16px',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
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
            <Typography sx={{ color: '#FFF' }}>4.0</Typography>
          </Box>
        </Box>

        {/* Details Section */}
        <Box sx={{ marginBottom: '30px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373', marginBottom: '8px' }}>
            <img src={icon1} alt="University" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            <Typography variant="body2">English Tutor at University</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', color: '#737373' }}>
            <img src={icon2} alt="Location" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            <Typography variant="body2">Doha, Qatar</Typography>
          </Box>
        </Box>

        {/* Experience, Price, and Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Experience and Price */}
          <Box
  sx={{
    backgroundColor: '#F8F8F8',
    padding: '16px',
    borderRadius: '12px',
    display: 'flex',
    gap: '32px',
    alignItems: 'center', // This ensures the vertical alignment
  }}
>
  <Box>
    <Typography variant="body2">
      <strong>Experience:</strong> 7 years
    </Typography>
  </Box>
  
  {/* Divider Line */}
  <Box sx={{ fontSize: '20px', fontWeight: 300, alignSelf: 'center' }}> | </Box>
  
  <Box>
    <Typography variant="body2">
      <strong>120</strong> Riyals/hr
    </Typography>
  </Box>
</Box>


          {/* Button */}
          <Button
            variant="outlined"
            sx={{
              width: '214px',
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
