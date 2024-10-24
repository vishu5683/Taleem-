import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const TutorsInfo = ({ open, handleClose,uploadDocumentOpen }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Dropdown options
  const qualificationsOptions = ["Bachelors", "Masters", "PhD", "Diploma"];
  const gradesOptions = ["Grade 1", "Grade 2", "Grade 3", "Grade 4"];
  const expertiseOptions = ["Mathematics", "Science", "English", "History"];
  
  const initialValues = {
    qualifications: [],
    occupation: "",
    experience: "",
    grades: [],
    expertise: [],
  };

  const validationSchema = Yup.object({
    qualifications: Yup.array().min(1, "Select at least one qualification"),
    occupation: Yup.string().required("Occupation is required"),
    experience: Yup.string().required("Experience is required"),
    grades: Yup.array().min(1, "Select at least one grade"),
    expertise: Yup.array().min(1, "Select at least one area of expertise"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      console.log(values);
      setTimeout(() => {
        setIsSubmitting(false);
        handleClose();
        uploadDocumentOpen()
      }, 3000);
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
        }}
      >
           <Typography
          sx={{
            fontFamily: "Metropolis",
            fontSize: { xs: "20px", sm: "24px" },
            fontWeight: 700,
            mb: "1px",
          }}
        >
          Complete your profile
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

        <form onSubmit={formik.handleSubmit}>
          {/* Qualifications */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: "#000000", mb: 1 }}
            >
              Qualifications*
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Choose your qualifications</InputLabel>
              <Select
                multiple
                name="qualifications"
                value={formik.values.qualifications}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                input={<OutlinedInput label="Choose your qualifications" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {qualificationsOptions.map((qualification) => (
                  <MenuItem key={qualification} value={qualification}>
                    <Checkbox
                      checked={formik.values.qualifications.indexOf(qualification) > -1}
                    />
                    <ListItemText primary={qualification} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.qualifications && formik.errors.qualifications && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                {formik.errors.qualifications}
              </Typography>
            )}
          </Box>

          {/* Occupation */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: "#000000", mb: 1 }}
            >
              Occupation*
            </Typography>
            <TextField
              name="occupation"
              value={formik.values.occupation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your occupation"
              fullWidth
              error={formik.touched.occupation && Boolean(formik.errors.occupation)}
              helperText={formik.touched.occupation && formik.errors.occupation}
              sx={{
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": { borderRadius: "6px" },
              }}
            />
          </Box>

          {/* Total Years of Experience */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: "#000000", mb: 1 }}
            >
              Total Years of Experience*
            </Typography>
            <TextField
              name="experience"
              value={formik.values.experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your total years of experience"
              fullWidth
              error={formik.touched.experience && Boolean(formik.errors.experience)}
              helperText={formik.touched.experience && formik.errors.experience}
              sx={{
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": { borderRadius: "6px" },
              }}
            />
          </Box>

          {/* Grades */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: "#000000", mb: 1 }}
            >
              Which grades are you providing tutoring for?*
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Choose grades</InputLabel>
              <Select
                multiple
                name="grades"
                value={formik.values.grades}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                input={<OutlinedInput label="Choose grades" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {gradesOptions.map((grade) => (
                  <MenuItem key={grade} value={grade}>
                    <Checkbox
                      checked={formik.values.grades.indexOf(grade) > -1}
                    />
                    <ListItemText primary={grade} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.grades && formik.errors.grades && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                {formik.errors.grades}
              </Typography>
            )}
          </Box>

          {/* Areas of Expertise */}
          <Box sx={{ width: "420px", mx: "auto", textAlign: "left", mb: 3 }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: "#000000", mb: 1 }}
            >
              Expertise in*
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Select areas of expertise</InputLabel>
              <Select
                multiple
                name="expertise"
                value={formik.values.expertise}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                input={<OutlinedInput label="Select areas of expertise" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {expertiseOptions.map((expertise) => (
                  <MenuItem key={expertise} value={expertise}>
                    <Checkbox
                      checked={formik.values.expertise.indexOf(expertise) > -1}
                    />
                    <ListItemText primary={expertise} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.expertise && formik.errors.expertise && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                {formik.errors.expertise}
              </Typography>
            )}
          </Box>

          {/* Submit Button */}
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
            {isSubmitting ? "Please wait..." : "Continue"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default TutorsInfo;
