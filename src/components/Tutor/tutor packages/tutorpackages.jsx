import React, { useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import MyClassLayout from '../../my classes dashboard/MyClassLayout';

const TabButton = ({ label, selected, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      padding: { xs: '6px 12px', sm: '8px 20px' },
      borderRadius: '17px',
      border: '1px solid',
      borderColor: selected ? 'transparent' : '#737373',
      backgroundColor: selected ? '#40A39B' : 'white',
      color: selected ? 'black' : '#737373',
      fontWeight: 500,
      fontSize: { xs: '12px', sm: '13.5px' },
      textAlign: 'center',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </Box>
);

const TutorPackages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedPackage, setExpandedPackage] = useState(null);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const togglePackageView = (index) => {
    setExpandedPackage(expandedPackage === index ? null : index);
  };

  return (
    <MyClassLayout>
      <Box sx={{ padding: { xs: '10px', md: '15px' }, width: '100%' }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: { xs: '20px', md: '24px' } }}>Packages</Typography>
          <Button
            sx={{
              width: { xs: '100%', sm: '186px' },
              height: '44px',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: '#40A39B',
              color: 'white',
              mt: { xs: 2, sm: 0 },
              '&:hover': {
                backgroundColor: '#36a088',
              },
            }}
          >
            Add Package
          </Button>
        </Box>

        {/* Tabs */}
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            mb: 3,
            overflowX: 'auto',  // Allows horizontal scrolling on smaller screens
            flexWrap: { xs: 'nowrap', sm: 'wrap' }, // Prevents wrapping on small screens, allows wrapping on larger screens
            whiteSpace: 'nowrap', // Ensures text doesn’t wrap within each tab
          }}
        >
          {['Academic', 'Recreational', 'Courses'].map((label, index) => (
            <TabButton
              key={label}
              label={label}
              selected={selectedTab === index}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </Box>

        {/* Package Cards */}
        {[1, 2, 3].map((_, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: '100%', sm: '740px' },
              border: '1px solid #D9D9D9',
              borderRadius: '8px',
              padding: expandedPackage === idx ? '16px' : '8px 16px',
              backgroundColor: '#EBFFFC',
              mb: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>1 Week Package</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: { xs: 2, sm: 0 } }}>
                <EditIcon sx={{ cursor: 'pointer' }} onClick={() => togglePackageView(idx)} />
                {expandedPackage === idx && (
                  <KeyboardArrowUpIcon sx={{ cursor: 'pointer' }} onClick={() => togglePackageView(idx)} />
                )}
              </Box>
            </Box>

            <Typography sx={{ fontSize: '14px', color: '#737373', mt: 1 }}>
              Time: <span style={{ color: '#000' }}>10 hours</span>
            </Typography>

            {expandedPackage === idx && (
              <>
                <Divider sx={{ width: '100%', height: '1px', backgroundColor: '#D9D9D9', my: 2 }} />

                {/* Weekday Balls */}
                <Box sx={{ display: 'flex', gap: { xs: '20px', sm: '70px' }, mb: 2, overflowX: 'auto' }}>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, dayIdx) => (
                    <Box
                      key={dayIdx}
                      sx={{
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '40px',
                        backgroundColor: '#40A39B',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    >
                      {day}
                    </Box>
                  ))}
                </Box>

                {/* Hour Boxes */}
                <Box sx={{ display: 'flex', gap: { xs: '20px', sm: '60px' }, overflowX: 'auto' }}>
                  {['1 hr', '2 hr', '3 hr', '2 hr', '1 hr', '2 hr', '3 hr'].map((hour, hourIdx) => (
                    <Box
                      key={hourIdx}
                      sx={{
                        width: '39px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '17px',
                        border: '1px solid #D9D9D9',
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#737373',
                      }}
                    >
                      {hour}
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        ))}
      </Box>
    </MyClassLayout>
  );
};

export default TutorPackages;
