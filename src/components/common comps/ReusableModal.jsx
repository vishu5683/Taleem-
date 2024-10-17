import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ReusableModal = ({ open, onClose, title, children, actions }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
      fullWidth // Ensures it uses the width based on the content
      maxWidth="sm" // You can adjust this to 'md' or 'lg' if needed
    >
      {/* Modal Title */}
      <DialogTitle id="modal-title">{title}</DialogTitle>
      
      {/* Modal Content */}
      <DialogContent dividers>
        {children}
      </DialogContent>

      {/* Modal Actions */}
      {actions && (
        <DialogActions>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ReusableModal;
