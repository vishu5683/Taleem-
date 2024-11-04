import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';
import avatarImage from "../../../assets/chats/image.png";

const NotificationBox = () => {
  const navigate = useNavigate();

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
        cursor: 'pointer', // Add cursor pointer for clickable effect
      }}
      onClick={() => navigate('/ChatBox')} // Navigate to /ChatBox on click
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

const ChatNotificationsPage = () => {
  return (
    <MyClassLayout>
      <Box sx={{ padding: '32px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
          Chats
        </Typography>
        
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

export default ChatNotificationsPage;
