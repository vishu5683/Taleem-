import React from "react";
import { Grid, Box, Typography, Link } from "@mui/material";
import bgimg from "../../assets/download app/Banner.png";
import playstore from "../../assets/download app/Frame 418195.png";
import AppleStore from "../../assets/download app/Frame 418196.png";

const AppDownload = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: { xs: 3, md: 4 }, // More padding for larger screens
        height: { xs: "auto", md: "500px" }, // Set a fixed height for larger screens
        display: "flex",
        alignItems: "center", // Center content vertically
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text Section (70%) */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              textAlign: { xs: "center", md: "left" },
              ml: { xs: 0, md: 6 }, // More margin to left side for larger screens
            }}
          >
            {/* 1st Text */}
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ 
                fontWeight: 700, 
                fontSize: { xs: "28px", md: "36px" }, // Larger font size for better visibility
                lineHeight: 1.2,
              }}
            >
              Unlock a world of learning with <br /> the Taleem app
            </Typography>

            {/* 2nd Text */}
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontWeight: 400,
                fontSize: { xs: "16px", md: "20px" },
                color: "#737373",
                mt: 1,
                lineHeight: 1.6,
              }}
            >
              Download now and take the next step in your educational <br />
              journey with Taleem!
            </Typography>

            {/* 3rd Text */}
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{
                mt: 3,
                fontWeight: 500,
                fontSize: { xs: "18px", md: "24px" },
              }}
            >
              Download App From
            </Typography>

            {/* Store Links */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens
                mt: 2,
              }}
            >
              <Link href="#" target="_blank">
                <Box
                  component="img"
                  src={playstore}
                  alt="Play Store"
                  sx={{
                    maxWidth: { xs: "140px", md: "200px" }, // Adjusted width for better visibility
                    height: "auto",
                    borderRadius: "16px",
                  }}
                />
              </Link>
              <Link href="#" target="_blank">
                <Box
                  component="img"
                  src={AppleStore}
                  alt="Apple Store"
                  sx={{
                    maxWidth: { xs: "140px", md: "200px" }, // Adjusted width for better visibility
                    height: "auto",
                    borderRadius: "16px",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Empty (30%) */}
        {/* We have removed the image section here */}
        <Grid item xs={12} md={5} />
      </Grid>
    </Box>
  );
};

export default AppDownload;
