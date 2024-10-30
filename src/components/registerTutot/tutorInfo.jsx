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
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  curriculums,
  expertise,
  grades,
  qualifications,
} from "../../Redux/Actions";
import Utils from "../../Utils";

const TutorsInfo = ({
  open,
  handleClose,
  uploadDocumentOpen,
  tutorsData,
  setTutorsData,
}) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    qualifications: [],
    occupation: "",
    experience: "",
    grades: [],
    expertise: [],
  };

  // Dropdown options
  var qualificationsOptions = useSelector(
    (state) => state.qualificationsReducer?.qualificationsData?.data?.rows
  );
  var gradesOptions = useSelector(
    (state) => state.gradesReducer?.gradesData?.rows
  );
  var expertiseOptions = useSelector(
    (state) => state.expertiseReducer?.expertiseData?.rows
  );

  useEffect(() => {
    if (token && token !== null) {
      dispatch(
        expertise((res) => {
          console.log(res, "expertiseOptionsexpertiseOptions");
        })
      );
      dispatch(qualifications());
      dispatch(grades());
      dispatch(curriculums());
    }
  }, [token]);

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
      console.log(values, "Values");
      setTutorsData(values)
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        handleClose();
        uploadDocumentOpen();
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
          maxHeight: "90vh", // Set max height to 80% of the viewport
          overflowY: "auto",
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
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
            >
              Qualifications*
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Choose your qualifications</InputLabel>
              <Select
  multiple
  name="qualifications"
  value={formik.values.qualifications.map((qual) => qual.id)} // Store only the IDs for the select
  onChange={(event) => {
    const {
      target: { value },
    } = event;

    // Transform the selected values into an array of objects
    const selectedQualifications = value
      .map((qualId) => {
        // Find the selected qualification in qualificationsOptions
        const selectedQualification = qualificationsOptions.find(
          (qual) => qual.id === qualId
        );
        return selectedQualification
          ? { id: selectedQualification.id, name: selectedQualification.name }
          : null;
      })
      .filter(Boolean); // Filter out null values
    console.log(selectedQualifications, "selectedQualifications");
    formik.setFieldValue("qualifications", selectedQualifications); // Update Formik state with an array of objects
  }}
  onBlur={formik.handleBlur}
  input={<OutlinedInput label="Choose your qualifications" />}
  renderValue={(selected) => {
    // Render the names of the selected qualifications
    return selected
      .map((qualId) => {
        const qualification = qualificationsOptions.find((q) => q.id === qualId);
        return qualification ? qualification.name : "";
      })
      .join(", ");
  }}
>
  {qualificationsOptions &&
    qualificationsOptions.map((qualification) => (
      <MenuItem key={qualification.id} value={qualification.id}>
        <Checkbox
          checked={formik.values.qualifications.some(
            (selectedQual) => selectedQual.id === qualification.id
          )} // Check if the qualification is selected
        />
        <ListItemText primary={qualification.name} />
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
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
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
              error={
                formik.touched.occupation && Boolean(formik.errors.occupation)
              }
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
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
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
              error={
                formik.touched.experience && Boolean(formik.errors.experience)
              }
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
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
            >
              Which grades are you providing tutoring for?*
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Choose grades</InputLabel>
              <Select
                multiple
                name="grades"
                value={formik.values.grades.map((grade) => grade.id)} // Store only the IDs for the select
                onChange={(event) => {
                  const {
                    target: { value },
                  } = event;

                  // Transform the selected values into an array of objects
                  const selectedGrades = value
                    .map((gradeId) => {
                      // Find the selected grade in gradesOptions
                      const selectedGrade = gradesOptions.find(
                        (grade) => grade.id === gradeId
                      );
                      return selectedGrade
                        ? { id: selectedGrade.id, name: selectedGrade.name }
                        : null;
                    })
                    .filter(Boolean); // Filter out null values
                  console.log(selectedGrades, "selectedGrades");
                  formik.setFieldValue("grades", selectedGrades); // Update Formik state with an array of objects
                }}
                onBlur={formik.handleBlur}
                input={<OutlinedInput label="Choose grades" />}
                renderValue={(selected) => {
                  // Render the names of the selected grades
                  return selected
                    .map((gradeId) => {
                      const grade = gradesOptions.find((g) => g.id === gradeId);
                      return grade ? grade.name : "";
                    })
                    .join(", ");
                }}
              >
                {gradesOptions &&
                  gradesOptions.map((grade) => (
                    <MenuItem key={grade.id} value={grade.id}>
                      <Checkbox
                        checked={formik.values.grades.some(
                          (selectedGrade) => selectedGrade.id === grade.id
                        )} // Check if the grade is selected
                      />
                      <ListItemText primary={grade.name} />
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
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                mb: 1,
              }}
            >
              Expertise in*
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Select areas of expertise</InputLabel>
              <Select
  multiple
  name="expertise"
  value={formik.values.expertise.map((exp) => exp.id)} // Store only the IDs for the select
  onChange={(event) => {
    const {
      target: { value },
    } = event;
    console.log(value, "expertiseexpertise");

    // Transform the selected values into an array of objects
    const selectedExpertise = value
      .map((expId) => {
        // Find the selected expertise in expertiseOptions
        const selectedExp = expertiseOptions.find((exp) => exp.id === expId);
        return selectedExp
          ? { id: selectedExp.id, name: selectedExp.name }
          : null;
      })
      .filter(Boolean); // Filter out null values

    // Update Formik values
    formik.setFieldValue("expertise", selectedExpertise);
    console.log(selectedExpertise, "expertiseexpertise123");
  }}
  onBlur={formik.handleBlur}
  input={<OutlinedInput label="Select areas of expertise" />}
  renderValue={(selected) => {
    // Render the names of the selected expertise
    return selected
      .map((expId) => {
        const exp = expertiseOptions.find((e) => e.id === expId);
        return exp ? exp.name : "";
      })
      .join(", ");
  }}
>
  {expertiseOptions &&
    expertiseOptions.map((expertise) => (
      <MenuItem key={expertise.id} value={expertise.id}>
        <Checkbox
          checked={formik.values.expertise.some(
            (exp) => exp.id === expertise.id
          )}
        />
        <ListItemText primary={expertise.name} />
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
