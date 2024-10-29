import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AddNewDocument = ({ handleClose }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: 'auto',
        bgcolor: 'background.paper',
        borderRadius: '28px',
        boxShadow: 24,
        p: 4,
      }}
    >
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="700">
          Upload Documents
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
          }}
        >
          <CancelIcon />
        </IconButton>
      </Box>

      {/* Document Label */}
      <Typography variant="body1" fontWeight="500" fontSize="18px" mb={2}>
        Documents
      </Typography>

      {/* Select Document Box */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: '100%',
          height: '48px',
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #737373',
          color: '#737373',
          mb: 3,
        }}
      >
        <Typography> Select document </Typography>
        <KeyboardArrowDownIcon sx={{ color: '#737373' }} />
      </Box>

      {/* Document Upload Box */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          height: 'auto',
          border: '1px dashed #40A39B',
          borderRadius: '10px',
          m: 'auto',
          p: 2,
          mb: 3,
          color: 'grey',
        }}
      >
        <FileUploadIcon sx={{ fontSize: '48px', color: '#40A39B', mb: 1 }} />
        <Typography>or drop files to upload</Typography>
        <Typography variant="caption" color="grey">
          PDF, JPG or PNG.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            borderColor: '#40A39B',
            color: '#40A39B',
           
            
          }}
        >
          Browse
        </Button>
      </Box>

      {/* Save & Submit Button */}
      <Box display="flex" justifyContent="center">
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
        >
          Save & Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewDocument;
