import React from 'react';
import { Box, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import PromotionalBanner from '../common comps/promotionalbanner';
import CoursesCard from '../cards/coursescard';


const coursedetails = () => {
  const handleOpenModal = () => {
    // Add modal open logic here
    console.log('Open filter modal');
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Box sx={{ maxWidth: '1145px', margin: '0 auto' }}>
        {/* Breadcrumbs */}
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
  Home &gt; All Courses &gt;{' '}
  <span style={{ fontWeight: 700 }}>Course Listing</span>
</Typography>

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

        {/* Search and Filter */}
        <Box
          sx={{
            display: 'flex',
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

        {/* Courses Section Title */}
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
          Courses
        </Typography>

        {/* Courses Grid - 3 in a Row */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
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
    </Box>
  );
};

export default coursedetails;
