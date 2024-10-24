import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PromotionalBanner from '../common comps/promotionalbanner';
import girilImage from "../../assets/schedule classes/girl.png"; // Import the image
import CheckIcon from '@mui/icons-material/Check';
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
      ml: 10,
    }}
  />
);

const StatusTutor = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const handleAccordionToggle = (index) => {
    setExpandedAccordion((prevIndex) => (prevIndex === index ? false : index));
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
          mb: 5,
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
        <Grid container spacing={2} sx={{ alignItems: 'center', marginBottom: '24px',gap:"10px" }}>
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

      {/* Members Section */}
      <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
        Members
      </Typography>

      <Grid container spacing={3}>
        {/* Member 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={girilImage}
              alt="Daniela Chikitani"
              style={{ width: '42px', height: '42px', marginRight: '16px' }}
            />
            <Box>
              <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
                Daniela Chikitani
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#737373' }}>
                Grade: Secondary (10th)
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Member 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={girilImage}
              alt="John Doe"
              style={{ width: '42px', height: '42px', marginRight: '16px' }}
            />
            <Box>
              <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
                John Doe
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#737373' }}>
                Grade: Secondary (10th)
              </Typography>
            </Box>
          </Box>
        </Grid>
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
            marginBottom: '12px', // gap between accordions
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
            }}
          >
            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
              Time: {item.time}
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
              Class Link: {item.link}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}



{/* Status Section */}
<Typography variant="body1" sx={{ fontWeight: 700, mb: 2, mt: 5 }}>
  Status
</Typography>

{/* Tick Circle and Text: Tutors has reached the location */}
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
  {/* Tick Circle */}
  <Box
    sx={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#40A39B', // Green background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
    }}
  >
    <CheckIcon sx={{ color: 'white', fontSize: '14px' }} /> {/* MUI Tick Icon */}
  </Box>
  {/* Text */}
  <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#000' }}>
    Tutors has reached the location
  </Typography>
</Box>

{/* Dotted Circle and Text: Tutors has started the class */}
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
  {/* Dotted Circle */}
  <Box
    sx={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '1px dashed #40A39B', // Border with dashed style
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
    }}
  />
  {/* Text */}
  <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#000' }}>
    Tutors has started the class
  </Typography>
</Box>

{/* Dotted Circle and Text: Tutors has completed the session */}
<Box sx={{ display: 'flex', alignItems: 'center',mb:10 }}>
  {/* Dotted Circle */}
  <Box
    sx={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '1px dashed #40A39B', // Border with dashed style
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '12px',
    }}
  />
  {/* Text */}
  <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#000' }}>
    Tutors has completed the session
  </Typography>
</Box>


   
    </Box>
  );
};

export default StatusTutor;
