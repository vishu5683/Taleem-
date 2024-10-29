import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';

const RateCardItem = ({ title, details, isMultiline }) => (
  <Box
    sx={{
      position: 'relative',
      width: '740px',
      height: '107px',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
      boxShadow: '3px 3px 10px #0000001A',
      mt: 3,
      p: 2,
    }}
  >
    <Typography
      variant="h6"
      fontWeight="600"
      fontSize="17px"
      dangerouslySetInnerHTML={isMultiline ? { __html: title } : { __html: title }}
    ></Typography>
    <Box display="flex" gap={3} mt={1}>
      {details.map((detail, index) => (
        <Typography key={index} variant="body1" fontWeight="400" fontSize="14px">
          <span style={{ color: '#737373' }}>{detail.label}:</span>{' '}
          <span style={{ color: '#000', fontWeight: '400' }}>{detail.value}</span>
        </Typography>
      ))}
    </Box>

    {/* Gradient Box at Top Right */}
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        right: 2,
        width: '74px',
        height: '24px',
        background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '0.875rem',
        padding: '4px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px 0px 0px 8px',
        border: '1px solid #E6E6E6',
      }}
    >
      Arabic
    </Box>
  </Box>
);

const RateCard = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => setSelectedButton(button);

  // Sample data for each rate card
  const rateCardData = [
    {
      title: "Primary Math Classes <br/>for 4th",
      details: [
        { label: 'Curriculum', value: 'Arabic' },
        { label: 'Duration', value: '1 hr' },
        { label: 'Type', value: 'Online' },
        { label: 'Price', value: '20QR/hr' },
      ],
      isMultiline: true,
    },
    {
      title: "Advanced Science Classes<br/> for 5th",
      details: [
        { label: 'Curriculum', value: 'English' },
        { label: 'Duration', value: '1.5 hr' },
        { label: 'Type', value: 'Online' },
        { label: 'Price', value: '30QR/hr' },
      ],
      isMultiline: false,
    },
    {
      title: "History Classes <br/>for 6th",
      details: [
        { label: 'Curriculum', value: 'Arabic' },
        { label: 'Duration', value: '2 hrs' },
        { label: 'Type', value: 'Offline' },
        { label: 'Price', value: '25QR/hr' },
      ],
      isMultiline: false,
    },
  ];

  return (
    <MyClassLayout>
      <Box display="flex" flexDirection="column" alignItems="center" p={3} sx={{ fontFamily: 'Arial, sans-serif' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" mb={2}>
          <Typography variant="h5" fontWeight="bold">Rate Card</Typography>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#40A39B',
              color: '#fff',
              borderRadius: "8px",
              textTransform: "none",
              padding: '10px 20px',
              '&:hover': { backgroundColor: '#35948A' },
            }}
          >
            Add Rate Card
          </Button>
        </Box>

        <Box display="flex" gap={2} mt={2} width="100%" justifyContent="start">
          {['Academic', 'Recreational', 'Courses'].map((btnText) => (
            <Button
              key={btnText}
              onClick={() => handleButtonClick(btnText)}
              variant="outlined"
              sx={{
                color: selectedButton === btnText ? '#fff' : '#737373',
                backgroundColor: selectedButton === btnText ? '#40A39B' : '#fff',
                borderColor: '#E6E6E6',
                borderRadius: "17px",
                padding: '5px 16px',
                textTransform: "none",
                '&:hover': { backgroundColor: selectedButton === btnText ? '#35948A' : '#f5f5f5' },
              }}
            >
              {btnText}
            </Button>
          ))}
        </Box>

        {/* Display each Rate Card */}
        {rateCardData.map((card, index) => (
          <RateCardItem key={index} title={card.title} details={card.details} isMultiline={card.isMultiline} />
        ))}
      </Box>
    </MyClassLayout>
  );
};

export default RateCard;
