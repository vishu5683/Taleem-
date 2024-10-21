import React, { useState } from 'react';
import { Dialog, DialogContent, Typography, Checkbox, FormControlLabel, Divider, Button, Box } from '@mui/material';

const FilterModal = ({ open, handleClose }) => {
  const [checkedItems, setCheckedItems] = useState({
    English: false,
    Arabic: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ style: { width: 625, height: 691 } }}>
      <DialogContent sx={{ p: 0 }}>
        {/* Top section with title and button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{ backgroundColor: '#40A39B', p: 2 }}>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 500, fontSize: '20px' }}>Filters</Typography>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 500, fontSize: '20px' }}>Clear All</Typography>
        </Box>

        {/* Container for both left and right columns */}
        <Box display="flex" justifyContent="space-between">
          {/* Left side with options */}
          <Box display="flex" flexDirection="column" gap={2} alignItems="flex-start" width="45%" sx={{ borderRight: '1px solid #E6E6E6', marginLeft: '40px', marginTop: "20px" }}>
            <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Teaching Language</Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6' }} />

            <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Curriculum</Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6' }} />

            <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Subject</Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6' }} />

            <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Price</Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6' }} />

            <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Rating</Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6' }} />

            <Typography sx={{ fontWeight: 500, fontSize: '20px' }}>Gender</Typography>
            <Divider sx={{ width: '100%', backgroundColor: '#E6E6E6' }} />
          </Box>

          {/* Right side with checkboxes */}
          <Box display="flex" flexDirection="column" gap={2} alignItems="flex-start" width="45%" sx={{ p: 2, marginLeft: '16px' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.English}
                  onChange={handleCheckboxChange}
                  name="English"
                  sx={{
                    '&.Mui-checked': {
                      color: '#40A39B',
                    },
                  }}
                />
              }
              label={<Typography sx={{ fontWeight: 400, fontSize: '18px', color: '#737373' }}>English</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.Arabic}
                  onChange={handleCheckboxChange}
                  name="Arabic"
                  sx={{
                    '&.Mui-checked': {
                      color: '#40A39B',
                    },
                  }}
                />
              }
              label={<Typography sx={{ fontWeight: 400, fontSize: '18px', color: '#737373' }}>Arabic</Typography>}
            />
          </Box>
        </Box>

        {/* Apply button at the bottom-right corner */}
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button variant="contained" sx={{ backgroundColor: '#40A39B', color: '#fff', width: '263px', height: '48px', padding: '14px 16px', borderRadius: '8px' }}>
            Apply
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
