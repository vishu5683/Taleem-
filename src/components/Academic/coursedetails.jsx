import React, { useState } from 'react';
import { Box, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import PromotionalBanner from '../common comps/promotionalbanner';
import CoursesCard from '../cards/coursescard';
import FilterModal from './filter';

const CourseDetails = () => {
  // State to control the modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to handle modal open and close
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ padding: { xs: '10px', sm: '20px' } }}>
      <Box sx={{ maxWidth: '1145px', margin: '0 auto' }}>
        {/* Breadcrumbs */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '10px', sm: '12px' },
            color: '#737373',
            marginBottom: '16px',
            textAlign: 'left',
          }}
        >
          Home &gt; All Courses &gt;{' '}
          <span style={{ fontWeight: 700 }}>Course Listing</span>
        </Typography>

        {/* Promotional Banner */}
        <PromotionalBanner
          sx={{
            width: '100%',
            backgroundColor: '#F5F5F5',
            borderRadius: '12px',
            padding: { xs: '8px', sm: '16px' },
            marginBottom: '25px',
          }}
        />

        {/* Search and Filter */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          {/* Search Input */}
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
              width: '100%', // Ensure full width on mobile
              marginBottom: { xs: '10px', sm: '0px' }, // Space between search and filter on mobile
            }}
          >
            <SearchIcon sx={{ color: '#000000', marginRight: '8px' }} />
            <InputBase
              placeholder="Search courses.."
              sx={{
                width: '100%',
                fontWeight: 400,
                fontSize: '16px',
                color: '#737373',
                '&::placeholder': { color: '#737373' },
              }}
            />
          </Box>

          {/* Filter Button */}
          <Button
            onClick={handleOpenModal}
            sx={{
              width: { xs: '100%', sm: '147px' }, // Full width on mobile, fixed width on larger screens
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

        {/* Courses Section Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '18px', sm: '24px' },
            color: '#333',
            marginBottom: '20px',
            textAlign: 'left',
          }}
        >
          Courses
        </Typography>

        {/* Courses Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)', // 1 card per row on mobile
              sm: 'repeat(2, 1fr)', // 2 cards per row on tablet
              md: 'repeat(3, 1fr)', // 3 cards per row on desktop
            },
            gap: '20px', // Adjust gap between cards
          }}
        >
          {/* Course Cards */}
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </Box>
      </Box>

      {/* Filter Modal */}
      {isModalOpen && <FilterModal open={isModalOpen} handleClose={handleCloseModal} />}
    </Box>
  );
};

export default CourseDetails;
