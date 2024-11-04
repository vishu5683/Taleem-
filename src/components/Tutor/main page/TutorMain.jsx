import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import PromotionalBanner from '../../common comps/promotionalbanner';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import pic1 from "../../../assets/tutor main page/pic1.png";
import pic2 from "../../../assets/tutor main page/pic2.png";
import pic3 from "../../../assets/tutor main page/pic3.png";
import pic4 from "../../../assets/tutor main page/pic4.png";
import pic5 from "../../../assets/tutor main page/pic5.png";

const TabButton = ({ label, selected, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      padding: '5px 16px',
      borderRadius: '17px',
      border: '1px solid',
      borderColor: selected ? 'transparent' : '#737373',
      backgroundColor: selected ? '#40A39B' : 'white',
      color: selected ? 'black' : '#737373',
      fontWeight: 500,
      fontSize: '13px',
      textAlign: 'center',
      width: 'fit-content',
      height: 'fit-content',
    }}
  >
    {label}
  </Box>
);

const ClassBanner = ({ title, grade, date, teacher, location, buttonText }) => (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        padding: '16px',
        mb: 4,
        position: 'relative', // Ensure positioning is possible
      }}
    >
      <Box>
        <Typography variant="h6" fontSize="16px" fontWeight="500" color="black">
          {title}
        </Typography>
        <Typography variant="body2" fontSize="14px" fontWeight="400" color="black" mb={1}>
          {grade}
        </Typography>
        <Box display="flex" flexDirection="column" gap={1} mt={1} color="#737373">
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayIcon style={{ width: '11px', height: '11px' }} />
            <Typography variant="body2">{date}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <AccountCircleIcon style={{ width: '11px', height: '11px' }} />
            <Typography variant="body2">{teacher}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <SchoolIcon style={{ width: '11px', height: '11px' }} />
            <Typography variant="body2">{location}</Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#40A39B',
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: '500',
          height: '36px',
          position: { xs: 'static', md: 'absolute' }, // Static on small screens, absolute on larger ones
          bottom: '16px',
          right: '16px',
          width: '100%',
          maxWidth: { md: '228px' },
          mt: { xs: 2, md: 0 }, // Space above the button on small screens
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
  

const TutorMain = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Box sx={{ padding: { xs: "10px", md: "20px" } }}>
      <Box sx={{ maxWidth: "1145px", margin: "0 auto" }}>
        
        <PromotionalBanner
          sx={{
            width: "100%",
            backgroundColor: "#F5F5F5",
            borderRadius: "12px",
            padding: { xs: "12px", md: "16px" },
            marginBottom: { xs: "15px", md: "25px" },
          }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '80px',
            background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
            borderRadius: '9px',
            border: '1px solid',
            borderImageSource: 'linear-gradient(102.58deg, #40A39B -18.44%, #C6FFC9 100%)',
            padding: '0 16px',
            mb: 3,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}>
              Hello Tutor!
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: '12px', lineHeight: '18px', color: 'black' }}>
              Setup your rate card and schedule
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#40A39B',
              color: 'white',
              fontWeight: 500,
              fontSize: '14px',
              textTransform: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              width: '118px',
              height: '36px',
              '&:hover': {
                backgroundColor: '#36a088',
              },
            }}
          >
            Setup Now
          </Button>
        </Box>

        <Grid container spacing={2} mb={3}>
          {[pic1, pic2, pic3, pic4, pic5].map((pic, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Box
                sx={{
                  width: '100%',
                  height: '105px',
                  backgroundColor: '#C6FFC9',
                  borderRadius: '11.75px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3px',
                }}
              >
                <Box
                  component="img"
                  src={pic}
                  alt={`icon-${index + 1}`}
                  sx={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '16px',
            mb: 2,
          }}
        >
          Today Classes
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '7px',
            justifyContent: 'center',
            mb: 3,
            flexWrap: 'wrap',
          }}
        >
          {['All', 'Online', 'Face to Face', 'Group Sessions'].map((label, index) => (
            <TabButton
              key={label}
              label={label}
              selected={selectedTab === index}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </Box>

        <ClassBanner
          title="Algebra for Primary Students"
          grade="(Grade - 4th to 6th)"
          date="10th Aug 2024, 11:30 AM"
          teacher="100+ students enrolled"
          location="Online"
          buttonText="Start"
        />
      </Box>
    </Box>
  );
};

export default TutorMain;
