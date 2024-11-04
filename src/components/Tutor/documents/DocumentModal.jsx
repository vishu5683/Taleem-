import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Modal, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddNewDocument from './AddNewDocument';

const DocumentModal = ({ open, handleClose, handleAddNew }) => {
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
            mb={5}
          >
            <Box display="flex" flexDirection="column" gap={1} mb={1}>
              <Box
                sx={{
                  bgcolor: '#EBBE49',
                  borderRadius: '76px',
                  px: 2,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '142px',
                  fontWeight: '450',
                  fontSize: '14px',
                  mb: 1,
                }}
              >
                {label}
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <InsertPhotoIcon sx={{ color: '#737373' }} />
                <Typography color="black" fontWeight="500" fontSize="18px">
                  Documents1110.pdf
                </Typography>
              </Box>
            </Box>
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

        {/* Add New Documents Button */}
        <Button
          sx={{
            width: '100%',
            height: '48px',
            bgcolor: '#40A39B',
            color: 'white',
            padding: '14px 16px',
            gap: '8px',
            borderRadius: '8px',
            mt: 3,
          }}
          onClick={handleAddNew}
        >
          Add New Documents
        </Button>
      </Box>
    </Modal>
  );
};

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showAddNew, setShowAddNew] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    setShowAddNew(false);
  };

  const handleAddNew = () => {
    setShowAddNew(true);
  };

  // Trigger the modal to open based on a condition or event in the app
  useEffect(() => {
    // Example: Open modal when component mounts
    handleOpen();
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      {/* Show either DocumentModal or AddNewDocument */}
      {showAddNew ? (
        <Modal open={showAddNew} onClose={handleClose} aria-labelledby="add-document-modal">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <AddNewDocument handleClose={handleClose} />
          </Box>
        </Modal>
      ) : (
        <DocumentModal open={openModal} handleClose={handleClose} handleAddNew={handleAddNew} />
      )}
    </Box>
  );
};

export default App;
