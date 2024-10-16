import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const LoggedInFooter = () => {
  return (
    <footer className="bg-[#40A39B] w-full h-[58px]">
      <Container maxWidth="lg" className="flex justify-between items-center h-full">
        <Typography className="text-black">
          © 2024 Taleem. All rights reserved.
        </Typography>
        <div className="flex items-center space-x-4">
          <Link href="#" underline="none" className="text-black">
            Continue as a Student
          </Link>
          <span className="text-black">|</span>
          <Link href="#" underline="none" className="text-black">
            Continue as a Parent
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default LoggedInFooter;
