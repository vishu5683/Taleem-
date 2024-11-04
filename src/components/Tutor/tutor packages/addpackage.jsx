import React, { useState } from 'react';
import { Box, Typography, TextField, InputAdornment, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';

const TabButton = ({ label, selected, onClick }) => (
<Box
  onClick={onClick}
  sx={{
    cursor: 'pointer',
    padding: '8px 20px', // Adjusted padding for better spacing
    borderRadius: '17px',
    border: '1px solid',
    borderColor: selected ? 'transparent' : '#737373',
    backgroundColor: selected ? '#40A39B' : 'white',
    color: selected ? 'black' : '#737373',
    fontWeight: 500,
    fontSize: '13.5px',
    textAlign: 'center',
  }}
>
  {label}
</Box>

);

const InputField = ({ label, placeholder, showArrow = false, icon }) => (
  <Box sx={{ marginBottom: '16px' }}>
    <Typography sx={{ fontWeight: 550, fontSize: '14px', marginBottom: '4px', marginLeft: '2px' ,color: "black"}}>
      {label}
    </Typography>
    <TextField
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      sx={{
        backgroundColor: '#EBFFFC',
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          '& fieldset': {
            borderColor: '#B0B0B0', // Default border color
          },
          '&:hover fieldset': {
            borderColor: '#40A39B', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#40A39B', // Border color when focused
          },
        },
        '& .MuiOutlinedInput-input': {
          padding: '10px 12px', // Set consistent padding for input text
        },
      }}
      InputProps={{
        startAdornment: icon && (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
        endAdornment: showArrow ? (
          <InputAdornment position="end">
            <KeyboardArrowDownIcon />
          </InputAdornment>
        ) : null,
      }}
      inputProps={{ style: { fontWeight: 400, fontSize: '14px' } }}
    />
  </Box>
);

const AddPackage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <MyClassLayout>
      <Box sx={{ padding: '24px' }}>
        {/* Header */}
        <Typography sx={{ fontWeight: 600, fontSize: '24px', marginBottom: '16px' }}>
          Add Package
        </Typography>

        {/* Tabs */}
        <Box sx={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          {['Academic', 'Recreational', 'Courses'].map((label, index) => (
            <TabButton
              key={label}
              label={label}
              selected={selectedTab === index}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </Box>

        {/* Input Fields */}
        <InputField label="Package Title" placeholder="Add package title" />
        <InputField label="Package Type" placeholder="1 Week" showArrow={true} />
        <InputField 
          label="Min hours" 
          placeholder="03 hours" 
          icon={<WatchLaterIcon sx={{ color: '#737373' }} />} 
        />
        <InputField 
          label="Max hours" 
          placeholder="52 hours" 
          icon={<WatchLaterIcon sx={{ color: '#737373' }} />} 
        />
        <InputField label="Link to Module" placeholder="Academic Courses" showArrow={true} />
        <InputField label="" placeholder="Secondary" showArrow={true} />

        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
          <Button
            sx={{
              width: '186px',
              height: '44px',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #40A39B',
              color: '#40A39B',
              backgroundColor: 'white',
              marginRight: '8px',
              '&:hover': {
                backgroundColor: '#f2f2f2',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: '186px',
              height: '44px',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: '#40A39B',
              color: 'white',
              '&:hover': {
                backgroundColor: '#36a088',
              },
            }}
          >
            Add Package
          </Button>
        </Box>
      </Box>
    </MyClassLayout>
  );
};

export default AddPackage;
