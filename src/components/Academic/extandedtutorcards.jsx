import React from 'react';
import img from '../../assets/bookurtutor/img.png';
import icon1 from '../../assets/bookurtutor/icon1.png';
import icon2 from '../../assets/bookurtutor/icon2.png';
import star from '../../assets/bookurtutor/star.png';

const Extandedtutorcards = () => {
  return (
    <div className="flex flex-row p-6 border border-gray-200 rounded-lg shadow-lg gap-4">
      {/* Image Section */}
      <div className="w-[30%] h-[205px] mb-4">
        <img src={img} alt="Tutor" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Tutor Name and Description */}
      <div className='flex flex-col w-[60%]'>
      <div className="text-justify mb-4 flex flex-row justify-between">
        <div className="text-2xl font-bold text-gray-800 mb-1">Daniela Chikitani</div>
        <div className='flex flex-row bg-[#40A39B] w-[72px] h-[30px] rounded items-center justify-center gap-2'><img src={star} alt="" className='w-[18px] h-[18px]'/> <span className='text-white'>4.0</span></div>
      </div>

      {/* Details Section */}
      <div className="mb-4 space-y-2">
        {/* University Section */}
        <div className="flex items-center text-gray-600">
          <img src={icon1} alt="University icon" className="w-5 h-5 mr-2" />
          <span>English Tutor at University</span>
        </div>

        {/* Location Section */}
        <div className="flex items-center text-gray-600">
          <img src={icon2} alt="Location icon" className="w-5 h-5 mr-2" />
          <span>Doha, Qatar</span>
        </div>
      </div>

      {/* Experience and Price */}
      <div className="flex justify-between items-center  p-3 rounded-md mb-6">
        <div className='bg-[#F8F8F8] p-4 flex flex-row gap-16 rounded-xl'>
        <div className="">
          <span className="font-medium">Experience: </span>
          <span>7 years</span>
        </div>
        <div>|</div>
        <div className="">
          <span className="font-medium">120 </span>
          <span>Riyals/hr</span>
        </div>
        </div>
        <button class="w-[214px] h-[48px] py-3 border border-[rgba(64,163,155,1)] text-[rgba(64,163,155,1)] font-medium rounded-lg flex items-center justify-center text-center">
  Book Tutor
</button>


      </div>

      {/* Button */}
    </div>
    </div>
  );
};

export default Extandedtutorcards;