import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled Modal
const StyledModal = styled(Modal)({
  position: 'absolute',
  top: '167px',
  left: '467px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0, // According to your instructions
});

// Modal Content (Box)
const ModalContent = styled(Box)({
  width: '625px',
  height: '691px',
  borderRadius: '12px',
  backgroundColor: '#40A39B', // Primary/Green #40A39B
  opacity: 0.9, // Set it to visible but not fully opaque
  position: 'relative',
  padding: '20px', // Optional for spacing
});

// Filters Header and Footer Text
const FiltersHeader = styled(Typography)({
  position: 'absolute',
  top: '20px',
  left: '20px',
  fontWeight: 'bold',
  color: '#fff', // White text for contrast
});

const FiltersFooter = styled(Typography)({
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  fontWeight: 'bold',
  color: '#fff', // White text for contrast
});

const FilterModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <StyledModal open={open} onClose={handleClose}>
        <ModalContent>
          {/* Filters Text */}
          <FiltersHeader>Filters</FiltersHeader>
          {/* End Filters Text */}
          <FiltersFooter>End Filters</FiltersFooter>
        </ModalContent>
      </StyledModal>
    </div>
  );
};

export default FilterModal;
