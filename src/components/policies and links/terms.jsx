import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Terms = () => {
  return (
    <Box sx={{ padding: { xs: '16px', sm: '24px', md: '48px', lg: '64px' } }}>
      {/* Title */}
      <Typography
        sx={{
          fontSize: '32px',
          color: '#40A39B',
          fontWeight: 700,
        //   textAlign: 'center',
          mb: 2,
        }}
      >
        Terms of Services
      </Typography>

      {/* Last Updated */}
      <Typography
        sx={{
          fontSize: '20px',
          color: '#737373',
          fontWeight: 400,
       
          mb: 4,
        }}
      >
        Last updated: August 15, 2024
      </Typography>

      {/* Divider */}
      <Divider
        sx={{
          backgroundColor: '#EBBE49',
          height: '1px',
          width: '100%',
       
          margin: '0 auto 32px auto',
        }}
      />

      {/* Welcome Message */}
      <Typography
        sx={{
          fontSize: '18px',
          color: '#737373',
          textAlign: 'left',
          mb: 4,
          lineHeight: 1.5,
        }}
      >
        Welcome to Taleem! <br/>By accessing or using our website and services, you agree to comply with and be bound by the following <br/>Terms of Service. Please read them carefully.
      </Typography>

      {/* Acceptance of Terms */}
      <Typography
        sx={{
          fontSize: '22px',
          color: '#EBBE49',
          fontWeight: 500,
          textAlign: 'left',
          mb: 2,
        }}
      >
        Acceptance of Terms
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          color: '#737373',
          textAlign: 'left',
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        By using the Taleem platform, you acknowledge that you have read, understood, and agree to these Terms of Service. If you do not agree to these terms, please do not use our services.
      </Typography>

      {/* Use of the Platform */}
      <Typography
        sx={{
          fontSize: '22px',
          color: '#EBBE49',
          fontWeight: 500,
          textAlign: 'left',
          mb: 2,
        }}
      >
        Use of the Platform
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          color: '#737373',
          textAlign: 'left',
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        Our services are intended for individuals who are at least 18 years old or have parental consent if younger. By using Taleem, you confirm that you meet this eligibility requirement. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree not to use the Taleem platform for any unlawful activities, to violate any third-party rights, or to distribute harmful or inappropriate content.
      </Typography>

      {/* Content and Intellectual Property */}
      <Typography
        sx={{
          fontSize: '22px',
          color: '#EBBE49',
          fontWeight: 500,
          textAlign: 'left',
          mb: 2,
        }}
      >
        Content and Intellectual Property
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          color: '#737373',
          textAlign: 'left',
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        All content provided on Taleem, including text, graphics, logos, and software, is the property of Taleem or its content suppliers and is protected by intellectual property laws. By submitting content to Taleem (e.g., comments, reviews, resources), you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and distribute your content.
      </Typography>
    </Box>
  );
};

export default Terms;
