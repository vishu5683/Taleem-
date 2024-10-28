// ChatBox.js
import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';

import avatarImage from "../../../assets/chats/image.png";
import MyClassLayout from '../../my classes dashboard/MyClassLayout';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how are you?", sender: "Naseem" },
    { text: "I'm doing well, thank you!", sender: "You" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  return (
    <MyClassLayout>
      {/* Header */}
      <Typography sx={{ fontWeight: 600, fontSize: '16px', color: 'black', mb: 2 }}>Chats</Typography>
      
      {/* Chat Box Header */}
      <Box
        sx={{
          width: '100%',
          height: '79px',
          backgroundColor: '#C6FFC9',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <ArrowBackIcon sx={{ width: '35px', height: '25px', color: 'black' }} />
        <Avatar src={avatarImage} sx={{ width: '38px', height: '38px' }} />
        <Typography sx={{ fontWeight: 600, fontSize: '18px', color: 'black' }}>Naseem</Typography>
      </Box>
      
      {/* Chat Messages */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column-reverse', // Ensures messages start from the bottom
          gap: 2,
          overflowY: 'auto',
          padding: '16px',
          height: '60vh', // Set height to make scrollable area
          marginBottom: '16px', // Leaves space for the input box
          backgroundColor: '#F9F9F9',
          borderRadius: '12px',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              backgroundColor: message.sender === "You" ? '#C6FFC9' : '#D4EBFF',
              borderRadius: message.sender === "You" ? '12px 12px 0px 12px' : '12px 12px 12px 0px',
              padding: '6px 16px',
              maxWidth: '201px',
              alignSelf: message.sender === "You" ? 'flex-end' : 'flex-start',
            }}
          >
            {message.sender !== "You" && <Avatar src={avatarImage} sx={{ width: '24px', height: '24px' }} />}
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '14px', color: 'black' }}>
                {message.sender}
              </Typography>
              <Typography sx={{ fontSize: '14px', color: 'black' }}>
                {message.text}
              </Typography>
            </Box>
            {message.sender === "You" && <Avatar src={avatarImage} sx={{ width: '24px', height: '24px' }} />}
          </Box>
        ))}
      </Box>
      
      {/* Message Input Box */}
      <Box
        sx={{
        
          bottom: "0",
          width: '100%',
        
          height: '56px',
          backgroundColor: '#E6E6E6',
          borderRadius: '28px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '8px',
          boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
          marginTop: 'auto',
        }}
      >
        <TextField
          variant="standard"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: '14px', color: '#7D7D7D', flex: 1 },
          }}
          sx={{ bgcolor: 'transparent' }}
        />
        
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSend}
          sx={{
            bgcolor: '#40A39B',
            color: 'white',
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: 600,
            fontSize: '14px',
            marginLeft: 'auto',
            '&:hover': {
              bgcolor: '#38A094',
            },
          }}
        >
          Send
        </Button>
      </Box>
    </MyClassLayout>
  );
};

export default ChatBox;
