// import React, { useEffect } from 'react';
// import { Box, Typography, Modal, FormControl, Select, MenuItem, TextField, Button } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import {signup} from "../../Redux/Actions"
// const SignUp = ({ open, handleClose, isStudent }) => {
//   const dipsatch=useDispatch();
//   // Initial values for the form
//   const initialValues = {
//     name: '',
//     email: '',
//     mobile_no: '',
//     gender: '',
//     user_type: isStudent ? '1' : '3',
//     dob: '',
//     country_code: '91'
//   };

//   // Yup validation schema
//   const validationSchema = Yup.object({
//     name: Yup.string().required('Full name is required'),
//     email: Yup.string().email('Invalid email format').optional(),
//     mobile_no: Yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Must be exactly 10 digits'),
//     gender: Yup.string().required('Please select a gender'),
//     dob: Yup.string().required('Date of birth is required'),
//   });

//   // useEffect(()=>{
//   //   if(isStudent){}
//   // },[isStudent])

//   // Formik form handling
//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: (values) => {
//       console.log('Form submitted', values);
     
//       dipsatch(signup(values));
//       // Handle form submission, e.g., send data to API
//     },
//   });

//   return (
//     <Modal open={open} onClose={(event, reason) => reason !== 'backdropClick' && handleClose()}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: { xs: '85%', sm: '600px', md: '720px' },
//           bgcolor: 'white',
//           borderRadius: '12px',
//           p: { xs: 0, sm: 3 },
//           textAlign: 'center',
//         }}
//       >
//         {/* Cancel Button */}
//         <Box
//           onClick={handleClose}
//           sx={{
//             position: 'absolute',
//             top: '16px',
//             right: '16px',
//             width: '32px',
//             height: '32px',
//             backgroundColor: '#F2F2F2',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             cursor: 'pointer',
//           }}
//         >
//           <Typography sx={{ color: '#5F6368', fontWeight: 'bold', fontSize: '16px' }}>×</Typography>
//         </Box>

//         <Typography
//           sx={{
//             fontFamily: 'Metropolis',
//             fontSize: { xs: '20px', sm: '24px' },
//             fontWeight: 700,
//             mb: '1px',
//           }}
//         >
//           Create your Account
//         </Typography>
//         <Typography
//           sx={{
//             fontFamily: 'Metropolis',
//             fontSize: { xs: '16px', sm: '18px' },
//             color: '#737373',
//             mb: '12px',
//           }}
//         >
//           Let’s continue your learning journey together
//         </Typography>

//         {/* Form */}
//         <form onSubmit={formik.handleSubmit}>
//           {/* Full Name */}
//           <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
//             <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 2 }}>Full Name*</Typography>
//             <TextField
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter your full name"
//               fullWidth
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//               sx={{
//                 // height: '37px',
//                 borderRadius: '6px',
//                 '& .MuiOutlinedInput-root': { borderRadius: '6px' },
//               }}
//             />
//           </Box>

//           {/* Mobile Number */}
//           <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
//             <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Mobile Number*</Typography>
//             <TextField
//               name="mobile_no"
//               value={formik.values.mobile_no}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter your mobile number"
//               fullWidth
//               error={formik.touched.mobile_no && Boolean(formik.errors.mobile_no)}
//               helperText={formik.touched.mobile_no && formik.errors.mobile_no}
//               sx={{
//                 // height: '37px',
//                 borderRadius: '6px',
//                 '& .MuiOutlinedInput-root': { borderRadius: '6px' },
//               }}
//             />
//           </Box>

//           {/* Email ID (Optional) */}
//           <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
//             <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Email ID (Optional)</Typography>
//             <TextField
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter your email id"
//               fullWidth
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//               sx={{
//                 // height: '37px',
//                 borderRadius: '6px',
//                 '& .MuiOutlinedInput-root': { borderRadius: '6px' },
//               }}
//             />
//           </Box>

//           {/* Gender */}
//           <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 2 }}>
//             <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Gender*</Typography>
//             <FormControl fullWidth>
//               <Select
//                 name="gender"
//                 value={formik.values.gender}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 displayEmpty
//                 sx={{
//                   height: '40px',
//                   borderRadius: '6px',
//                   color: '#737373',
//                   '& .MuiOutlinedInput-root': { borderRadius: '6px' },
//                 }}
//               >
//                 <MenuItem value="" disabled>
//                   Select your gender
//                 </MenuItem>
//                 <MenuItem value="1">Male</MenuItem>
//                 <MenuItem value="2">Female</MenuItem>
//                 <MenuItem value="3">Other</MenuItem>
//               </Select>
//             </FormControl>
//             {formik.touched.gender && formik.errors.gender && (
//               <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>{formik.errors.gender}</Typography>
//             )}
//           </Box>
// {/* DOB */}
//           <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
//             <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Mobile Number*</Typography>
//             <TextField
//               name="dob"
//               value={formik.values.dob}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter your Date of birth"
//               type="date"
//               fullWidth
//               error={formik.touched.dob && Boolean(formik.errors.dob)}
//               helperText={formik.touched.dob && formik.errors.dob}
//               sx={{
//                 // height: '37px',
//                 borderRadius: '6px',
//                 '& .MuiOutlinedInput-root': { borderRadius: '6px' },
//               }}
//             />
//           </Box>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             sx={{
//               mt: 1,
//               backgroundColor: '#40A39B',
//               color: 'white',
//               borderRadius: '8px',
//               padding: '10px',
//               fontWeight: 500,
//               width: '420px',
//               height: '48px',
//               textTransform: 'none',
//             }}
//           >
//             Get Started
//           </Button>
//         </form>
//       </Box>
//     </Modal>
//   );
// };

// export default SignUp;

import React, { useEffect, useState } from 'react';
import { Box, Typography, Modal, FormControl, Select, MenuItem, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signup } from "../../Redux/Actions";
import { useNavigate } from 'react-router-dom';

const SignUp = ({ open, handleClose, isStudent }) => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  // State to disable the submit button
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initial values for the form
  const initialValues = {
    name: '',
    email: '',
    mobile_no: '',
    gender: '',
    user_type: isStudent ? '1' : '3',
    dob: '',
    country_code: '91'
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email format').optional(),
    mobile_no: Yup.string().required('Mobile number is required').matches(/^[0-9]{10}$/, 'Must be exactly 10 digits'),
    gender: Yup.string().required('Please select a gender'),
    dob: Yup.string().required('Date of birth is required'),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true); // Disable the submit button after submission
      
      dispatch(signup(values,(val)=>{
       if(val?.data?.data?.token!==""){
        localStorage.setItem('token', val?.data?.data?.token);
        navigate('/home');
       }
      }));
      
      // Re-enable the submit button after 5 seconds
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000);
    },
  });

  return (
    <Modal open={open} onClose={(event, reason) => reason !== 'backdropClick' && handleClose()}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '85%', sm: '600px', md: '720px' },
          bgcolor: 'white',
          borderRadius: '12px',
          p: { xs: 0, sm: 3 },
          textAlign: 'center',
        }}
      >
        {/* Cancel Button */}
        <Box
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            backgroundColor: '#F2F2F2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography sx={{ color: '#5F6368', fontWeight: 'bold', fontSize: '16px' }}>×</Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: 'Metropolis',
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 700,
            mb: '1px',
          }}
        >
          Create your Account
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Metropolis',
            fontSize: { xs: '16px', sm: '18px' },
            color: '#737373',
            mb: '12px',
          }}
        >
          Let’s continue your learning journey together
        </Typography>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 2 }}>Full Name*</Typography>
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
                borderRadius: '6px',
                '& .MuiOutlinedInput-root': { borderRadius: '6px' },
              }}
            />
          </Box>

          {/* Mobile Number */}
          <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Mobile Number*</Typography>
            <TextField
              name="mobile_no"
              value={formik.values.mobile_no}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your mobile number"
              fullWidth
              error={formik.touched.mobile_no && Boolean(formik.errors.mobile_no)}
              helperText={formik.touched.mobile_no && formik.errors.mobile_no}
              sx={{
                borderRadius: '6px',
                '& .MuiOutlinedInput-root': { borderRadius: '6px' },
              }}
            />
          </Box>

          {/* Email ID (Optional) */}
          <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Email ID (Optional)</Typography>
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
                borderRadius: '6px',
                '& .MuiOutlinedInput-root': { borderRadius: '6px' },
              }}
            />
          </Box>

          {/* Gender */}
          <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 2 }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Gender*</Typography>
            <FormControl fullWidth>
              <Select
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                displayEmpty
                sx={{
                  height: '40px',
                  borderRadius: '6px',
                  color: '#737373',
                  '& .MuiOutlinedInput-root': { borderRadius: '6px' },
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
              <Typography sx={{ color: 'red', fontSize: '12px', mt: 1 }}>{formik.errors.gender}</Typography>
            )}
          </Box>

          {/* DOB */}
          <Box sx={{ width: '420px', mx: 'auto', textAlign: 'left', mb: 3 }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#000000', mb: 1 }}>Date of Birth*</Typography>
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
                borderRadius: '6px',
                '& .MuiOutlinedInput-root': { borderRadius: '6px' },
              }}
            />
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting} // Disable the button if submitting
            sx={{
              mt: 1,
              backgroundColor: '#40A39B',
              color: 'white',
              borderRadius: '8px',
              padding: '10px',
              fontWeight: 500,
              width: '420px',
              height: '48px',
              textTransform: 'none',
              opacity: isSubmitting ? 0.6 : 1, // Change opacity when disabled
            }}
          >
            {isSubmitting ? 'Please wait...' : 'Get Started'}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUp;
