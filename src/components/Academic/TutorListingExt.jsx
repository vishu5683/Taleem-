import React, { useState } from 'react';
import { Box, Typography, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import PromotionalBanner from '../common comps/promotionalbanner';
import FilterModal from './filter';
import Extandedtutorcards from './extandedtutorcards';

// const  Extandedtutorcards  = () => {
//   return (
//     <Card
//       sx={{
//         width: '1140px',
//         height: '247px',
//         borderRadius: '12px',
//         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//         display: 'flex',
//         marginBottom: '20px',
//       }}
//     >
//       <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
//         <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', marginBottom: '8px' }}>
//           Tutor Name
//         </Typography>
//         <Typography variant="body2" sx={{ fontSize: '14px', color: '#737373', marginBottom: '16px' }}>
//           Tutor Description or Specialization
//         </Typography>
//         <Button
//           sx={{
//             width: '147px',
//             height: '40px',
//             backgroundColor: '#40A39B',
//             color: '#FFFFFF',
//             borderRadius: '8px',
//             textTransform: 'none',
//             fontWeight: 600,
//             '&:hover': { backgroundColor: '#359c87' },
//           }}
//         >
//           Contact Tutor
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

const TutorListingExt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <Extandedtutorcards />
          <Extandedtutorcards />
          <Extandedtutorcards />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <Button
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
      </Box>

      {isModalOpen && <FilterModal open={isModalOpen} handleClose={handleCloseModal} />}
    </Box>
  );
};

export default TutorListingExt;
