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
import toast from "react-hot-toast";
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
  const otpRefs = useRef([]); // Create a ref array to store OTP input references
  const [otp, setOtp] = useState(Array(4).fill("")); // Initialize OTP state
  const [isDisplayResend, setIsDisplayResend] = useState(false);
  const handleComplete = () => {
    setIsDisplayResend(true);
  };
  useEffect(() => {
    console.log(data,"valueDATA");
  }, [data]);

  // const handleChange = (index, value) => {
  //   if (value.length <= 1) {
  //     const newOtp = [...otp];
  //     newOtp[index] = value;
  //     setOtp(newOtp);

  //     // Move focus to the next input field
  //     if (value && index < otp.length - 1) {
  //       otpRefs.current[index + 1].focus();
  //     }
  //   }
  // };

  // const handleKeyDown = (e, index) => {
  //   // Handle backspace to shift focus to the previous input field
  //   if (e.key === "Backspace" && index > 0 && !otp[index]) {
  //     otpRefs.current[index - 1].focus();
  //   }
  // };

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      // Move focus to the next input field
      if (value && index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
  
      // If the OTP is complete, verify it automatically
      // if (newOtp.every((digit) => digit)) {
      //   handleVerify();
      // }
    }
  };
  const handleKeyDown = (e, index) => {
    // Handle backspace to shift focus to the previous input field
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    let payload = {
      otp: otp.join(''),
      type: data?.ismob ? "mobile_no" : "email",
      field_value: data?.data,
      action: data?.type,
      token: data?.token, // recieved in sendOtp api
      country_code:data?.country_code,
    };

    dispatch(
      verifyMobileOtpLogin(payload, (res) => {
        if (res?.status == 200) {
          localStorage.setItem("token", res?.data?.data?.token);
          localStorage.setItem("user", JSON.stringify(res?.data?.data));
          if (data?.type == "signup" && data?.user == 3) {
            handleClose();
            tutorsInfoOpen();
          } else {
            navigate("/home", { isStudent });
          }
        } else {
        }
      })
    );
  };

  const handleReverify = () => {
    let payload = {
      otp: "1234",
      type: data?.ismob ? "mobile_no" : "email",
      field_value: data?.data,
      action: data?.type,
      token: data?.token, // recieved in sendOtp api
    };

    // dispatch(
    //   sendMobileOtpSignup(payload, (res) => {
    //     setData({
    //       token: res?.data?.data?.token,
    //       user: isStudent,
    //       type: "login",
    //       ismob: true,
    //       data: mobileNumber,
    //     });
    //     setOtpOpen(true);
    //   })
    // );

    // dispatch(
    //   verifyMobileOtpLogin(payload, (res) => {
    //     if (res?.status == 200) {
    //       localStorage.setItem("token", res?.data?.data?.token);
    //       localStorage.setItem("user", JSON.stringify(res?.data?.data));
    //       if (data?.type == "signup" && data?.user == 3) {
    //         handleClose();
    //         tutorsInfoOpen();
    //       } else {
    //         navigate("/home", { isStudent });
    //       }
    //     } else {
    //     }
    //   })
    // );

    // Here you can add any OTP verification logic
    // For now, we'll just navigate to /home
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
        {/* Cancel Button */}
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

        {/* Title */}
        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
          fontSize={{ xs: "20px", sm: "24px" }}
        >
          Enter OTP
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          mb={3}
          color="text.secondary"
          fontSize={{ xs: "14px", sm: "16px" }}
        >
          We've sent an OTP password to your registered <br />
          mobile number.
        </Typography>

        {/* OTP Input Fields */}
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
          {/* {isDisplayResend && ( */}
            <Typography
              color="#B4B4B4"
              sx={{ cursor: "pointer", fontSize: { xs: "12px", sm: "14px" } }}
              onClick={() => {
                // handleVerify();
                handleComplete();
              }}
            >
              Don't receive Yet?
              <span style={isDisplayResend ? {color:"#40A39B"} : {color:"#B4B4B4"}}>Resend</span> 
            </Typography>
          {/* )} */}
        </Box>

        {/* Verify OTP Button */}
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
