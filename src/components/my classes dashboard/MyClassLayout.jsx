import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import PromotionalBanner from '../common comps/promotionalbanner';
import SidebarMyClasses from '../common comps/SidebarMyClasses';

const MyClassLayout = ({ children }) => {
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
        <Breadcrumbs
          separator=">"
          sx={{
            color: '#737373',
            marginBottom: '8px',
            fontSize: '13px',
            fontWeight: 400,
          }}
        >
          <Link underline="hover" color="inherit" href="/" sx={{ fontSize: '13px', fontWeight: 400 }}>
            Home
          </Link>
          <Typography color="#737373" sx={{ fontSize: '13px', fontWeight: 600, color: 'black' }}>
            Class
          </Typography>
        </Breadcrumbs>

        {/* Main Layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: '86px',
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '300px',
              },
            }}
          >
            <SidebarMyClasses />
          </Box>

          {/* Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '16px',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyClassLayout;
