import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PromotionalBanner from '../common comps/promotionalbanner';

// Reusable component for class details items
const ClassDetailItem = ({ icon: Icon, label, value }) => (
  <Box display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'start' } }}>
    <Icon sx={{ color: '#EBBE49', mr: { sm: '8px' }, mb: { xs: '4px', sm: '0' } }} />
    <Typography variant="body1" sx={{ fontWeight: 400, fontSize: { xs: '12px', sm: '14px' }, color: '#737373' }}>
      {label}: {value}
    </Typography>
  </Box>
);

// Custom Divider with responsive adjustments
const CustomDivider = () => (
  <Divider
    orientation="vertical"
    sx={{
      backgroundColor: '#D9D9D9',
      width: '1px',
      height: '36px',
      mx: 5,
      ml: { xs: 0, sm: 3 },
      display: { xs: 'none', sm: 'inline-flex' },
    }}
  />
);

const ClassDetails = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(false);
  const navigate = useNavigate();

  const handleAccordionToggle = (index) => {
    setExpandedAccordion((prevIndex) => (prevIndex === index ? false : index));
  };

  const handleJoinClass = () => {
    navigate('/classeslink');
  };

  const accordionData = [
    {
      date: '29 Aug 2024',
      time: '11:30 AM - 12:30 PM',
      link: 'https://www.zoom-meet/y66834',
    },
    {
      date: '30 Aug 2024',
      time: '1:00 PM - 2:00 PM',
      link: 'https://www.zoom-meet/y66835',
    },
    {
      date: '31 Aug 2024',
      time: '10:00 AM - 11:00 AM',
      link: 'https://www.zoom-meet/y66836',
    },
  ];

  return (
    <Box sx={{ maxWidth: '1145px', margin: '20px auto', px: { xs: 2, sm: 3, md: 4 } }}>
      <PromotionalBanner
        sx={{
          width: '100%',
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: { xs: '12px', sm: '16px' },
          marginBottom: '25px',
        }}
      />

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '20px', sm: '24px' },
          marginBottom: '20px',
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        Class Details
      </Typography>

      <Box
        sx={{
          width: '100%',
          borderRadius: '12px',
          border: '1px solid #ccc',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: { xs: '16px', sm: '24px' },
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '16px', sm: '18px' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Algebra for Primary Students (Grade - 6th)
        </Typography>

        <Grid container spacing={2} sx={{ alignItems: 'center', mt: 0.1 }}>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={SchoolIcon} label="Category" value="Academic" />
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={SchoolIcon} label="Session" value="Individual" />
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={LanguageIcon} label="Language" value="English" />
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <ClassDetailItem icon={CalendarTodayIcon} label="Package Starting Date" value="08 Aug 2024" />
          </Grid>
        </Grid>
      </Box>

      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
        Instructions
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 400, mb: 2 }}>
        Please join your class link before the class starts.
      </Typography>

      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
        Package Details
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
       
          justifyContent: 'start',
          mb: 5,
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box sx={{ textAlign: 'start', mr: 3 }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Package</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>1 Week</Typography>
        </Box>
        <CustomDivider />

        <Box sx={{ textAlign: 'start', mr: 2 }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Class Type</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>Online</Typography>
        </Box>
        <CustomDivider />

        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Booking ID</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>1000546565</Typography>
        </Box>
        <CustomDivider />

        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Date</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>08 Aug 2024, 10:40 AM</Typography>
        </Box>
        <CustomDivider />

        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Payment Mode</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>Card</Typography>
        </Box>
        <CustomDivider />

        <Box sx={{ textAlign: 'start' }}>
          <Typography sx={{ color: '#737373', fontWeight: 400 }}>Status</Typography>
          <Typography sx={{ fontWeight: 500, color: '#000' }}>Completed</Typography>
        </Box>
      </Box>

      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
        Schedule
      </Typography>

      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expandedAccordion === index}
          onChange={() => handleAccordionToggle(index)}
          sx={{
            width: '100%',
            borderRadius: '6px',
            border: '1px solid #E6E6E6',
            marginBottom: '12px',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              width: '100%',
              height: '44px',
              padding: '8px 12px',
              gap: '4px',
            }}
          >
            <Typography sx={{ fontWeight: 400, fontSize: { xs: '14px', sm: '16px' }, color: '#737373' }}>
              {item.date}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              width: '100%',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
              Time: {item.time}
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
              Class Link: {item.link}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={handleJoinClass}
                sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#fff',
                  backgroundColor: '#40A39B',
                  textTransform: 'capitalize',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  '&:hover': { backgroundColor: '#359387' },
                }}
              >
                Join
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default ClassDetails;
