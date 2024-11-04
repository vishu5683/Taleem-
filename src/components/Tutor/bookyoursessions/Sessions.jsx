import React from "react";
import MyClassLayout from "../../my classes dashboard/MyClassLayout";
import HorizontalScheduler from "./HorizontalScheduler";
import img from '../../../assets/bookyoursessions/Vector.png'
import img1 from '../../../assets/bookyoursessions/vector1.png'

const Sessions = () => {
  return (
    <MyClassLayout>
      <div className="p-4">
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

        <div className="flex flex-col gap-3">
          <span className="font-semibold">
            Add your time for online availability
          </span>
          <span className="flex">
            <span className="flex items-center bg-[#EBFFFC] w-[100%] justify-between p-2 rounded">
                <span className="flex gap-2">
                <span><img src={img} alt="" /></span>
                <span>3:00 - 4:00 pm</span>
                </span>
              <select className="ml-2">
                <option value="daily">Daily</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </span>
            <span>

            <button className="bg-[#40A39B] px-4 py-2 rounded ml-2">+</button>
            </span>
          </span>
          <span className="flex">
            <span className="flex items-center bg-[#EBFFFC] w-full justify-between p-2 rounded">
                <span className="flex gap-2">
                <span>3:00 - 4:00 pm</span>
                </span>
                <span>
              <select className="ml-2">
                <option value="daily">Daily</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            <button className=" px-2 ml-2"><img src={img1} alt="" /></button>
            </span>
            </span>
           
          </span>
          <span className="flex">
            <span className="flex items-center bg-[#EBFFFC] w-full justify-between p-2 rounded">
                <span className="flex gap-2">
                <span>3:00 - 4:00 pm</span>
                </span>
                <span>
              <select className="ml-2">
                <option value="daily">Daily</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            <button className="px-2  ml-2"><img src={img1} alt="" /></button>
            </span>
            </span>
          </span>
          <span className="flex">
            <span className="flex items-center bg-[#EBFFFC] w-full justify-between p-2 rounded">
                <span className="flex gap-2">
                <span>3:00 - 4:00 pm</span>
                </span>
                <span>
              <select className="ml-2">
                <option value="daily">Daily</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            <button className=" px-2 ml-2"><img src={img1} alt="" /></button>
            </span>
            </span>
          </span>
          <span className="flex">
            <span className="flex items-center bg-[#EBFFFC] w-full justify-between p-2 rounded">
                <span className="flex gap-2">
                <span>3:00 - 4:00 pm</span>
                </span>
                <span>
              <select className="ml-2">
                <option value="daily">Daily</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            <button className="px-2 ml-2"><img src={img1} alt="" /></button>
            </span>
            </span>
          </span>
        </div>
      </div>
    </MyClassLayout>
  );
};

export default Sessions;
