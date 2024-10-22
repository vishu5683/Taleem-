import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const BookNowModal = ({ onClose }) => {
  // Calendar Data
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysOfMonth = ['30', '31', '01', '02', '03', '04', '05'];
  const [selectedDayIndex, setSelectedDayIndex] = useState(4);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);

  // Time Slots
  const timeSlots = [
    { time: '09:30 AM - 10:30 AM', isBooked: false },
    { time: '10:45 AM - 11:45 AM', isBooked: false },
    { time: '12:00 PM - 1:00 PM', isBooked: true },
    { time: '1:15 PM - 2:15 PM', isBooked: false },
    { time: '2:30 PM - 3:30 PM', isBooked: true },
    { time: '3:45 PM - 4:45 PM', isBooked: false },
  ];

  // Handlers
  const handlePrev = () => setSelectedDayIndex((prev) => (prev === 0 ? daysOfMonth.length - 1 : prev - 1));
  const handleNext = () => setSelectedDayIndex((prev) => (prev === daysOfMonth.length - 1 ? 0 : prev + 1));
  const handleClose = () => onClose && onClose(); // Close the modal if the onClose prop is provided
  const navigate = useNavigate();  // Initialize navigate hook

  const handleSaveClick = () => {
    navigate('/bookyourtutorpayment');  // Navigate to the /tutorlisting route
  };

  return (
    <Box
      sx={{
        width: '900px',
        height: '494px',
        top: '287px',
        left: '270px',
        borderRadius: '28px',
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '40px',
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: 34,
          height: 34,
          borderRadius: '50%',
          backgroundColor: '#F2F2F2',
          padding: 0,
        }}
      >
        <CloseIcon sx={{ fontSize: 18, color: '#737373' }} />
      </IconButton>

      {/* Title */}
      <Typography sx={{ fontWeight: 700, fontSize: 24, textAlign: 'center', mb: 2 }}>
        Select Availability
      </Typography>

      {/* Calendar Header */}
      <Typography sx={{ fontWeight: 700, fontSize: 16, textAlign: 'center', mb: 3, color: '#40A39B' }}>
        August 2024
      </Typography>

      {/* Calendar Slider */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <IconButton onClick={handlePrev}>
          <KeyboardArrowLeftIcon sx={{ fontSize: 40, color: '#40A39B' }} />
        </IconButton>

        <Box sx={{ display: 'flex', gap: 1 }}>
          {daysOfMonth.map((day, index) => (
            <Box
              key={index}
              sx={{
                width: 41,
                height: 50,
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid',
                borderImageSource: 'linear-gradient(105.04deg, #EBBE49 -25.33%, #FFC7C6 100%)',
                background: index === selectedDayIndex
                  ? 'linear-gradient(102.58deg, #40A39B -18.44%, #C6FFC9 100%)'
                  : '#FFFFFF',
                color: index === selectedDayIndex ? '#FFFFFF' : '#737373',
                fontWeight: index === selectedDayIndex ? 600 : 400,
                cursor: 'pointer',
              }}
              onClick={() => setSelectedDayIndex(index)}
            >
              <Typography sx={{ fontSize: 10 }}>{daysOfWeek[index]}</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 700 }}>{day}</Typography>
            </Box>
          ))}
        </Box>

        <IconButton onClick={handleNext}>
          <KeyboardArrowRightIcon sx={{ fontSize: 40, color: '#40A39B' }} />
        </IconButton>
      </Box>

      {/* Available Slot Label */}
      <Typography sx={{ fontWeight: 600, fontSize: 16, mt: 2, mb: 1, textAlign: 'left', ml: 4 }}>
        Available Slot
      </Typography>

      {/* Available Slots */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, px: 4 }}>
        {timeSlots.map((slot, index) => (
          <Box
            key={index}
            sx={{
              width: 328,
              height: 50,
              borderRadius: 1,
              display: 'flex',
              justifyContent: slot.isBooked ? 'space-between' : 'flex-start',
              alignItems: 'center',
              px: 2,
              backgroundColor: selectedSlotIndex === index && !slot.isBooked ? '#40A39B' : '#FFFFFF',
              border: '1px solid #E6E6E6',
              cursor: slot.isBooked ? 'not-allowed' : 'pointer',
              gap: slot.isBooked ? 0 : 1.5,
            }}
            onClick={() => !slot.isBooked && setSelectedSlotIndex(index)}
          >
            {!slot.isBooked && selectedSlotIndex !== index && (
              <Box sx={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid #737373', opacity: 0.5 }} />
            )}

            <Typography sx={{ color: slot.isBooked ? '#737373' : '#000', fontWeight: 500 }}>
              {slot.time}
            </Typography>

            {slot.isBooked && (
              <Box
                sx={{
                  borderRadius: '17px',
                  background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
                  px: 2,
                  color: '#737373',
                }}
              >
                Booked
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Save Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          onClick={handleSaveClick} 
          sx={{
            width: 328,
            height: 44,
            borderRadius: 1,
            backgroundColor: '#40A39B',
            color: '#FFFFFF',
            fontWeight: 600,
            textTransform: 'none',
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default BookNowModal;
