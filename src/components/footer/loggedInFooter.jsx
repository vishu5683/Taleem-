import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const LoggedInFooter = () => {
  return (
    <footer className="bg-[#40A39B] w-full h-[58px]">
      <Container maxWidth="lg" className="flex justify-between items-center h-full">
        <Typography 
          className="text-black" 
          sx={{  fontWeight: 550, fontSize: '15px' }}
        >
          Copyright © 2024 Taleem. All rights reserved.
        </Typography>
        <div className="flex items-center space-x-4">
          <Link 
            href="#" 
            underline="none" 
            className="text-black" 
            sx={{  fontWeight: 500, fontSize: '16px' }}
          >
            Continue as a Student
          </Link>
          <span className="text-black" style={{  fontWeight: 500, fontSize: '16px' }}>
            |
          </span>
          <Link 
            href="#" 
            underline="none" 
            className="text-black" 
            sx={{ fontWeight: 500, fontSize: '16px' }}
          >
            Continue as a Parent
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default LoggedInFooter;
