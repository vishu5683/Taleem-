import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const ToastAlert = ({ open, onClose, severity = 'info', message = 'Coming Soon!' }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000} // Automatically hides after 3 seconds
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position of the toast
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastAlert;
