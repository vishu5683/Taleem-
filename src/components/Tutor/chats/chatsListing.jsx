import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';
import avatarImage from "../../../assets/chats/image.png";

const NotificationBox = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '722px',
        height: '78px',
        padding: '20px 32px',
        gap: '16px',
        borderRadius: '20px',
      }}
    >
      <Avatar
        src={avatarImage}
        alt="avatar"
        sx={{ width: 38, height: 38 }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Naseem
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#737373' }}>
          Hello Sir, I will be reaching a little late due to traffic.
        </Typography>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ color: '#737373' }}>
        5 min ago
      </Typography>
    </Paper>
  );
};

const NotificationsPage = () => {
  return (
    <MyClassLayout>
      <Box sx={{ padding: '32px' }}>
        {/* Title */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
          Chats
        </Typography>
        
        {/* Notification Boxes */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <NotificationBox />
          <NotificationBox />
          <NotificationBox />
          <NotificationBox />
        </Box>
      </Box>
    </MyClassLayout>
  );
};

export default NotificationsPage;
