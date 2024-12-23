import React, { useState } from 'react';
import { Box, Typography, Button, InputBase, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import PromotionalBanner from '../common comps/promotionalbanner';
import TutorCard from '../card';
import tutor1 from "../../assets/explore/Rectangle 52398 (1).svg";
import tutor2 from "../../assets/explore/Rectangle 52398 (3).svg";
import tutor3 from "../../assets/explore/Rectangle 52398.svg";
import FilterModal from './filter';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TutorListing = () => {
  const tutors = [
    { imageSrc: tutor1, name: 'Fenton Martin' },
    { imageSrc: tutor2, name: 'Cate Silva' },
    { imageSrc: tutor3, name: 'Daniela Chikitani' },
    { imageSrc: tutor1, name: 'Fenton Martin' },
    { imageSrc: tutor2, name: 'Cate Silva' },
    { imageSrc: tutor3, name: 'Daniela Chikitani' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewAll = () => {
    navigate('/tutorlistingext');
  };

  const handleCardClick = () => {
    navigate('/tutordetail');
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
          <Link to="/" style={{ textDecoration: 'none', color: '#737373' }}>
            Home
          </Link>{' '}
          &gt;{' '}
          <Link to="/academic" style={{ textDecoration: 'none', color: '#737373' }}>
            Academic
          </Link>{' '}
          &gt;{' '}
          <span style={{ fontWeight: 700, color: 'black' }}>Tutors Listing</span>
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

        <Grid container spacing={2}>
          {tutors.map((tutor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box onClick={handleCardClick} sx={{ cursor: 'pointer' }}>
                <TutorCard
                  imageSrc={tutor.imageSrc}
                  name={tutor.name}
                  subject="Maths’ Tutors in University"
                  location="Doha, Qatar"
                  sx={{
                    width: '367px',
                    height: '497px',
                    borderRadius: '18px',
                    border: '1px solid #E6E6E6',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

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
      </Box>

      <FilterModal open={isModalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default TutorListing;
