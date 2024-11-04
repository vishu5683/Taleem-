import React from "react";
import MyClassLayout from "../../my classes dashboard/MyClassLayout";
import HorizontalScheduler from "./HorizontalScheduler";
import img from '../../../assets/bookyoursessions/Vector.png';
import img1 from '../../../assets/bookyoursessions/vector1.png';
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sessions = () => {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate('/bookyoursession');
  };

  return (
    <MyClassLayout>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[24px] font-semibold">Schedule</h1>
        </div>

        <HorizontalScheduler />

        <div className="flex flex-col mt-4">
          <span className="font-semibold mb-2">Select Mode</span>
          <div className="flex flex-row gap-2">
            <button className="px-4 py-2 hover:bg-[#40A39B] hover:text-white rounded-3xl border">
              Online
            </button>
            <button className="px-4 py-2 hover:bg-[#40A39B] hover:text-white rounded-3xl border">
              Face to Face
            </button>
            <button className="px-2 py-2 hover:bg-[#40A39B] hover:text-white rounded-3xl border">
              Open Session
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <span className="font-semibold">Add your time for online availability</span>
          <div className="flex items-center gap-3">
            {/* Time Box */}
            <div className="flex items-center bg-[#EBFFFC] justify-between p-[10px] rounded-[8px] w-[673px] h-[46px]">
              <div className="flex items-center gap-2">
                <img src={img} alt="time icon" />
                <span>3:00 - 4:00 pm</span>
              </div>

              {/* Customized Box */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  width: '65px',
                  padding: '5px 7px',
                  bgcolor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid #737373',
                }}
              >
                <Typography fontSize="12px" color="#737373">
                  Daily
                </Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: '18px', color: '#737373' }} />
              </Box>
            </div>

            {/* "+" Button */}
            <button
              className="bg-[#40A39B] text-white w-[46px] h-[46px] rounded-[8px] flex items-center justify-center">
              +
            </button>
          </div>

          {/* Additional Time Boxes */}
          {Array(3).fill().map((_, index) => (
            <div key={index} className="flex items-center bg-[#EBFFFC] justify-between p-[15px] rounded-[8px] w-[740px] h-[56px]">
              <span className="flex gap-2">
                <span>3:00 - 4:00 pm</span>
              </span>

              {/* Customized Box and Delete Icon */}
              <div className="flex items-center gap-2">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    width: '65px',
                    padding: '5px 7px',
                    bgcolor: '#FFFFFF',
                    borderRadius: '8px',
                    border: '1px solid #737373',
                  }}
                >
                  <Typography fontSize="12px" color="#737373">
                    Daily
                  </Typography>
                  <KeyboardArrowDownIcon sx={{ fontSize: '18px', color: '#737373' }} />
                </Box>

                {/* Delete Icon */}
                <button className="px-2">
                  <img src={img1} alt="delete icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Save Schedule Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSaveClick}
            className="bg-[#40A39B] text-white w-[186px] h-[44px] px-4 py-2 rounded-[8px]"
          >
            Save Schedule
          </button>
        </div>
      </div>
    </MyClassLayout>
  );
};

export default Sessions;
