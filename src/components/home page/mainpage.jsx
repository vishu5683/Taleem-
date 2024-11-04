import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { useNavigate } from 'react-router-dom';
import PromotionalBanner from "../common comps/promotionalbanner";

import img1 from "../../assets/homepage/12.svg";
import img2 from "../../assets/homepage/34.svg";
import img3 from "../../assets/homepage/56.svg";
import { getProfile } from '../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

// Reusable ClassBanner Component
const ClassBanner = ({ title, grade, date, teacher, location, buttonText }) => (
  <Box
    sx={{
      backgroundColor: 'white',
      width: { xs: '100%', sm: '90%', md: '1143px' },
      borderRadius: '8px',
      border: '1px solid #ccc',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      padding: '16px',
      mb: 4,
      position: 'relative',
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
        position: { xs: 'static', md: 'absolute' },
        bottom: '16px',
        right: '16px',
        width: '100%',
        maxWidth: { md: '228px' },
      }}
    >
      {buttonText}
    </Button>
  </Box>
);

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProfileData = useSelector(
    (state) => state.getProfileReducer?.getProfileData
  );

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <Box sx={{ padding: { xs: '10px', md: '20px' } }}>
      <Box sx={{ maxWidth: '1145px', margin: '0 auto' }}>
        
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

        {/* Custom Welcome Box */}
        <Box
          sx={{
            backgroundColor: '#40A39B',
            width: { xs: '100%', md: '1145px' },
            height: { xs: 'auto', md: '100px' },
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
            padding: '16px',
            flexDirection: { xs: 'column', md: 'row' },
            position: 'relative',
            mb: 4,
          }}
        >
          {/* Left-aligned content in a column layout */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, ml: { xs: 0, md: 3 } }}>
          <Typography variant="h6" fontWeight="500" fontSize="16px" color="black">
      Hello {getProfileData?.name}
    </Typography>
            <Typography variant="body2" fontWeight="400" fontSize="12px" color="black">
              Grade Detail
            </Typography>

            {/* Grade Level Badges */}
            <Box display="flex" gap={1} mt={1}>
              {/* Primary Badge */}
              <Box
                sx={{
                  width: '72px',
                  height: '26px',
                  padding: '4px 10px',
                  borderRadius: '60px',
                  background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography fontSize="14px" fontWeight="400" color="#4E4E4E">
                  Primary
                </Typography>
              </Box>

              {/* 6th Grade Badge */}
              <Box
                sx={{
                  width: '72px',
                  height: '26px',
                  padding: '4px 10px',
                  borderRadius: '60px',
                  background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography fontSize="14px" fontWeight="400" color="#4E4E4E">
                  6th
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Edit Icon on the Right Top Corner */}
          <IconButton
            sx={{
              position: { xs: 'static', md: 'absolute' },
              top: '8px',
              right: '8px',
              color: 'black',
              alignSelf: { xs: 'flex-end', md: 'center' },
            }}
          >
            <EditIcon sx={{ width: '24px', height: '24px' }} />
          </IconButton>
        </Box>

        {/* Image Grid Section */}
        <Grid container spacing={2} sx={{ mb: 4 }} justifyContent="space-between">
  {[
    { img: img1, route: '/academic' },
    { img: img2, route: '/choosecategory' }, // Updated route for the second image
    { img: img3, route: '/coursecategory' }, // Updated route for the third image
  ].map((item, index) => (
    <Grid item xs={12} sm={4} md={4} key={index} display="flex" justifyContent="center">
      <Box
        component="img"
        src={item.img}
        alt={`Image ${index + 1}`}
        onClick={() => item.route && handleImageClick(item.route)}
        sx={{
          width: { xs: '100%', sm: '80%', md: '70%' },
          maxWidth: '250px',
          height: 'auto',
          borderRadius: '11.75px',
          cursor: 'pointer',
        }}
      />
    </Grid>
  ))}
</Grid>

<Typography
  variant="h5"
  sx={{
    fontWeight: 600,
    fontSize: '16px',
    mb: 4,
    textAlign: 'center',
  }}
>
  Ongoing Class
</Typography>
        {/* First Class Banner */}
        <ClassBanner
          title="Algebra for Primary Students"
          grade="(Grade - 4th to 6th)"
          date="10th Aug 2024, 11:30 AM"
          teacher="Daniela Chikitani"
          location="Online"
          buttonText="Join Now"
        />

        {/* Upcoming Classes Section */}
       <Typography
  variant="h5"
  sx={{
    fontWeight: 600,
    fontSize: '16px',
    mb: 4,
    textAlign: 'center',
  }}
>
  Upcoming Class
</Typography>


        {/* Second Class Banner (Reuse ClassBanner) */}
        <ClassBanner
          title="Algebra for Primary Students"
          grade="(Grade - 4th to 6th)"
          date="10th Aug 2024, 11:30 AM"
          teacher="Daniela Chikitani"
          location="Online"
          buttonText="Join Now"
        />
      </Box>
    </Box>
  );
};

export default MainPage;
