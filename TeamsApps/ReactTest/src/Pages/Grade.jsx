import React from "react";

function Grade() {
  return (
    <div className="flex flex-col p-[3rem] h-[520px] ml-[4rem]">
      <h1 class="heading">Grade</h1>
      <div className="grid grid-cols-5 gap-4 ">
        <p className="text-[18px] font-semibold">Course</p>
        <p className="text-[18px] font-semibold">Updated</p>
        <p className="text-[18px] font-semibold">Status</p>
        <p className="text-[18px] font-semibold">Grade</p>
        <p className="text-[18px] font-semibold">Action</p>
        <p className="text-[15px]">HTML Full Course</p>
        <p className="text-[15px]">2024-12-11 14:51:04</p>
        <p className="text-[15px] text-green-600 font-semibold">Graded</p>
        <p className="text-[15px]">100%</p>
        <button className="border rounded w-[10rem] bg-slate-300 text-[13px] p-2  ">
          Review Grade
        </button>
        <p className="text-[15px]">Complete CSS tutorial</p>
        <p className="text-[15px]">2024-12-11 14:51:04</p>
        <p className="text-[15px] text-red-500 font-semibold">Ungraded</p>
        <p className="text-[15px]">N/A</p>
        <button className="border rounded w-[10rem] bg-blue-600 text-[13px] p-2 text-white ">
          Graze Quiz
        </button>
        <p className="text-[15px]">Complete JS tutorial</p>
        <p className="text-[15px]">2024-12-11 14:51:04</p>
        <p className="text-[15px] text-blue-500 font-semibold">In progress</p>
        <p className="text-[15px]">N/A</p>
        {/* <button className="border w-[10rem] bg-slate-300 text-[13px] p-2  ">
          Review Grade
        </button> */}
        <p className=""></p>
        <p className="text-[15px]">Complete Bootstrap tutorial</p>
        <p className="text-[15px]">2024-12-11 14:51:04</p>
        <p className="text-[15px] text-blue-500 font-semibold">In progress</p>
        <p className="text-[15px]">N/A</p>
        {/* <button className="border w-[10rem] bg-slate-300 text-[13px] p-2  ">
          Review Grade
        </button> */}
        <p className=""></p>
        <p className="text-[15px]">Complete JQuery tutorial</p>
        <p className="text-[15px]">2024-12-11 14:51:04</p>
        <p className="text-[15px] text-red-500 font-semibold">Ungraded</p>
        <p className="text-[15px]">N/A</p>
        <button className="border rounded w-[10rem] bg-blue-600 text-[13px] p-2 text-white ">
          Graze Quiz
        </button>
      </div>
    </div>
  );
}

export default Grade;
