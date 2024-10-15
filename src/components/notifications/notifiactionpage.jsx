import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';

const NotificationPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const notifications = [
    { message: "100 Riyals money added in your wallet", time: "today", type: "wallet" },
    { message: "Booking is confirmed", time: "today", type: "booking" },
    { message: "Your Class with Daniela is starting soon", time: "yesterday", type: "class" },
    { message: "100 Riyals money added in your wallet", time: "yesterday", type: "wallet" },
    { message: "New feature is added to your account", time: "today", type: "feature" },
    { message: "Don't miss the special offer!", time: "yesterday", type: "offer" }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'wallet':
        return <AccountBalanceWalletIcon style={{ fontSize: isSmallScreen ? '24px' : '32px' }} />;
      case 'booking':
        return <Typography style={{ fontSize: isSmallScreen ? '20px' : '24px', fontWeight: 'bold' }}>B</Typography>;
      case 'class':
        return <SchoolIcon style={{ fontSize: isSmallScreen ? '24px' : '32px' }} />;
      default:
        return <EventAvailableIcon style={{ fontSize: isSmallScreen ? '24px' : '32px' }} />;
    }
  };

  return (
    <div style={{ padding: '20px', marginLeft: isSmallScreen ? '10px' : '50px', marginRight: isSmallScreen ? '10px' : '50px' }}>
      <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '16px', fontSize: isSmallScreen ? '14px' : '18px' }}>
        Home &gt; Notifications
      </Typography>
      <Typography variant="h4" style={{ fontWeight: 700, fontSize: isSmallScreen ? '24px' : '32px', marginBottom: '24px' }}>
        Notifications
      </Typography>
      {notifications.map((notification, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            alignItems: 'center',
            width: isSmallScreen ? '100%' : '1140px',
            height: isSmallScreen ? 'auto' : '104px',
            borderRadius: '18px',
            border: '1px solid #E6E6E6',
            marginBottom: '16px',
            padding: isSmallScreen ? '16px' : '0 24px',
            gap: '16px',
            justifyContent: isSmallScreen ? 'center' : 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: isSmallScreen ? '48px' : '56px',
                height: isSmallScreen ? '48px' : '56px',
                backgroundColor: '#F0F0F0',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {getIcon(notification.type)}
            </div>
            <Typography style={{ fontWeight: 500, fontSize: isSmallScreen ? '18px' : '22px' }}>
              {notification.message}
            </Typography>
          </Box>
          <Typography style={{ color: '#737373', fontWeight: 400, fontSize: isSmallScreen ? '14px' : '16px', textAlign: isSmallScreen ? 'center' : 'right' }}>
            {notification.time}
          </Typography>
        </Box>
      ))}
    </div>
  );
};

export default NotificationPage;
