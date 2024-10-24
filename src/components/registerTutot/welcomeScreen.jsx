import React from "react";
import { Box, Typography, Modal, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ open, handleClose }) => {
    const navigate=useNavigate();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "12px",
          width: { xs: "85%", sm: "400px" },
          textAlign: "center",
          p: 3,
          position: "relative",
        }}
      >
        {/* Close Button */}
        <Box
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>×</Typography>
        </Box>

        {/* Success Message */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          You’re All Set!
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#737373",
            mb: 3,
          }}
        >
          Welcome to the Taleem community.<br />
          Let’s make learning extraordinary.
        </Typography>

        {/* "Need Help?" Button */}
        <Button
          variant="outlined"
          sx={{
            borderRadius: "8px",
            width: "80%",
            mb: 2,
            fontWeight: 500,
          }}
        >
          Need Help?
        </Button>

        {/* "Start your Journey" Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#40A39B",
            color: "white",
            borderRadius: "8px",
            width: "80%",
            fontWeight: 500,
          }}
          onClick={()=> navigate("/home")}
        >
          Start your Journey
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;