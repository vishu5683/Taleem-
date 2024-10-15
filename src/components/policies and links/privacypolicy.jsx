import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ padding: { xs: '16px', sm: '24px', md: '48px', lg: '64px' } }}>
      {/* Title */}
      <Typography
        sx={{
          fontSize: '32px',
          color: '#40A39B',
          fontWeight: 700,
          mb: 2,
        }}
      >
        Privacy Policy
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

      {/* Privacy Introduction */}
      <Typography
        sx={{
          fontSize: '18px',
          color: '#737373',
          textAlign: 'left',
          mb: 4,
          lineHeight: 1.5,
        }}
      >
        At Taleem, we are committed to protecting your privacy and ensuring the security of your personal <br/>information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our <br/>website and services.
      </Typography>

      {/* Information We Collect */}
      <Typography
        sx={{
          fontSize: '22px',
          color: '#EBBE49',
          fontWeight: 500,
          textAlign: 'left',
          mb: 2,
        }}
      >
        Information We Collect
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
        The types of information we may collect include:
      </Typography>

      {/* Custom Bullet Points */}
      <ul style={{ marginLeft: '16px', color: '#737373', lineHeight: 1.6, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '16px', listStyleType: 'none', position: 'relative' }}>
          <span style={{ 
            position: 'absolute', 
            left: '-20px', 
            top: '6px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: 'black', 
            borderRadius: '50%' 
          }}></span>
          <span style={{ fontWeight: 500, color: 'black', fontSize: '18px' }}>
            Personal Information:
          </span>
          <span style={{ fontWeight: 400, color: '#737373', fontSize: '18px' }}>
            When you register on Taleem, we may collect personal details such as your name, email address, phone number, and payment information.
          </span>
        </li>
        <li style={{ marginBottom: '16px', listStyleType: 'none', position: 'relative' }}>
          <span style={{ 
            position: 'absolute', 
            left: '-20px', 
            top: '6px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: 'black', 
            borderRadius: '50%' 
          }}></span>
          <span style={{ fontWeight: 500, color: 'black', fontSize: '18px' }}>
            Usage Data:
          </span>
          <span style={{ fontWeight: 400, color: '#737373', fontSize: '18px' }}>
            We collect information about how you use our website, including your IP address, browser type, and pages visited.
          </span>
        </li>
        <li style={{ marginBottom: '16px', listStyleType: 'none', position: 'relative' }}>
          <span style={{ 
            position: 'absolute', 
            left: '-20px', 
            top: '6px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: 'black', 
            borderRadius: '50%' 
          }}></span>
          <span style={{ fontWeight: 500, color: 'black', fontSize: '18px' }}>
            Cookies and Tracking Technologies:
          </span>
          <span style={{ fontWeight: 400, color: '#737373', fontSize: '18px' }}>
            We use cookies and similar technologies to enhance your experience, track user activity, and gather information about site usage.
          </span>
        </li>
      </ul>

      {/* How We Use Your Information */}
      <Typography
        sx={{
          fontSize: '22px',
          color: '#EBBE49',
          fontWeight: 500,
          textAlign: 'left',
          mt: 4,
          mb: 2,
        }}
      >
        How We Use Your Information
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
        The information we collect is used for the following purposes:
      </Typography>

      {/* Custom Bullet Points for "How We Use Your Information" */}
      <ul style={{ marginLeft: '16px', color: '#737373', lineHeight: 1.6, paddingLeft: '24px' }}>
        <li style={{ marginBottom: '16px', listStyleType: 'none', position: 'relative' }}>
          <span style={{ 
            position: 'absolute', 
            left: '-20px', 
            top: '6px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: 'black', 
            borderRadius: '50%' 
          }}></span>
          <span style={{ fontWeight: 500, color: 'black', fontSize: '18px' }}>
            To Provide and Improve Our Services:
          </span>
          <span style={{ fontWeight: 400, color: '#737373', fontSize: '18px' }}>
            We use your data to deliver and enhance the Taleem platform, personalize your experience, and improve our offerings.
          </span>
        </li>
        <li style={{ marginBottom: '16px', listStyleType: 'none', position: 'relative' }}>
          <span style={{ 
            position: 'absolute', 
            left: '-20px', 
            top: '6px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: 'black', 
            borderRadius: '50%' 
          }}></span>
          <span style={{ fontWeight: 500, color: 'black', fontSize: '18px' }}>
            To Communicate with You:
          </span>
          <span style={{ fontWeight: 400, color: '#737373', fontSize: '18px' }}>
            We may send you emails or notifications regarding your account, service updates, or promotional offers. You can opt-out of marketing communications at any time.
          </span>
        </li>
        <li style={{ marginBottom: '16px', listStyleType: 'none', position: 'relative' }}>
          <span style={{ 
            position: 'absolute', 
            left: '-20px', 
            top: '6px', 
            width: '8px', 
            height: '8px', 
            backgroundColor: 'black', 
            borderRadius: '50%' 
          }}></span>
          <span style={{ fontWeight: 500, color: 'black', fontSize: '18px' }}>
            To Ensure Security:
          </span>
          <span style={{ fontWeight: 400, color: '#737373', fontSize: '18px' }}>
            We may use your data to detect and prevent fraud, unauthorized activities, and other security issues.
          </span>
        </li>
      </ul>

      {/* Data Security */}
      <Typography
        sx={{
          fontSize: '22px',
          color: '#EBBE49',
          fontWeight: 500,
          textAlign: 'left',
          mt: 4,
          mb: 2,
        }}
      >
        Data Security
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
        We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
