import React, { useEffect, useState } from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = ({
  open,
  handleClose,
  isStudent,
  data,
  setData,
  otpOpen,
  setOtpOpen,
  signupOpen,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // State to disable the submit button
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("91");
  // Initial values for the form
  const initialValues = {
    name: "",
    email: "",
    mobile_no: "",
    gender: "",
    user_type: `${isStudent}`,
    dob: "",
    country_code: "91",
  };
useEffect(()=>{localStorage.clear()},[])
  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email format").optional(),
    mobile_no: Yup.string().required("Mobile number is required"),
    // .matches(/^[0-9]{10}$/, "Must be exactly 10 digits"),
    gender: Yup.string().required("Please select a gender"),
    dob: Yup.string().required("Date of birth is required"),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true); // Disable the submit button after submission
      values.country_code = countryCode;
      const phoneWithoutCountryCode = values?.mobile_no.replace(new RegExp(`^\\+?${values?.country_code}`), '');
      console.log(values, "resss", phoneWithoutCountryCode);
      let payload = {
        name: values?.name,
        email: values?.email,
        mobile_no: phoneWithoutCountryCode,
        gender: values?.gender,
        user_type: `${isStudent}`,
        dob: values?.dob,
        country_code: values?.country_code,
      };
      dispatch(
        signup(payload, (val) => {
          if (val?.data?.data?.token !== "") {
            localStorage.setItem("user", isStudent);
            setData({
              ...payload,
              token: val?.data?.data?.token,
              user: `${isStudent}`,
              type: "signup",
              ismob: true,
              data: phoneWithoutCountryCode,
              user_type: `${isStudent}`,
              country_code:values?.country_code,
            });
            // navigate("/home");
            setOtpOpen(true);
            handleClose();
          }
        })
      );

      // Re-enable the submit button after 5 seconds
      setTimeout(() => {
        setIsSubmitting(false);
        // setOtpOpen(true);
        //   handleClose()
      }, 5000);
    },
  });

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
          width: { xs: "85%", sm: "600px", md: "720px" },
          bgcolor: "white",
          borderRadius: "12px",
          p: { xs: 0, sm: 3 },
          textAlign: "center",
          maxHeight: "90vh", // Set max height to 80% of the viewport
          overflowY: "auto",
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
            mb: "1px",
          }}
        >
          Create your Account
        </Typography>
        <Typography
          sx={{
            fontFamily: "Metropolis",
            fontSize: { xs: "16px", sm: "18px" },
            color: "#737373",
            mb: "12px",
          }}
        >
          Let’s continue your learning journey together
        </Typography>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <Box
            sx={{
              overflowY: "auto",
              maxHeight: "60vh",
              width: "420px",
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
                mb: 2,
              }}
            >
              Full Name*
            </Typography>
            <TextField
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your full name"
              fullWidth
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": { borderRadius: "6px" },
              }}
            />
          </Box>

          {/* Mobile Number */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
            >
              Mobile Number*
            </Typography>
            <PhoneInput
              country={"om"}
              value={formik.values.mobile_no}
              onChange={(phone, country) => {
                setCountryCode(country.dialCode);
                
                formik.setFieldValue(
                  "mobile_no",
                  phone
                  // .replace(/^[0-9]{2}/, "")
                );
              }}
             
              inputProps={{
                name: "mobile_no",
                required: true,
                onBlur: formik.handleBlur,
              }}
              placeholder="Enter your mobile number"
              fullWidth
              inputStyle={{
                width: "100%",
                borderRadius: "6px",
                height: "3.5rem",
                borderColor:
                  formik.touched.mobile_no && formik.errors.mobile_no
                    ? "red"
                    : "#ced4da",
              }}
              containerStyle={{
                borderRadius: "6px",
                width: "100%",
                height: "3.5rem",
                borderRadius: "6px",
                borderColor: "rgb(206, 212, 218)",
                font: "inherit",
                letterSpacing: "inherit",
                boxSizing: "content-box",
              }}
            />
            {formik.touched.mobile_no && formik.errors.mobile_no && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                {formik.errors.mobile_no}
              </Typography>
            )}
          </Box>
          {/* Email ID (Optional) */}
          {/* <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
            >
              Email ID (Optional)
            </Typography>
            <TextField
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email id"
              fullWidth
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": { borderRadius: "6px" },
              }}
            />
          </Box> */}

          {/* Gender */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 2 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
            >
              Gender*
            </Typography>
            <FormControl fullWidth>
              <Select
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                displayEmpty
                sx={{
                  height: "3.5rem",
                  borderRadius: "6px",
                  color: "#737373",
                  "& .MuiOutlinedInput-root": { borderRadius: "6px" },
                }}
              >
                <MenuItem value="" disabled>
                  Select your gender
                </MenuItem>
                <MenuItem value="1">Male</MenuItem>
                <MenuItem value="2">Female</MenuItem>
                <MenuItem value="3">Other</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.gender && formik.errors.gender && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                {formik.errors.gender}
              </Typography>
            )}
          </Box>

          {/* DOB */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
            >
              Date of Birth*
            </Typography>
            <TextField
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your Date of birth"
              type="date"
              fullWidth
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
              sx={{
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": { borderRadius: "6px" },
              }}
            />
          </Box>
          <Typography
            onClick={() => {
              signupOpen(true);
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
            Already have an account?{" "}
            <span style={{ color: "#40A39B" }}>Login</span>
          </Typography>
          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting} // Disable the button if submitting
            sx={{
              mt: 1,
              backgroundColor: "#40A39B",
              color: "white",
              borderRadius: "8px",
              padding: "10px",
              fontWeight: 500,
              width: "420px",
              height: "48px",
              textTransform: "none",
              opacity: isSubmitting ? 0.6 : 1, // Change opacity when disabled
            }}
          >
            {isSubmitting ? "Please wait..." : "Get Started"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUp;
