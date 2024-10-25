import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import PromotionalBanner from '../common comps/promotionalbanner';
import girilImage from "../../assets/schedule classes/girl.png";

// Reusable component for class details items
const ClassDetailItem = ({ icon: Icon, label, value }) => (
  <Box display="flex" alignItems="center">
    <Icon sx={{ color: '#EBBE49', marginRight: '8px' }} />
    <Typography variant="body1" sx={{ fontWeight: 400, fontSize: '12px', color: '#737373' }}>
      {label} : {value}
    </Typography>
  </Box>
);

// Reusable divider with margin-left
const CustomDivider = () => (
  <Divider
    orientation="vertical"
    sx={{
      backgroundColor: '#D9D9D9',
      width: '1px',
      height: '36px',
      mx: 1,
      ml: 6,
    }}
  />
);

const ClassDetailF2F = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleAccordionToggle = (index) => {
    setExpandedAccordion((prevIndex) => (prevIndex === index ? false : index));
  };

  const handleJoinClass = () => {
    navigate('/statustutor'); // Navigate to /statustutor on button click
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
      {/* Promotional Banner */}
      <PromotionalBanner
        sx={{
          width: '100%',
          backgroundColor: '#F5F5F5',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '25px',
        }}
      />

      {/* Class Details Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '20px', sm: '24px' },
          marginBottom: '20px',
        }}
      >
        Class Details
      </Typography>

      {/* Class Information Box */}
      <Box
        sx={{
          width: '100%',
          borderRadius: '12px',
          border: '1px solid #ccc',
          background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
          padding: { xs: '16px', sm: '24px' },
          mb:2
       
        }}
      >
        {/* Class Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Algebra for Primary Students (Grade - 6th)
        </Typography>

        {/* Class Details */}
        <Grid container spacing={2} sx={{ alignItems: 'center', gap: '10px', marginBottom: '6px' ,    mt:0.1 }}>
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

      {/* Instructions */}
      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
        Instructions
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 400, mb: 2 }}>
        Please join your class link before the class starts.
      </Typography>

      {/* Package Details */}
      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
        Package Details
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', mb: 5 }}>
        {/* Content with Divider */}
        {[
          { label: 'Package', value: '1 Week' },
          { label: 'Class Type', value: 'Online' },
          { label: 'Booking ID', value: '1000546565' },
          { label: 'Date', value: '08 Aug 2024, 10:40 AM' },
          { label: 'Payment Mode', value: 'Card' },
          { label: 'Status', value: 'Completed' },
        ].map((item, idx) => (
          <React.Fragment key={idx}>
            <Box sx={{ textAlign: 'start', mr: 3 }}>
              <Typography sx={{ color: '#737373', fontWeight: 400 }}>{item.label}</Typography>
              <Typography sx={{ fontWeight: 500, color: '#000' }}>{item.value}</Typography>
            </Box>
            {idx !== 5 && <CustomDivider />}
          </React.Fragment>
        ))}
      </Box>

      {/* Members Section */}
      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
        Members
      </Typography>

      <Grid container spacing={3}>
        {[{ name: 'Daniela Chikitani', grade: 'Secondary (10th)' }, { name: 'John Doe', grade: 'Secondary (10th)' }].map(
          (member, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={girilImage}
                  alt={member.name}
                  style={{ width: '42px', height: '42px', marginRight: '16px' }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>{member.name}</Typography>
                  <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#737373' }}>
                    Grade: {member.grade}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )
        )}
      </Grid>

      {/* Schedule */}
      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2, mt: 5 }}>
        Schedule
      </Typography>

      {/* Accordion List */}
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
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#737373' }}>
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
              position: 'relative', // For button positioning
            }}
          >
            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
              Time: {item.time}
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
              Class Link: {item.link}
            </Typography>
            <Button
              variant="contained"
              onClick={handleJoinClass}
              sx={{
                position: 'absolute',
                bottom: '8px',
                right: '8px',
                backgroundColor: '#40A39B',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#368b85',
                },
              }}
            >
              Join
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Start Class Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10, mt: 8 }}>
        <Button
          variant="contained"
          onClick={handleJoinClass}
          sx={{
            backgroundColor: '#40A39B',
            color: '#fff',
            width: { xs: '100%', sm: '319px' },
            height: '48px',
            padding: '14px 16px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#368b85',
            },
          }}
        >
          Join Class
        </Button>
      </Box>
    </Box>
  );
};

export default ClassDetailF2F;
