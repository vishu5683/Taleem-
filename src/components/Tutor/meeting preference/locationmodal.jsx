import React from 'react';
import { Box, Typography, Modal, IconButton, TextField, Button, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img1 from "../../../assets/schedule classes/Map View for nagivating.png";

const LocationModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: '900px',
          height: '544px',
          borderRadius: '28px',
          backgroundColor: '#fff',
          padding: '24px',
          position: 'relative',
          margin: 'auto',
          top: '10%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 24,
          outline: 'none',
        }}
      >
        {/* Modal Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Location Details</Typography>
          <IconButton
            onClick={onClose}
            sx={{
              width: '34px',
              height: '34px',
              backgroundColor: '#F2F2F2',
              color: '#5F6368',
              borderRadius: '50%',
              '&:hover': { backgroundColor: '#E0E0E0' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Map Image */}
        <Box
          component="img"
          src={img1}
          alt="Map View"
          sx={{
            width: '209px',
            height: '100%',
            transform: 'rotate(90deg)',
            marginTop: '16px',
            borderRadius: '8px',
          }}
        />

        {/* Address Input */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Address"
          sx={{
            width: '816px',
            height: '98px',
            marginTop: '16px',
            padding: '8px 12px',
            borderRadius: '6px',
            '& .MuiOutlinedInput-root': {
              borderColor: '#737373',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon sx={{ color: '#737373' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Save Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#40A39B',
            color: '#fff',
            width: '360px',
            height: '48px',
            marginTop: '16px',
            borderRadius: '8px',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#368f80',
            },
          }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default LocationModal;
