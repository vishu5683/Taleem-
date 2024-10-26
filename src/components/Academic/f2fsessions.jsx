import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img1 from '../../assets/bookurtutor/img1.png';
import img2 from '../../assets/bookurtutor/img2.png';
import img from '../../assets/bookurtutor/img.png';
import BookNowModal from './booknowmodal';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import pic1 from '../../assets/bookurtutor/pic1.png';
import pic2 from '../../assets/bookurtutor/pic2.png';

const F2fsessions = () => {
  
  const [sessionType, setSessionType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [classType, setClassType] = useState('face-to-face'); 
  const handleOpenModal = () => setIsModalOpen(true); // Function to open the modal
  const handleCloseModal = () => setIsModalOpen(false); // Function to close the modal
  const handleAccordionChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  const buttonStyle = (active, width = '110px', height = '38px', borderRadius = '54px') => ({
    width,                      // Fixed width: 110px by default
    height,                     // Default height: 38px
    backgroundColor: active ? '#40A39B' : '#FFFFFF',
    borderRadius,               // Border radius: 54px by default
    padding: '3px 16px',
    border: '1px solid #E6E6E6',
    color: active ? '#FFFFFF' : '#737373',
    fontSize: '14px',
    textTransform: 'none',      // No text transformation
  });
  
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        padding: { xs: '20px', md: '20px 70px' },
        paddingBottom: '40px',
      }}
    >
      {/* Left Side Content */}
      <Box sx={{ width: { xs: '100%', md: '60%' }, padding: { xs: '10px', md: '20px' } }}>
        {/* Breadcrumb */}
        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: '12px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#737373' }}>
        Home
      </Link>{' '}
      &gt;{' '}
      <Link to="/recreational" style={{ textDecoration: 'none', color: '#737373' }}>
        Recreational
      </Link>{' '}
      &gt;{' '}
      <Link to="/tutors-listing" style={{ textDecoration: 'none', color: '#737373' }}>
        Tutors Listing
      </Link>{' '}
      &gt;{' '}
      <Link to="/tutors-details" style={{ textDecoration: 'none', color: '#737373' }}>
        Tutors Details
      </Link>{' '}
      &gt; <strong>Book Tutor</strong>
    </Typography>
        {/* Title */}
        <Typography sx={{ fontWeight: 700, fontSize: { xs: '20px', md: '24px' }, mt: 2 }}>Book your Tutor</Typography>

        {/* Select Class Type */}
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '18px', md: '20px' }, mt: 3 }}>Select Class Type</Typography>
        <Box sx={{ display: 'flex', gap: '12px', mt: 2, flexWrap: 'wrap' }}>
      {[{ img: img1, label: 'Online', type: 'online' }, { img: img2, label: 'Face to Face', type: 'face-to-face' }]
        .map(({ img, label, type }) => (
          <Button
            key={type}
            onClick={() => {
              setClassType(type);
              if (type === 'face-to-face') {
                navigate('/facetofaceSessions');
              } else if (type === 'online') {
                navigate('/bookyourtutor');
              }
            }}
            sx={{
              width: { xs: '45%', md: '222px' },
              height: { xs: '70px', md: '88px' },
              backgroundColor: classType === type ? '#40A39B' : '#FFFFFF',
              borderRadius: '6px',
              padding: '10px 16px',
              border: '1px solid #E6E6E6',
              display: 'flex',
              alignItems: 'start',
              flexDirection: 'column',
            }}
          >
            <img src={img} alt={label} style={{ width: '40px', height: '40px', marginRight: '8px' }} />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: '14px', md: '16px' },
                color: classType === type ? '#FFFFFF' : '#737373',
                textTransform: 'none', // Ensure no text transformation
              }}
            >
              {label}
            </Typography>
          </Button>
        ))}
    </Box>

        {/* Select Session */}
        <Typography sx={{ fontWeight: 500, fontSize: '20px', mt: 3 }}>Select Session</Typography>
        <Box sx={{ display: 'flex', gap: '12px', mt: 2 }}>
      {['Individual', 'Group'].map((type) => (
        <Button key={type} onClick={() => setSessionType(type)} sx={buttonStyle(sessionType === type)}>
          {type} {/* Text remains unchanged without transformation */}
        </Button>
      ))}
    </Box>

        {/* Select Package Starting Date */}
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '18px', md: '20px' }, mt: 3 }}>Select Package Starting Date</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
  <TextField
    fullWidth
    placeholder="08 / 08 / 2024"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <CalendarMonthIcon sx={{ width: '22.67px', height: '25.49px' }} />
        </InputAdornment>
      ),
      style: { borderRadius: '6px', padding: '4px 12px', border: '1px solid #E6E6E6' },
    }}
    inputProps={{
      style: { fontSize: '16px', fontWeight: 400 }  // Placeholder font size and weight
    }}
    sx={{
      width: '688px',             // Fixed width
      height: '48px',             // Fixed height
      borderRadius: '6px',        // Border radius
      border: '1px  #E6E6E6' // Border
    }}
  />
</Box>

 {/* Available Package */}
<Typography sx={{ fontWeight: 500, fontSize: { xs: '18px', md: '20px' }, color: '#000000', mt: 5 }}>
  Available Package
</Typography>
<Box sx={{ display: 'flex', gap: '12px', mt: 2, alignItems: 'center' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
    {['1-week', '2-week', 'monthly'].map((packageType, index) => (
      <Box key={packageType} sx={{ display: 'flex', alignItems: 'center', mb: '10px', width: '100%' }}>
        {/* Selection Circle */}
        <Box
  onClick={() => setSelectedPackage(packageType)}
  sx={{
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: `1px solid ${selectedPackage === packageType ? '#6C6C6C' : '#40A39B'}`,
    backgroundColor: '#FFFFFF', // White layer as background for unselected
    cursor: 'pointer',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {selectedPackage === packageType && (
    <Box
      sx={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF', // White inner layer
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#40A39B', // Green center circle
        }}
      />
    </Box>
  )}
</Box>


        
        {/* Accordion Component */}
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleAccordionChange(`panel${index}`)}
          sx={{
            flex: 1,
            width: '100%',
            borderRadius: '6px',
            border: '1px solid transparent',
            mb: '5px',
          }}
        >
          <AccordionSummary
            expandIcon={expanded === `panel${index}` ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            sx={{
              '& .MuiTypography-root': {
                fontWeight: expanded === `panel${index}` ? 500 : 400,
                fontSize: '14px',
                color: expanded === `panel${index}` ? '#000000' : '#737373',
              }
            }}
          >
            <Typography>{`${packageType.replace('-', ' ')} Package`}</Typography>
          </AccordionSummary>

          {/* Accordion Details */}
          <AccordionDetails>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#737373' }}>
              Duration: <span style={{ color: '#000000' }}>
                {packageType === '1-week' ? '26 Aug - 30 Aug' : packageType === '2-week' ? '2 Sep - 16 Sep' : '1 Oct - 31 Oct'}
              </span>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    ))}

  </Box>
</Box>


        {/* Select Availability */}
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '18px', md: '20px' }, mt: 3 }}>Select Availability</Typography>
        <Accordion sx={{ width: '100%', mt: 2 }}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography sx={{ color: '#737373', fontWeight: 400, fontSize: { xs: '14px', md: '16px' } }}>Select Hours</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Availability details */}
          </AccordionDetails>
        </Accordion>

        {/* Meeting Points */}
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '18px', md: '20px' }, mt: 3 }}>Select Availability</Typography>
        <Box sx={{ display: 'flex', gap: '12px', mt: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box
            onClick={() => setClassType('your-meeting-point')}
            sx={{
              width: { xs: '100%', md: '340px' },
              height: '78px',
              padding: '8px 12px',
              gap: '4px',
              borderRadius: '6px',
              backgroundColor: classType === 'your-meeting-point' ? '#40A39B' : '#FFFFFF',
              border: '1px solid #E6E6E6',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
            }}
          >
            <img src={pic1} alt="pic1" style={{ width: '40px', height: '40px' }} />
            <Typography sx={{ color: classType === 'your-meeting-point' ? '#FFFFFF' : '#737373', fontWeight: 500 }}>
              Your Meeting Point
            </Typography>
          </Box>

          <Box
            onClick={() => setClassType('tutor-meeting-point')}
            sx={{
              width: { xs: '100%', md: '340px' },
              height: '78px',
              padding: '8px 12px',
              gap: '4px',
              borderRadius: '6px',
              backgroundColor: classType === 'tutor-meeting-point' ? '#40A39B' : '#FFFFFF',
              border: '1px solid #E6E6E6',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
            }}
          >
            <img src={pic2} alt="pic2" style={{ width: '40px', height: '40px' }} />
            <Typography sx={{ color: classType === 'tutor-meeting-point' ? '#FFFFFF' : '#737373', fontWeight: 500 }}>
              Tutor Meeting Point
            </Typography>
          </Box>
        </Box>

        {/* Address Input */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, gap: '12px', flexDirection: { xs: 'column', md: 'row' } }}>
          <TextField
            placeholder="Address"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: '#40A39B' }} />
                </InputAdornment>
              ),
              style: { borderRadius: '6px', border: '1px solid #E6E6E6' },
            }}
            sx={{ height: '44px', mb: { xs: '10px', md: '0px' } }}
          />
          <Button
            sx={{
              width: { xs: '100%', md: '60%' },
              height: '44px',
              backgroundColor: '#FFFFFF',
              borderRadius: '52px',
              border: '1px solid #E6E6E6',
              display: 'flex',
              justifyContent: 'center',
              color: '#40A39B',
            }}
          >
            Use Current Location
            <MyLocationIcon sx={{ marginLeft: '5px', color: '#40A39B' }} />
          </Button>
        </Box>

        {/* Instructions */}
        <Typography sx={{ fontWeight: 500, fontSize: { xs: '18px', md: '20px' }, color: '#000000', mt: 3 }}>
          Instructions
        </Typography>
        <Box
  sx={{
    width: '100%',
    height: '70px',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #E6E6E6',
    fontWeight: 400,
    fontSize: '18px',
    color: '#737373',
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#FfFfFf', // Optional background color to look like input
  }}
>
  <Typography sx={{ color: '#737373' }}>
    Please join your class link before the class starts.
  </Typography>
</Box>
</Box>

      {/* Right Side Content */}
      <Box sx={{ width: { xs: '100%', md: '35%' }, display: 'flex', flexDirection: 'column', gap: '16px', mt: { xs: '30px', md: '70px' } }}>
        <Box
          sx={{
            width: '100%',
            height: '250px',
            background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
            borderRadius: '8px',
            border: '1px solid #E6E6E6',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
          }}
        >
          <img src={img} alt="Tutor" style={{ width: '75px', height: '75px' }} />
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '14px', md: '16px' } }}>Daniela Chikitani</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', md: '14px' }, color: '#737373' }}>
            Math’s Tutors in University
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', md: '14px' }, color: '#737373', display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ fontSize: '16px', marginRight: '4px', color: '#737373' }} /> Qatar
          </Typography>
          <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, color: '#737373' }}>
            Expertise in: <span style={{ color: '#0A0A0A' }}>Math • Discrete Math • Algebra • Trigonometry</span>
          </Typography>
          <Typography sx={{ fontSize: { xs: '12px', md: '14px' }, color: '#737373' }}>
            Experience: <span style={{ color: '#0A0A0A', fontWeight: 600, fontSize: '14px' }}>19</span> years
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: '195px',
            borderRadius: '8px',
            border: '1px solid #E6E6E6',
            textAlign: 'center',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: { xs: '16px', md: '18px' } }}>Total Payable Amount</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '18px', md: '20px' } }}>120 Riyals</Typography>
          <Button
            sx={{
              backgroundColor: '#40A39B',
              width: '100%',
              height: '48px',
              borderRadius: '8px',
              color: '#FFFFFF',
              mt: 3,
            }}
            onClick={handleOpenModal}
          >
            Book Now
          </Button>
        </Box>
      </Box>

      {isModalOpen && <BookNowModal onClose={handleCloseModal}>This is comp</BookNowModal>}
    </Box>
  );
};

export default F2fsessions;
