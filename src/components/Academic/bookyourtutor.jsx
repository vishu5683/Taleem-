import React, { useState } from 'react';
import { Box, Typography, Button, TextField, InputAdornment, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img1 from '../../assets/bookurtutor/img1.png';
import img2 from '../../assets/bookurtutor/img2.png';
import img from '../../assets/bookurtutor/img.png';
import BookNowModal from './booknowmodal';


const BookYourTutor = () => {
  const [classType, setClassType] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [expanded, setExpanded] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true); // Function to open the modal
  const handleCloseModal = () => setIsModalOpen(false); // Function to close the modal
  const handleAccordionChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  const buttonStyle = (active, width = '110px', height = '38px', borderRadius = '54px') => ({
    width,
    height,
    backgroundColor: active ? '#40A39B' : '#FFFFFF',
    borderRadius,
    padding: '3px 16px',
    border: '1px solid #E6E6E6',
    color: active ? '#FFFFFF' : '#737373',
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stacks on smaller screens
        justifyContent: 'space-between',
        padding: '20px 70px',
        paddingBottom: '40px',
      }}
    >
      
      {/* Left Side Content */}
      <Box sx={{ width: { xs: '100%', md: '60%' }, padding: '20px  ' }}>
        {/* Breadcrumb */}
        <Typography variant="body2">
          Home &gt; Recreational &gt; Tutors Listing &gt; Tutors Details &gt; <strong>Book Tutor</strong>
        </Typography>

        {/* Title */}
        <Typography sx={{ fontWeight: 700, fontSize: '24px', mt: 2 }}>Book your Tutor</Typography>

        {/* Select Class Type */}
        <Typography sx={{ fontWeight: 500, fontSize: '20px', mt: 3 }}>Select Class Type</Typography>
        <Box sx={{ display: 'flex', gap: '12px', mt: 2 }}>
          {[{ img: img1, label: 'Online', type: 'online' }, { img: img2, label: 'Face to Face', type: 'face-to-face' }]
            .map(({ img, label, type }) => (
              <Button
                key={type}
                onClick={() => setClassType(type)}
                sx={{
                  width: '222px',
                  height: '88px',
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
                <Typography sx={{ fontWeight: 400, fontSize: '16px', color: classType === type ? '#FFFFFF' : '#737373' }}>
                  {label}
                </Typography>
              </Button>
          ))}
        </Box>

        {/* Select Session */}
        <Typography sx={{ fontWeight: 500, fontSize: '20px', mt: 3 }}>Select Session</Typography>
        <Box sx={{ display: 'flex', gap: '12px', mt: 2 }}>
          {['individual', 'group'].map((type) => (
            <Button key={type} onClick={() => setSessionType(type)} sx={buttonStyle(sessionType === type)}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </Box>

        {/* Select Package Starting Date */}
        <Typography sx={{ fontWeight: 500, fontSize: '20px', mt: 3 }}>Select Package Starting Date</Typography>
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
              style: { borderRadius: '6px', padding: '8px 12px', border: '1px solid #E6E6E6' },
            }}
            sx={{ width: '100%', height: '38px', borderRadius: '6px', border: 'none' }}
          />
        </Box>

        {/* Available Package */}
        <Typography sx={{ fontWeight: 500, fontSize: '20px', color: '#000000', mt: 7 }}>Available Package</Typography>
        <Box sx={{ display: 'flex', gap: '12px', mt: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['1-week', '2-week', 'monthly'].map((packageType, index) => (
              <Box key={packageType} sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                <Box
                  onClick={() => setSelectedPackage(packageType)}
                  sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: `1px solid ${selectedPackage === packageType ? '#40A39B' : '#6C6C6C'}`,
                    backgroundColor: selectedPackage === packageType ? '#40A39B' : '#FFFFFF',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                />
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleAccordionChange(`panel${index}`)}
                  sx={{
                    flex: 1,
                    width: '639px', // Make accordion responsive
                    borderRadius: '6px',
                    border: '1px solid transparent',
                    mb: '5px',
                  }}
                >
                  <AccordionSummary
                    expandIcon={expanded === `panel${index}` ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  >
                    <Typography sx={{ fontWeight: 500 }}>{`${packageType.replace('-', ' ')} Package`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Duration: <span style={{ color: '#000000' }}>{packageType === '1-week' ? '26 Aug - 30 Aug' : packageType === '2-week' ? '2 Sep - 16 Sep' : '1 Oct - 31 Oct'}</span>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Select Availability */}
        <Typography sx={{ fontWeight: 500, fontSize: '20px', mt: 3 }}>Select Availability</Typography>
        <Accordion sx={{ width: '100%', mt: 2 }}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography sx={{ color: "#737373", fontWeight: 400, fontSize: "16px" }}>Select Hours</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Availability details */}
          </AccordionDetails>
        </Accordion>

        {/* Instructions */}
        <Typography sx={{ fontWeight: 500, fontSize: '20px', color: '#000000', mt: 3 }}>Instructions</Typography>
        <Box
          component="input"
          sx={{
            width: '100%',
            height: '70px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #E6E6E6',
            fontWeight: 400, // Text weight
            fontSize: '18px', // Text size
            color: '#737373', // Text color
            textAlign: 'start', // Center text
           
          }}
          value="Please join your class link before the class starts."
          readOnly
        />
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
          <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Daniela Chikitani</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#737373' }}>Math’s Tutors in University</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: '12px', color: '#737373', display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ fontSize: '16px', marginRight: '4px', color: '#737373' }} /> Qatar
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#737373' }}>
            Expertise in: <span style={{ color: '#0A0A0A' }}>Math • Discrete Math • Algebra • Trigonometry</span>
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#737373' }}>
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
          <Typography sx={{ fontWeight: 400, fontSize: '18px' }}>Total Payable Amount</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>120 Riyals</Typography>
          <Button
            sx={{
              backgroundColor: '#40A39B',
              width: '100%',
              height: '48px',
              borderRadius: '8px',
              color: '#FFFFFF',
              mt: 3,
            }}
            onClick={handleOpenModal} // Open the modal when clicked
        >
            Book Now
          </Button>
        </Box>
      </Box>
      {isModalOpen && <BookNowModal onClose={handleCloseModal}>This is comp</BookNowModal>}
    </Box>

  );
};

export default BookYourTutor;
