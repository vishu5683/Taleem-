import React, { useState } from 'react';
import { Box, Typography, IconButton, Modal, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const DocumentModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="document-modal">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 520,
          bgcolor: 'background.paper',
          borderRadius: '18px',
          boxShadow: 24,
          p: 3,
        }}
      >
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="600">
            Documents
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              width: '34px',
              height: '34px',
              bgcolor: '#F2F2F2',
              borderRadius: '17px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 0,
            }}
          >
            <CancelIcon />
          </IconButton>
        </Box>

        {/* Document Boxes */}
        {['Address Proof', 'ID Proof'].map((label, index) => (
          <Box
            key={index}
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bgcolor="#EBFFFC"
            borderRadius="18px"
           
            p={2}
            mt={3}
          >
            {/* Content Column */}
            <Box display="flex" flexDirection="column" gap={1} mb={2}>
              {/* Label Section */}
              <Box
                sx={{
                  bgcolor: '#EBBE49',
                  borderRadius: '76px',
                  px: 2,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                   width:"142px",
                  fontWeight: '450',
                  fontSize:"14px",
                  mb:1
                }}
              >
                {label}
              </Box>

              {/* Icon and Document Name */}
              <Box display="flex" alignItems="center" gap={1}>
                <InsertPhotoIcon sx={{ color: '#737373' }} />
                <Typography color="black" fontWeight="500" fontSize="18px">
                  Documents1110.pdf
                </Typography>
              </Box>
            </Box>

            {/* More Options Icon at Bottom-Right Corner */}
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Modal>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      {/* Button to open DocumentModal */}
      <Button variant="contained" onClick={handleOpen}>
        Open Documents
      </Button>

      {/* DocumentModal component */}
      <DocumentModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default App;
