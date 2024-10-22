import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Divider } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import img from '../../assets/bookurtutor/img.png';
import PaymentModal from './paymentgatewaymodel';
import BookingSuccessful from './bookingsuccessful';


const BookYourTutorPayment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Tracks PaymentModal visibility
  const [showBookingSuccessModal, setShowBookingSuccessModal] = useState(false); // Tracks BookingSuccessful visibility
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleOpenModal = () => {
    setShowPaymentModal(true); // Show PaymentModal first
    setIsModalOpen(true); // Keep track if any modal is open

    // Automatically close PaymentModal and open BookingSuccessful modal after 3-4 seconds
    setTimeout(() => {
      setShowPaymentModal(false);
      setShowBookingSuccessModal(true);
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close all modals
    setShowPaymentModal(false);
    setShowBookingSuccessModal(false);
  };

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        padding: '20px 50px',
        paddingBottom: '40px',
      }}
    >
      {/* Left Side Content */}
      <Box sx={{ width: { xs: '100%', md: '60%' }, padding: '20px' }}>
        {/* Breadcrumb */}
        <Typography variant="body2">
          Home &gt; Recreational &gt; Tutors Listing &gt; Tutors Details &gt; <strong>Book Tutor</strong>
        </Typography>

        {/* Title */}
        <Typography sx={{ fontWeight: 700, fontSize: '24px', mt: 2 }}>Book your Tutor</Typography>

        {/* New Card Section */}
        <Box
          sx={{
            width: '667px',
            height: '156px',
            padding: '12px 16px',
            gap: '12px',
            border: '1px solid #E6E6E6',
            borderRadius: '8px',
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Package Starting Date */}
          <Typography sx={{ display: 'flex', alignItems: 'center', color: '#737373', fontWeight: 500 }}>
            <CalendarMonthIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
            Package Starting Date : <span style={{ color: '#000000', marginLeft: '4px' }}>08 Aug 2024</span>
          </Typography>

          {/* Class Mode */}
          <Typography sx={{ display: 'flex', alignItems: 'center', color: '#737373', fontWeight: 500 }}>
            <SchoolIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
            Class Mode : <span style={{ color: '#000000', marginLeft: '4px' }}>Online</span>
          </Typography>

          {/* Session */}
          <Typography sx={{ display: 'flex', alignItems: 'center', color: '#737373', fontWeight: 500 }}>
            <SchoolIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
            Session : <span style={{ color: '#000000', marginLeft: '4px' }}>Individual</span>
          </Typography>

          {/* Time */}
          <Typography sx={{ display: 'flex', alignItems: 'center', color: '#737373', fontWeight: 500 }}>
            <WatchLaterIcon sx={{ color: '#EBBE49', marginRight: '8px' }} />
            Time : <span style={{ color: '#000000', marginLeft: '4px' }}>11:30 AM - 12:30 PM</span>
          </Typography>
        </Box>

        {/* Payment Method Section */}
        <Typography sx={{ fontWeight: 600, fontSize: '20px', mt: 4 }}>Select Payment Method</Typography>

        {['Internet Banking', 'Credit/Debit Card', 'Apple Pay', 'GPay'].map((method) => (
          <Box
            key={method}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E6E6E6',
              borderRadius: '4px',
              padding: '12px',
              mt: 2,
              cursor: 'pointer',
              backgroundColor: selectedPayment === method ? '#40A39B' : 'transparent',
              color: selectedPayment === method ? '#FFFFFF' : '#000000',
            }}
            onClick={() => handlePaymentSelect(method)}
          >
            {selectedPayment === method ? (
              <CheckBoxIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
            ) : (
              <CheckBoxOutlineBlankIcon sx={{ width: '24px', height: '24px' }} />
            )}
            <Typography sx={{ marginLeft: '12px', fontWeight: 500 }}>{method}</Typography>
          </Box>
        ))}

        {/* Save Payment Method */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #E6E6E6',
            borderRadius: '4px',
            padding: '12px',
            mt: 2,
          }}
        >
          <CheckBoxOutlineBlankIcon sx={{ width: '24px', height: '24px' }} />
          <Typography sx={{ marginLeft: '12px', fontWeight: 500 }}>Save my payment method</Typography>
        </Box>

        <Divider sx={{ borderColor: '#737373', my: 3 }} />

        {/* Credit/Debit Card Inputs */}
        {selectedPayment === 'Credit/Debit Card' && (
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '18px', mb: 2 }}>Enter Card Details</Typography>

            <TextField
              label="Card Number"
              fullWidth
              sx={{ marginBottom: '12px' }}
              placeholder="0101 / 1100 / 1100 / 1234"
              InputLabelProps={{
                style: { color: '#737373' },
              }}
            />

            <TextField
              label="Card Holder Name"
              fullWidth
              sx={{ marginBottom: '12px' }}
              placeholder="Card Holder Name"
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <TextField
                label="Expiry Date (MM/YY)"
                placeholder="MM / YY"
                sx={{ width: '48%' }}
              />
              <TextField
                label="CVV"
                placeholder="CVV"
                sx={{ width: '48%' }}
              />
            </Box>
          </Box>
        )}
      </Box>

      {/* Right Side Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '35%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          mt: { xs: '30px', md: '70px' },
        }}
      >
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
            onClick={handleOpenModal}
          >
            Book Now
          </Button>
        </Box>
      </Box>

       {/* Modals */}
       {showPaymentModal && <PaymentModal isOpen={isModalOpen} onClose={handleCloseModal} />}
      {showBookingSuccessModal && <BookingSuccessful isOpen={isModalOpen} onClose={handleCloseModal} />}
    </Box>
  );
};

export default BookYourTutorPayment;
