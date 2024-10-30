// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Modal,
//   Button,
//   IconButton
// } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// // import { uploadDocuments } from "../../Redux/Actions"; // hypothetical action for file upload

// const UploadDocumentsForm = ({
//   open,
//   handleClose,
//   handleSubmit,
//   data,
//   setData,
//   tutorsData,
//   setTutorsData,
// }) => {
//   const dispatch = useDispatch();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const initialValues = {
//     academic_document: null,
//     address_proof: null,
//     id_photo: null,
//   };

//   const validationSchema = Yup.object({
//     academic_document: Yup.mixed().required("Academic document is required"),
//     address_proof: Yup.mixed().required("Address proof is required"),
//     id_photo: Yup.mixed().required("ID photo is required"),
//   });

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: (values) => {
//       setIsSubmitting(true);
// console.log(tutorsData,"tutorsData")
//       const formData = new FormData();
//       formData.append("academic_document", values.academic_document);
//       formData.append("address_proof", values.address_proof);
//       formData.append("id_photo", values.id_photo);

//       // dispatch(
//       //   uploadDocuments(formData, () => {
//           setIsSubmitting(false);
//           handleClose();
//       //   })
//       // );
//     },
//   });

//   const handleFileChange = (event, field) => {
//     formik.setFieldValue(field, event.currentTarget.files[0]);
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={(event, reason) => reason !== "backdropClick" && handleClose()}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: { xs: "85%", sm: "600px", md: "720px" },
//           bgcolor: "white",
//           borderRadius: "12px",
//           p: { xs: 0, sm: 3 },
//           textAlign: "center",
//           maxHeight: "90vh", // Set max height to 80% of the viewport
//           overflowY: "auto",
//         }}
//       >
//         {/* Cancel Button */}
//         <Box
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             top: "16px",
//             right: "16px",
//             width: "32px",
//             height: "32px",
//             backgroundColor: "#F2F2F2",
//             borderRadius: "50%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         >
//           <Typography
//             sx={{ color: "#5F6368", fontWeight: "bold", fontSize: "16px" }}
//           >
//             ×
//           </Typography>
//         </Box>

//         <Typography
//           sx={{
//             fontFamily: "Metropolis",
//             fontSize: { xs: "20px", sm: "24px" },
//             fontWeight: 700,
//             mb: "1px",
//           }}
//         >
//           Upload Your Documents
//         </Typography>
//         <Typography
//           sx={{
//             fontFamily: "Metropolis",
//             fontSize: { xs: "16px", sm: "18px" },
//             color: "#737373",
//             mb: "12px",
//           }}
//         >
//           Please upload the required documents
//         </Typography>

//         <form onSubmit={formik.handleSubmit}>
//           {/* Academic Document */}
//           {/* <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 color: "#000000",
//                 mb: 2,
//               }}
//             >
//               Academic Document* (pdf, jpg, png)
//             </Typography>
//             <Button
//               variant="outlined"
//               component="label"
//               fullWidth
//               sx={{
//                 borderRadius: "6px",
//                 padding: "10px",
//               }}
//             >
//               Upload Academic Document
//             </Button>
//             {formik.touched.academic_document && formik.errors.academic_document && (
//               <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
//                 {formik.errors.academic_document}
//               </Typography>
//             )}
//           </Box> */}
//                 {['Academic Document(pdf, jpg, png)','Address Proof(pdf, jpg, png)', 'ID Proof(pdf, jpg, png)'].map((label, index) => (
//             <Box
//               key={index}
//               position="relative"
//               display="flex"
//               flexDirection="column"
//               justifyContent="space-between"
//               bgcolor="#EBFFFC"
//               borderRadius="18px"
//               p={2}
//               mt={3}
//               mb={5}
//             >
//               <Box display="flex" flexDirection="column" gap={1} mb={1}>
//                 <Box
//                   sx={{
//                     bgcolor: '#EBBE49',
//                     borderRadius: '76px',
//                     px: 2,
//                     py: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: '100%',
//                     fontWeight: '450',
//                     fontSize: '14px',
//                     mb: 1,
//                   }}
//                 >
//                   {label}
//                 </Box>
//                 <Box display="flex" alignItems="center" gap={1}>
//                   <InsertPhotoIcon sx={{ color: '#737373' }} />
//                   <Typography color="black" fontWeight="500" fontSize="18px">
//                     Documents1110.pdf
//                   </Typography>
//                 </Box>
//               </Box>
//               <IconButton
//                 sx={{
//                   position: 'absolute',
//                   bottom: 8,
//                   right: 8,
//                 }}
//               >
//                 <MoreVertIcon />
//               </IconButton>
//             </Box>
//           ))}

//           {/* Address Proof */}
//           {/* <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 color: "#000000",
//                 mb: 2,
//               }}
//             >
//               Address Proof* (pdf, jpg, png)
//             </Typography>
//             <Button
//               variant="outlined"
//               component="label"
//               fullWidth
//               sx={{
//                 borderRadius: "6px",
//                 padding: "10px",
//               }}
//             >
//               Upload Address Proof
//               <input
//                 type="file"
//                 accept=".pdf,.jpg,.png"
//                 hidden
//                 onChange={(e) => handleFileChange(e, "address_proof")}
//               />
//             </Button>
//             {formik.touched.address_proof && formik.errors.address_proof && (
//               <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
//                 {formik.errors.address_proof}
//               </Typography>
//             )}
//           </Box> */}

//           {/* ID Photo Attachment */}
//           {/* <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 color: "#000000",
//                 mb: 2,
//               }}
//             >
//               ID Photo Attachment* (pdf, jpg, png)
//             </Typography>
//             <Button
//               variant="outlined"
//               component="label"
//               fullWidth
//               sx={{
//                 borderRadius: "6px",
//                 padding: "10px",
//               }}
//             >
//               Upload ID Photo
//               <input
//                 type="file"
//                 accept=".pdf,.jpg,.png"
//                 hidden
//                 onChange={(e) => handleFileChange(e, "id_photo")}
//               />
//             </Button>
//             {formik.touched.id_photo && formik.errors.id_photo && (
//               <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
//                 {formik.errors.id_photo}
//               </Typography>
//             )}
//           </Box> */}

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             sx={{
//               mt: 1,
//               backgroundColor: "#40A39B",
//               color: "white",
//               borderRadius: "8px",
//               padding: "10px",
//               fontWeight: 500,
//               width: "420px",
//               height: "48px",
//               textTransform: "none",
//               opacity: isSubmitting ? 0.6 : 1,
//             }}
//           >
//             {isSubmitting ? "Uploading..." : "Submit Documents"}
//           </Button>
//         </form>
//       </Box>
//     </Modal>
//   );
// };

// export default UploadDocumentsForm;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  IconButton
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import { uploadDocuments } from "../../Redux/Actions"; // hypothetical action for file upload

const UploadDocumentsForm = ({
  open,
  handleClose,
  handleSubmit,
  data,
  setData,
  tutorsData,
  setTutorsData,
}) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    academic_document: null,
    address_proof: null,
    id_photo: null,
  };

  const validationSchema = Yup.object({
    academic_document: Yup.mixed().required("Academic document is required"),
    address_proof: Yup.mixed().required("Address proof is required"),
    id_photo: Yup.mixed().required("ID photo is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("academic_document", values.academic_document);
      formData.append("address_proof", values.address_proof);
      formData.append("id_photo", values.id_photo);

      // dispatch(
      //   uploadDocuments(formData, () => {
          setIsSubmitting(false);
          handleClose();
      //   })
      // );
    },
  });

  const handleFileChange = (event, field) => {
    formik.setFieldValue(field, event.currentTarget.files[0]);
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
          width: { xs: "85%", sm: "600px", md: "720px" },
          bgcolor: "white",
          borderRadius: "12px",
          p: { xs: 0, sm: 3 },
          textAlign: "center",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
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
          Upload Your Documents
        </Typography>
        <Typography
          sx={{
            fontFamily: "Metropolis",
            fontSize: { xs: "16px", sm: "18px" },
            color: "#737373",
            mb: "12px",
          }}
        >
          Please upload the required documents
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          {[
            { field: 'academic_document', label: 'Academic Document (pdf, jpg, png)' },
            { field: 'address_proof', label: 'Address Proof (pdf, jpg, png)' },
            { field: 'id_photo', label: 'ID Proof (pdf, jpg, png)' },
          ].map((doc, index) => (
            <Box
              key={index}
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              bgcolor="#EBFFFC"
              borderRadius="18px"
              p={2}
              mt={3}
              mb={5}
            >
              <Box display="flex" flexDirection="column" gap={1} mb={1}>
                <Box
                  sx={{
                    bgcolor: '#EBBE49',
                    borderRadius: '76px',
                    px: 2,
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontWeight: '450',
                    fontSize: '14px',
                    mb: 1,
                  }}
                >
                  {doc.label}
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <InsertPhotoIcon sx={{ color: '#737373' }} />
                  <Typography color="black" fontWeight="500" fontSize="18px">
                    {formik.values[doc.field]?.name || "No file selected"}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  mt: 1,
                  borderRadius: "6px",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Upload {doc.label.split(' ')[0]}
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  hidden
                  onChange={(e) => handleFileChange(e, doc.field)}
                />
              </Button>
              {formik.touched[doc.field] && formik.errors[doc.field] && (
                <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                  {formik.errors[doc.field]}
                </Typography>
              )}
              {/* <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                }}
              >
                <MoreVertIcon />
              </IconButton> */}
            </Box>
          ))}

          <Button
            type="submit"
            disabled={isSubmitting}
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
              opacity: isSubmitting ? 0.6 : 1,
            }}
          >
            {isSubmitting ? "Uploading..." : "Submit Documents"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UploadDocumentsForm;
