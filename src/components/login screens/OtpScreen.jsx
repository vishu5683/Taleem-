import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  TextField,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyMobileOtpLogin } from "../../Redux/Actions";
import CountdownTimer from "../reusables/countdownTimer";

const OtpScreen = ({
  open,
  handleClose,
  isStudent,
  data,
  setData,
  otpOpen,
  setOtpOpen,
  tutorsInfoOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const otpRefs = useRef([]);
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [isDisplayResend, setIsDisplayResend] = useState(false);

  const startTimer = () => {
    setIsDisplayResend(false); // Disable the resend button
  };

  const handleComplete = () => {
    setIsDisplayResend(true); // Enable the resend button after 30 seconds
  };

  useEffect(() => {
    startTimer(); // Start the timer on component load
  }, []);

  const handleChange = (index, value) => {
    if (/^\d$/.test(value)) { // Allow only numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if not the last input
      if (index < otp.length - 1 && value !== "") {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear the current input
      setOtp(newOtp);

      // Move focus to the previous input field if it exists
      if (index > 0) {
        otpRefs.current[index - 1].focus();
      }
    } else if (e.key === "Enter" && index === otp.length - 1) {
      // Trigger OTP verification when Enter is pressed on the last input
      handleVerify();
    }
  };

  const handleResend = () => {
    startTimer(); // Restart the timer when "Resend" is clicked
    // Implement your resend OTP logic here
  };

  const handleVerify = () => {
    let payload = {
      otp: otp.join(""),
      type: data?.ismob ? "mobile_no" : "email",
      field_value: data?.data,
      action: data?.type,
      token: data?.token,
      country_code: data?.country_code,
    };

    dispatch(
      verifyMobileOtpLogin(payload, (res) => {
        if (res?.status === 200) {
          localStorage.setItem("token", res?.data?.data?.token);
          localStorage.setItem("user", JSON.stringify(res?.data?.data));
          if (data?.type === "signup" && data?.user === 3) {
            handleClose();
            tutorsInfoOpen();
          } else {
            navigate("/home", { isStudent });
          }
        }
      })
    );
  };

  return (
    <Modal
      open={open}
      onClose={(event, reason) => reason === "backdropClick" && handleClose()}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "400px", md: "450px" },
          bgcolor: "white",
          borderRadius: "8px",
          boxShadow: 24,
          p: { xs: 2, sm: 4 },
          textAlign: "center",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: { xs: "8px", sm: "16px" },
            right: { xs: "8px", sm: "16px" },
            width: { xs: "28px", sm: "32px" },
            height: { xs: "28px", sm: "32px" },
            backgroundColor: "#F2F2F2",
            "&:hover": { backgroundColor: "#E0E0E0" },
          }}
        >
          <CloseIcon sx={{ color: "#5F6368" }} />
        </IconButton>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
          fontSize={{ xs: "20px", sm: "24px" }}
        >
          Enter OTP
        </Typography>

        <Typography
          variant="body1"
          mb={3}
          color="text.secondary"
          fontSize={{ xs: "14px", sm: "16px" }}
        >
          We've sent an OTP password to your registered <br />
          mobile number.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          mb={{ xs: 5, sm: 9 }}
        >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              value={digit}
              inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (otpRefs.current[index] = el)} // Assign ref to each input
              sx={{
                width: { xs: "40px", sm: "54px" },
                height: { xs: "44px", sm: "48px" },
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
            />
          ))}
        </Stack>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={1}
          px={{ xs: 1, sm: 0 }}
        >
          <Typography
            color="text.secondary"
            fontSize={{ xs: "12px", sm: "14px" }}
          >
            <CountdownTimer time="30" handleComplete={handleComplete} />
          </Typography>
          <Typography
            color={isDisplayResend ? "#40A39B" : "#B4B4B4"}
            sx={{
              cursor: isDisplayResend ? "pointer" : "default",
              fontSize: { xs: "12px", sm: "14px" },
            }}
            onClick={() => {
              if (isDisplayResend) {
                handleResend();
              }
            }}
          >
            Don’t receive yet?{" "}
            <span style={{ color: isDisplayResend ? "#40A39B" : "#B4B4B4" }}>
              Resend
            </span>
          </Typography>
        </Box>

        <Button
          fullWidth
          onClick={handleVerify}
          sx={{
            backgroundColor: "#40A39B",
            color: "white",
            borderRadius: "8px",
            py: { xs: 1.5, sm: 2 },
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          Verify OTP
        </Button>
      </Box>
    </Modal>
  );
};

export default OtpScreen;
