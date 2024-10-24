import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

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

const categories = [
  { text: 'Finance', img: financeIcon },
  { text: 'Development', img: dataIcon },
  { text: 'Marketing', img: marketingIcon },
  { text: 'Business', img: businessIcon },
  { text: 'AI', img: aiIcon },
  { text: 'Bio-Tech', img: bioIcon },
  { text: 'Product', img: productIcon },
  { text: 'UX Design', img: uiuxIcon },
  { text: 'Data Science', img: dataSciIcon },
];

const CourseCategories = () => {
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

        {/* Added heading after Promotional Banner */}
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
          Choose your Course Category
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
                  width: '370px',
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
         marginTop:"20px"
         
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
             marginRight:"75px"
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default CourseCategories;
