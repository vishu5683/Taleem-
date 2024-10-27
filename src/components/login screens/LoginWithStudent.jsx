import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Modal,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import googleLogo from "../../assets/modal/image 10.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendMobileOtpSignup } from "../../Redux/Actions";

const LoginWithStudent = ({
  open,
  handleClose,
  isStudent,
  data,
  setData,
  otpOpen,
  setOtpOpen,
  signUpOpen,
  setSignUpOpen,
  loginWithEmailOpen,
  setLoginWithEmailOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [role, setRole] = useState(isStudent === 3 ? "tutor" : "student");
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("91"); // Default country code

  useEffect(() => {
    switch (isStudent) {
      case 1:
        setRole("student");
        break;
      case 2:
        setRole("parent");
        break;
      case 3:
        setRole("tutor");
        break;
      default:
        setRole("student");
    }
  }, [isStudent]);

  useEffect(()=>{localStorage.clear()},[])

  const handleChange = (event) => setRole(event.target.value);

  const handleGetStarted = () => {
    let payload = {
      type: "mobile_no",
      field_value: mobileNumber,
      country_code: countryCode,
      action: "login",
    };
    // if (mobileNumber.length === 10) {
    handleClose();
    dispatch(
      sendMobileOtpSignup(payload, (res) => {
        setData({
          token: res?.data?.data?.token,
          user: isStudent,
          type: "login",
          ismob: true,
          data: mobileNumber,
        });
        setOtpOpen(true);
      })
    );
    // } else {
    //   alert("Please enter a valid 10-digit mobile number");
    // }
  };

  const handleSignUpOpen = () => {
    handleClose();
    setSignUpOpen(true);
  };

  const handleLoginWithEmailOpen = () => {
    handleClose();
    setLoginWithEmailOpen(true);
  };

  return (
    <Modal
      open={open}
      onClose={(event, reason) => reason !== "backdropClick" && handleClose()}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "600px", md: "720px" },
          bgcolor: "white",
          borderRadius: "12px",
          p: { xs: 3, sm: 4 },
          textAlign: "center",
        }}
      >
        {/* Cancel Button */}
        <Box
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            backgroundColor: "#F2F2F2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{ color: "#5F6368", fontWeight: "bold", fontSize: "16px" }}
          >
            ×
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Metropolis",
            fontSize: { xs: "20px", sm: "24px" },
            fontWeight: 700,
            mb: "12px",
          }}
        >
          Log In
        </Typography>
        <Typography
          sx={{
            fontFamily: "Metropolis",
            fontSize: { xs: "16px", sm: "18px" },
            color: "#737373",
            mb: "20px",
          }}
        >
          Let’s continue your learning journey together
        </Typography>

        {/* Role Selector */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "#737373", mr: 1 }}>
            Continue as
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: "100px" }}>
            {isStudent !== 3 ? (
              <Select
                value={role}
                onChange={handleChange}
                sx={{
                  fontSize: "16px",
                  color: "#737373",
                  background:
                    "linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)",
                  borderRadius: "50px",
                  height: "32px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& .MuiPaper-root": {
                    background:
                      "linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)",
                  },
                }}
                inputProps={{ "aria-label": "Select Role" }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      background:
                        "linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)",
                    },
                  },
                }}
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="parent">Parent</MenuItem>
              </Select>
            ) : (
              <Select
                value={role}
                onChange={handleChange}
                sx={{
                  fontSize: "16px",
                  color: "#737373",
                  background:
                    "linear-gradient(105.04deg, #EBBE49 -25.33%, #FFC7C6 100%)",
                  borderRadius: "50px",
                  height: "32px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& .MuiPaper-root": {
                    background:
                      "linear-gradient(105.04deg, #EBBE49 -25.33%, #FFC7C6 100%)",
                  },
                }}
                inputProps={{ "aria-label": "Select Role" }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      background:
                        "linear-gradient(105.04deg, #EBBE49 -25.33%, #FFC7C6 100%)",
                    },
                  },
                }}
              >
                <MenuItem value="tutor">Tutor</MenuItem>
              </Select>
            )}
          </FormControl>
        </Box>

        {/* Mobile Number Input */}
        <Box
          sx={{
            width: { xs: "100%", sm: "420px" },
            mx: "auto",
            textAlign: "left",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#000000",
              mb: 1,
            }}
          >
            Mobile Number
          </Typography>
          <PhoneInput
            country={"in"} // Set default country code
            value={mobileNumber}
            onChange={(phone) => {
              setMobileNumber(phone);
              // Extract country code from the phone input
              const code = phone.replace(/[^0-9]/g, "").substring(0, 3);
              setCountryCode(code); // Update country code
            }}
            placeholder="Enter your mobile number"
            inputStyle={{
              width: "100%",
              height: "48px",
              borderRadius: "6px",
              borderColor: "#ccc",
            }}
          />
        </Box>

        <Button
          onClick={handleGetStarted}
          sx={{
            mb: 2,
            backgroundColor: "#40A39B",
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            fontWeight: 700,
            width: { xs: "100%", sm: "420px" },
            height: "52px",
            textTransform: "none",
          }}
        >
          Get Started
        </Button>

        {/* Google Login Button */}
        <Button
          onClick={() => console.log("Login with Google")}
          sx={{
            backgroundColor: "transparent",
            color: "#242424",
            border: "1px solid #E6E6E6",
            borderRadius: "8px",
            padding: "10px",
            width: { xs: "100%", sm: "420px" },
            height: "48px",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          <img
            src={googleLogo}
            alt="Google logo"
            style={{ marginRight: "8px", width: "20px", height: "20px" }}
          />
          Login with Google
        </Button>

        <Typography
          onClick={() => {
            handleSignUpOpen(true);
            handleClose();
          }}
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#737373",
            mt: 2,
            cursor: "pointer",
          }}
        >
          Don't have an account?{" "}
          <span style={{ color: "#40A39B" }}>Sign Up</span>
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoginWithStudent;
