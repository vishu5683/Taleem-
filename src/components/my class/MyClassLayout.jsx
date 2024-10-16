import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import PromotionalBanner from '../common comps/promotionalbanner';
import SidebarMyClasses from '../common comps/SidebarMyClasses';

const MyClassLayout = ({ content }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '16px',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* Promotional Banner */}
        <PromotionalBanner />

        {/* Breadcrumb */}
        <Breadcrumbs sx={{ color: '#737373', marginBottom: '16px' }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="#737373">Class</Typography>
        </Breadcrumbs>

        {/* Main Layout */}
        <Box sx={{ display: 'flex', gap: '16px' }}>
          {/* Sidebar */}
          <SidebarMyClasses />

          {/* Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            {content}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyClassLayout;
