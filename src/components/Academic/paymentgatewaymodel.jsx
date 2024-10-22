import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PaymentModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Button to open modal */}
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ margin: '20px' }}
      >
        Open Payment Modal
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '407px',
            bgcolor: '#40A39B',
            borderRadius: '28px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Close Button */}
          <IconButton
            sx={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '34px',
              height: '34px',
              backgroundColor: '#F2F2F2',
              borderRadius: '17px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': { backgroundColor: '#E0E0E0' },
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ color: '#000000' }} />
          </IconButton>

          {/* Modal Content */}
          <Typography
            id="modal-title"
            sx={{
              fontWeight: 700,
              fontSize: '32px',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            Payment Gateway
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentModal;
