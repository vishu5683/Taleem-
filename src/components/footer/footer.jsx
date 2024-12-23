import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Use RouterLink from react-router-dom for navigation
import footerLogo from "../../assets/footer/Taleem Logo.png";
import linkedinIcon from "../../assets/footer/linkedin.png";
import xIcon from "../../assets/footer/x.png";
import whatsappIcon from "../../assets/footer/whatsapp.png";
import fbIcon from "../../assets/footer/fb.png";
import copyrightIcon from "../../assets/footer/c - white logo 3.png";
import SignUp from "../login screens/SignUp";
import LoginWithStudent from "../login screens/LoginWithStudent";

const Footer = () => {
  const [data, setData] = useState();
  const [isStudent, setStudent] = useState(1);
  const [anchorElPrices, setAnchorElPrices] = useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [tutorsInfoOpen, setTutorsInfoOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#40A39B",
        color: "#FFFFFF",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: "32px", md: "0" },
          padding: { xs: "16px 20px", md: "24px 40px" }, // Adjust padding based on screen size
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "45%" }, // Responsive width
            marginRight: { xs: "0", md: "80px" }, // Adjust gap between left and center sections
          }}
        >
          <Box
            component="img"
            src={footerLogo}
            alt="Taleem Logo"
            sx={{
              width: { xs: "150px", md: "196px" }, // Responsive logo size
              height: { xs: "60px", md: "80px" }, // Responsive height for smaller devices
              marginBottom: "17px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "12px", md: "18px" },
              lineHeight: "23px",
              fontFamily: "Metropolis",
            }}
          >
            Welcome to Taleem, where education meets innovation. At Taleem,{" "}
            <br />
            we believe in the power of learning to transform lives.
          </Typography>
          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: "12px", marginTop: "20px" ,cursor:"pointer",}}>
            <Box
              component="img"
              src={linkedinIcon}
              alt="LinkedIn"
              sx={{ width: "40px", height: "40px" }}
              onClick={()=>alert("Comming Soon")}
            />
            <Box
              component="img"
              src={xIcon}
              alt="X"
              sx={{ width: "40px", height: "40px" }}
              onClick={()=>alert("Comming Soon")}
            />
            <Box
              component="img"
              src={whatsappIcon}
              alt="WhatsApp"
              sx={{ width: "40px", height: "40px" }}
              onClick={()=>alert("Comming Soon")}
            />
            <Box
              component="img"
              src={fbIcon}
              alt="Facebook"
              sx={{ width: "40px", height: "40px" }}
              onClick={()=>alert("Comming Soon")}
            />
          </Box>
        </Box>

        {/* Center Section - Quick Links */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 550,
              marginBottom: "10px",
              lineHeight: "20px",
              fontSize: { xs: "14px", md: "16px" }, // Responsive font size
            }}
          >
            Quick Links
          </Typography>
          {["My Classes", "Academic", "Recreational", "Up Coming Class"].map(
            (text) => (
              <Link
                key={text}
                // component={RouterLink} // Use RouterLink for navigation
                // to={`/${text.replace(/\s+/g, "").toLowerCase()}`} // Dynamic route based on text
                underline="none"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 400,
                  lineHeight: "20px",
                  fontSize: { xs: "14px", md: "16px" }, // Responsive font size
                  cursor:"pointer",
                }}
                onClick={() => {
                  setOpen(true);
                  setStudent(1);
                }}
              >
                {text}
              </Link>
            )
          )}
        </Box>

        {/* Right Section - Additional Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginRight: { xs: "0", md: "40px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 550,
              marginBottom: "14px",
              lineHeight: "20px",
              fontSize: { xs: "14px", md: "16px" }, // Responsive font size
            }}
          >
            About Us
          </Typography>
          {["Terms of Service", "Privacy Policy", "Contact Us"].map((text) => (
            <Link
              key={text}
              component={RouterLink} // Use RouterLink for navigation
              to={`/${text.replace(/\s+/g, "").toLowerCase()}`} // Define the exact route path
              underline="none"
              sx={{
                color: "#FFFFFF",
                fontWeight: 400,
                lineHeight: "20px",
                fontSize: { xs: "14px", md: "16px" }, // Responsive font size
              }}
            >
              {text}
            </Link>
          ))}
        </Box>
      </Box>

      {/* Bottom Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "16px 20px", md: "16px 40px" }, // Adjust padding based on screen size
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "12px", md: "14px" }, // Responsive font size
            color: "#FFFFFF",
            marginTop: { xs: "16px", md: "0" },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" }, // Centered on small, right on large
            gap: "32px", // Spacing between the links
            order: { xs: 1, md: 2 },
            cursor: "pointer",
          }}
        >
          <span
            onClick={() => {
              setOpen(true);
              setStudent(3);
            }}
          >
            Continue as a Tutor
          </span>{" "}
          <span>|</span>{" "}
          <span
            onClick={() => {
              setOpen(true);
              setStudent(1);
            }}
          >
            Continue as a Parent
          </span>
        </Typography>

        {/* Copyright - Moved to the right */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            justifyContent: { xs: "center", md: "flex-end" }, // Centered on small, right on large
            marginTop: { xs: "16px", md: "0" }, // Add margin on smaller devices
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            variant="body4"
            sx={{ fontWeight: 400, fontSize: { xs: "12px", md: "14px" } }}
          >
            Copyright
          </Typography>
          <Box
            component="img"
            src={copyrightIcon}
            alt="Copyright"
            sx={{ width: "16px", height: "16px" }}
          />
          <Typography
            variant="body4"
            sx={{ fontWeight: 400, fontSize: { xs: "12px", md: "14px" } }}
          >
            2024 Taleem. All rights reserved.
          </Typography>
        </Box>
      </Box>
      <SignUp
        open={signUpOpen}
        handleClose={() => setSignUpOpen(false)}
        isStudent={isStudent}
        data={data}
        setData={setData}
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        handleSubmit={() => {
          setSignUpOpen(false);
        }}
        signupOpen={setOpen}
      />
      <LoginWithStudent
        open={open}
        handleClose={handleClose}
        isStudent={isStudent}
        data={data}
        setData={setData}
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        signUpOpen={signUpOpen}
        setSignUpOpen={setSignUpOpen}
        // loginWithEmailOpen={loginWithEmailOpen}
        signupOpen={setOpen}
      />
    </Box>
  );
};

export default Footer;
