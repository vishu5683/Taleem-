import React, { useEffect, useRef } from 'react';
import { Box, Typography, Paper, Divider, Avatar, Button } from '@mui/material';

const NotificationPopup = React.memo(({ open, onClose }) => {
  const popupRef = useRef(null); // Create a ref to track the popup

  // Close popup on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Close the popup
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  const notifications = Array(4).fill({
    title: 'Your Class with Daniela is starting soon',
  });

  const getBallColor = (index) => (index % 2 === 0 ? '#FFC7C6' : '#C6FFC9');
  const getAvatarLetter = (index) => (index % 2 === 0 ? 'Y' : 'W');

  return (
    <Paper
      ref={popupRef} // Attach ref to the Paper component
      elevation={3}
      sx={{
        position: 'absolute',
        top: '96px',
        right: { xs: '16px', sm: '174px' }, // Responsive right position
        width: { xs: '100%', sm: '360px' }, // Full width on mobile
        backgroundColor: 'white',
        borderRadius: '8px',
        zIndex: 1000,
        overflow: 'hidden', // Prevent content overflow
      }}
    >
      {/* Notifications */}
      {notifications.map((notification, index) => (
        <Box key={index} sx={{ px: 2, py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
            {/* Circular icons with alphabet letters */}
            <Avatar
              sx={{
                bgcolor: getBallColor(index),
                width: '42px',
                height: '42px',
                mr: 2,
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              {getAvatarLetter(index)}
            </Avatar>

            {/* Notification text */}
            <Box sx={{ flexGrow: 1, position: 'relative' }}>
              <Typography variant="body1" sx={{ fontWeight: 550 }}>
                {notification.title}
              </Typography>
              {/* "Today" text aligned to bottom right */}
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  color: '#737373',
                  fontSize: '12px',
                  fontWeight: 400,
                  ml: '10px',
                }}
              >
                Today
              </Typography>
            </Box>
          </Box>

          {/* Divider line between notifications */}
          {index !== notifications.length - 1 && (
            <Divider sx={{ my: 1.5, backgroundColor: '#E6E6E6' }} />
          )}
        </Box>
      ))}

      {/* View All Notifications box */}
      <Box
        sx={{
          backgroundColor: '#F2F2F2',
          py: 1,
          textAlign: 'center',
          borderRadius: '0px 0px 14px 14px', // Rounded bottom corners
        }}
      >
        <Button variant="text" sx={{ color: '#000', fontWeight: 500 }}>
          View All Notifications
        </Button>
      </Box>
    </Paper>
  );
});

export default NotificationPopup;