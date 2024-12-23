import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Modal,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import dividerLine from "../../assets/modal/Group 1000004577.png";
import googleLogo from "../../assets/modal/image 10.png";
import { sendMobileOtpSignup } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

const LoginWithEmail = ({
  open,
  handleClose,
  openPhoneNumberLogin,
  isStudent,
  data,
  setData,
  otpOpen,
  setOtpOpen,
}) => {
  const dispatch = useDispatch();
  const [role, setRole] = React.useState("student");
  const [email, setEmail] = React.useState("");

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
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleGetStarted = () => {
    let payload = {
      type: "email",
      field_value: email,
      country_code: "91",
      action: "login",
    };
    var re = /\S+@\S+\.\S+/;
  
    if (email && re.test(email)) {
      handleClose();
      dispatch(
        sendMobileOtpSignup(payload, (res) => {
          setData({
            token: res?.data?.data?.token,
            user: isStudent,
            type: "login",
            ismob: false,
            data: email,
          });
        })
      );
      setOtpOpen(true);
    } else {
      alert("Please enter a valid mail id");
    }
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
          p: { xs: 2, sm: 4 },
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
            fontSize: { xs: "18px", sm: "24px" },
            fontWeight: 700,
            mb: { xs: "10px", sm: "12px" },
          }}
        >
          Log In
        </Typography>
        <Typography
          sx={{
            fontFamily: "Metropolis",
            fontSize: { xs: "14px", sm: "18px" },
            color: "#737373",
            mb: { xs: "15px", sm: "20px" },
          }}
        >
          Let’s continue your learning journey together
        </Typography>

        {/* Role Select */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 1, sm: 2 },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: "#737373",
              mr: { xs: 0, sm: 1 },
              mb: { xs: 1, sm: 0 },
            }}
          >
            Continue as
          </Typography>
          <FormControl variant="outlined" sx={{ minWidth: "100px" }}>
            {isStudent !== 3 ? (
              <Select
                value={role}
                onChange={handleChange}
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#737373",
                  background:
                    "linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)",
                  borderRadius: "50px",
                  height: { xs: "28px", sm: "32px" },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
                inputProps={{ "aria-label": "Select Role" }}
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="parent">Parent</MenuItem>
              </Select>
            ) : (
              <Select
                value={role}
                onChange={handleChange}
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#737373",
                  background:
                    "linear-gradient(105.04deg, #EBBE49 -25.33%, #FFC7C6 100%)",
                  borderRadius: "50px",
                  height: { xs: "28px", sm: "32px" },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
                inputProps={{ "aria-label": "Select Role" }}
              >
                <MenuItem value="tutor">Tutor</MenuItem>
              </Select>
            )}
          </FormControl>
        </Box>

        {/* Email Input */}
        <Box
          sx={{
            width: { xs: "100%", sm: "420px" },
            mx: "auto",
            textAlign: "left",
            mb: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 700,
              color: "#000000",
              mb: 1,
            }}
          >
            Email
          </Typography>
          <TextField
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            fullWidth
            sx={{
              height: "48px",
              borderRadius: "6px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "6px",
                borderColor: "#ccc",
              },
            }}
          />
        </Box>

        {/* Get Started Button */}
        <Button
          onClick={handleGetStarted}
          sx={{
            mb: { xs: 1.5, sm: 2 },
            backgroundColor: "#40A39B",
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            fontWeight: 700,
            width: { xs: "100%", sm: "420px" },
            height: { xs: "48px", sm: "52px" },
            textTransform: "none",
          }}
        >
          Get Started
        </Button>

        <Typography
          onClick={openPhoneNumberLogin}
          sx={{
            fontSize: "16px",
            color: "#40A39B",
            fontWeight: 500,
            cursor: "pointer",
            mb: { xs: 1, sm: 2 },
          }}
        >
          Login with Phone number
        </Typography>

        {/* Divider */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 1, sm: 2 } }}>
          <img src={dividerLine} alt="divider line" style={{ width: "60%" }} />
        </Box>

        {/* Google Login */}
        <Button
          onClick={() => alert("Comming Soon")}
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
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          <img
            src={googleLogo}
            alt="Google logo"
            style={{ marginRight: "8px", width: "20px", height: "20px" }}
          />
          Login with Google
        </Button>

        {/* Sign Up */}
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px" },
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

export default LoginWithEmail;
