import React from 'react';
import { Box, Grid, Typography, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import aiIcon from "../../assets/category/ai.png";
import bioIcon from "../../assets/category/bio.png";
import businessIcon from "../../assets/category/business.png";
import dataSciIcon from "../../assets/category/data sci.png";
import dataIcon from "../../assets/category/data.png";
import financeIcon from "../../assets/category/finance.png";
import marketingIcon from "../../assets/category/marketing.png";
import productIcon from "../../assets/category/prodduct.png";
import uiuxIcon from "../../assets/category/ui ux.png";
import PromotionalBanner from '../common comps/promotionalbanner';
import { useNavigate } from 'react-router-dom';
const categories = [
  { text: 'Music', img: financeIcon },
  { text: 'Arts & Craft', img: dataIcon },
  { text: 'Cooking', img: marketingIcon },
  { text: 'Photography', img: businessIcon },
  { text: 'Meditation ', img: aiIcon },
  { text: 'Poetry', img: bioIcon },
  { text: 'Painting', img: productIcon },
  { text: 'Photography', img: uiuxIcon },
  { text: 'Dance', img: dataSciIcon },
];

const Categories = () => {

  const navigate = useNavigate();


  return (
    <Box sx={{ padding: '20px', position: 'relative' }}>
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
          Home &gt; Academic &gt;{' '}
          <span style={{ fontWeight: 700 ,color:"black"}}>Choose your grade</span>
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

        {/* Search Box */}
        <TextField
          variant="outlined"
          placeholder="Search here..."
          sx={{
            width: { xs: '100%', sm: '100%', md: '1142px' }, // Responsive width: full-width on mobile, fixed width on desktop
            backgroundColor: '#F5F5F5',
            borderRadius: '6px',
            marginBottom: '25px',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'black' }} />
              </InputAdornment>
            ),
            sx: {
              padding: '8px 16px',
              gap: '8px',
            },
          }}
        />

        {/* Added heading after Search Box */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: '24px',
            color: 'black',
            marginBottom: '8px',
            textAlign: 'left',
          }}
        >
          Choose your Category
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: '18px',
            color: '#5F5F5F',
            marginBottom: '35px',
            textAlign: 'left',
          }}
        >
          From Primary to University, Tailored Tutoring for Every Stage
        </Typography>

        {/* Categories Grid */}
        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  width: '100%', // Adjusted to be responsive
                  height: 'auto',
                  backgroundColor: '#D4EBFF',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  padding: '10px',
                  gap: '10px',
                }}
              >
                <Box
                  component="img"
                  src={category.img}
                  alt={category.text}
                  sx={{
                    width: '28px',
                    height: '28px',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: '#000',
                    textAlign: 'center',
                  }}
                >
                  {category.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '8px',
          marginTop: '20px',
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: '164px',
            height: '48px',
            padding: '14px 16px',
            borderRadius: '8px',
            borderColor: '#40A39B',
            color: '#40A39B',
          }}
        >
          Cancel
        </Button>
        <Button
      variant="contained"
      sx={{
        width: '164px',
        height: '48px',
        padding: '14px 16px',
        borderRadius: '8px',
        backgroundColor: '#40A39B',
        color: '#fff',
        marginRight: '75px',
      }}
      onClick={() => navigate('/tutorlisting')}  // Navigate to Tutor Listing page
    >
      Continue
    </Button>
      </Box>
    </Box>
  );
};

export default Categories;
