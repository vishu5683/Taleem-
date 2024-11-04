import React from "react";
import MyClassLayout from "../../my classes dashboard/MyClassLayout";
import HorizontalScheduler from "./HorizontalScheduler";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const ScheduleStudent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sessions');
  };

  return (
    <MyClassLayout>
      <div className="p-4">

        {/* Title and Add New Schedule Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[24px] font-semibold">Schedule</h1>
          <button
      onClick={handleClick}
      className="bg-[#40A39B] text-white w-[186px] h-[44px] px-4 py-2 rounded-[8px]"
    >
      Add New Schedule
    </button>
        </div>

        {/* Horizontal Scheduler */}
        <HorizontalScheduler />

        {/* Today Availability Section */}
        <div className="flex flex-col mt-4">
          <span className="font-semibold mb-2">Today Availability</span>
          <div className="flex flex-row gap-2">
            <button className="px-4 py-2 hover:bg-[#40A39B] hover:text-white rounded-3xl border">
              All
            </button>
            <button className="px-4 py-2 hover:bg-[#40A39B] hover:text-white rounded-3xl border">
              Online
            </button>
            <button className="px-4 py-2 hover:bg-[#40A39B] hover:text-white rounded-3xl border">
              Face to Face
            </button>
            <button className="px-4 py-2 hover:bg-[#40A39B] hover:text-white rounded-3xl border">
              Open Session
            </button>
          </div>
        </div>

        {/* Time Availability Boxes */}
        <div className="flex flex-col gap-3 mt-4">
          {[
            "10:30 AM - 11:30 AM",
            "11:30 AM - 12:30 PM",
            "1:00 PM - 2:00 PM",
            "2:30 PM - 3:30 PM",
            "4:00 PM - 5:00 PM"
          ].map((time, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#EBFFFC] border rounded-[8px] w-[740px] h-[50px] p-4">
              <span className="text-[14px] font-semibold">{time}</span>

              {index === 2 ? (
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center justify-center px-4 py-1 rounded-[17px] border text-[14px] font-semibold"
                    style={{
                      background: "linear-gradient(105.04deg, #C6FFC9 -25.33%, #D4EBFF 100%)",
                      width: "77px",
                      height: "26px"
                    }}>
                    Booked
                  </div>
                  <KeyboardArrowDownIcon className="cursor-pointer" />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <EditIcon className="cursor-pointer" />
                  <KeyboardArrowDownIcon className="cursor-pointer" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MyClassLayout>
  );
};

export default ScheduleStudent;
