import React, { useState } from 'react';
import { Box, Typography, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import PromotionalBanner from '../common comps/promotionalbanner';
import FilterModal from './filter';
import Extandedtutorcards from './extandedtutorcards';

const TutorListingExt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3); // Initially showing 3 cards

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewAll = () => {
    // Increase the number of visible cards (infinite scroll-like behavior)
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3); // Load 3 more cards on click
  };

  // Sample tutor cards data (you can replace this with your actual data)
  const tutorCards = [
    <Extandedtutorcards />,
    <Extandedtutorcards />,
    <Extandedtutorcards />,
    <Extandedtutorcards />,
    <Extandedtutorcards />,
    <Extandedtutorcards />,
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Box sx={{ maxWidth: '1145px', margin: '0 auto' }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '12px',
            color: '#737373',
            marginBottom: '16px',
            textAlign: 'left',
          }}
        >
          Home &gt; Academic &gt; Tutors Listing
        </Typography>

        <PromotionalBanner
          sx={{
            width: '100%',
            backgroundColor: '#F5F5F5',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '25px',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              height: '56px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '8px',
              border: '1px solid #E6E6E6',
            }}
          >
            <SearchIcon sx={{ color: '#000000', marginRight: '8px' }} />
            <InputBase
              placeholder="Search Tutors..."
              sx={{
                width: '100%',
                fontWeight: 400,
                fontSize: '16px',
                color: '#737373',
                '&::placeholder': { color: '#737373' },
              }}
            />
          </Box>

          <Button
            onClick={handleOpenModal}
            sx={{
              width: '147px',
              height: '56px',
              padding: '6px 10px',
              gap: '8px',
              backgroundColor: '#40A39B',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '14px',
              textTransform: 'none',
              opacity: 0.9,
              '&:hover': { backgroundColor: '#359c87' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Filter <TuneIcon sx={{ marginRight: '8px' }} />
          </Button>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '24px',
            color: '#333',
            marginBottom: '20px',
            textAlign: 'left',
          }}
        >
          Tutors
        </Typography>

        {/* Tutor Cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {tutorCards.slice(0, visibleCards)} {/* Display only visible cards */}
        </Box>

        {/* Show 'View All' button only if there are more cards to display */}
        {visibleCards < tutorCards.length && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Button
              onClick={handleViewAll}
              sx={{
                width: '272px',
                height: '48px',
                backgroundColor: '#40A39B',
                color: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #40A39B',
                textTransform: 'none',
                fontWeight: 600,
                padding: '14px 16px',
                gap: '8px',
                opacity: 1,
                '&:hover': { backgroundColor: '#40A39B' },
              }}
            >
              View All
            </Button>
          </Box>
        )}
      </Box>

      {isModalOpen && <FilterModal open={isModalOpen} handleClose={handleCloseModal} />}
    </Box>
  );
};

export default TutorListingExt;
