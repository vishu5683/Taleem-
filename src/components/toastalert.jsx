import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 3,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 5,
          borderRadius: '16px',
          textAlign: 'center',
          maxWidth: '600px',
          width: '90%',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
          Coming Soon!
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          This page is currently under development. We’re working hard to bring it to you soon!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)} // Go back to the previous page
          sx={{
            mt: 2,
            textTransform: 'none',
            padding: '10px 24px',
            fontSize: '16px',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          Go Back
        </Button>
      </Paper>
    </Box>
  );
};

export default ComingSoon;
