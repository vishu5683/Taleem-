import { Box, Typography } from '@mui/material';

const PromotionalBanner = () => (
  <Box
    sx={{
      background: 'linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)',
      width: '100%',
    
      height: { xs: '80px', md: '98px' }, // Adjust height for smaller screens
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: 2,
      padding: { xs: '0 16px', sm: '0 32px' },
      mx: 'auto', // Center the banner
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
      textAlign="center"
      sx={{
        fontSize: { xs: '16px', sm: '18px', md: '20px' }, // Responsive font size
      }}
    >
      Promotional Banner
    </Typography>
  </Box>
);

export default PromotionalBanner;
