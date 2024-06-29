"use client";
import React, { useState } from "react";
import FadeIn from "@/utils/FadeIn";
import SelectComponent from "@/utils/SelectComponent";
import { MdGroups2 } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import Swal from "sweetalert2";

export default function TableBook() {
  const Swal = require("sweetalert2");
  // persons option
  const options = [
    "1 Person",
    "2 People",
    "3 People",
    "4 People",
    "5 People",
    "6 People",
    "7 People",
    "8 People",
    "9 People",
    "10 People",
    "12 People",
  ];
  // time option
  const timeOptions = [
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
    "12:00 AM",
  ];

  // cant select previous date
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [formData, setFormData] = useState({
    people: options[0],
    date: getTodayDate(),
    time: timeOptions[0],
  });

  const handleSelectChange =
    (field: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      date: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    Swal.fire({
      title: "You Are Selected",
      text: `${formData.people} Date Is
       ${formData.date} And 
       The Time Is ${formData.time}`,
      icon: "question",

    });
    Swal.fire({
      title: "You Are Selected",
      text: `${formData.people} Date Is
       ${formData.date} And 
       The Time Is ${formData.time}`,
      icon: "question",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result: { isConfirmed: any; isDenied: any }) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Booking Done", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    
  };

  return (
    <div className="bg-[#151412] flex h-full lg:h-screen w-full px-2">
      <div className="w-full lg:max-w-[1400px] mx-auto flex justify-center items-center flex-col space-y-2 px-2 md:px-4 my-10 lg:my-0">
        <div className="space-y-2 text-center !w-full">
          <FadeIn delay={0.5}>
            <span className="primary-text !text-white/80 text-center">
              Looking For Explore?
            </span>
          </FadeIn>
          <FadeIn delay={0.7}>
            <span className="headings">Book Your Table</span>
          </FadeIn>
        </div>
        {/* form */}
        <form
          className="flex flex-col md:flex-row w-[100%] items-center gap-10 justify-between !mt-10"
          onSubmit={handleSubmit}
        >
          {/* select persons */}
          <SelectComponent
            options={options}
            icon={<MdGroups2 />}
            value={formData.people}
            onChange={handleSelectChange("people")}
          />
          <span className="sub-heading font-bold">FOR</span>
          {/* select date */}
          <div
            className={`styles["custom-date-input"] border py-4 px-4 w-full`}
          >
            <input
              type="date"
              className="w-full !bg-[#151412] !text-white focus:outline-none cursor-pointer"
              min={getTodayDate()}
              value={formData.date}
              onChange={handleDateChange}
            />
          </div>
          <span className="sub-heading font-bold">AT</span>
          {/* select time */}
          <SelectComponent
            options={timeOptions}
            icon={<MdOutlineAccessTime />}
            value={formData.time}
            onChange={handleSelectChange("time")}
          />
          <button
            type="submit"
            className="cursor-pointer uppercase bg-[#6F4E37] font-bold px-10 py-2 border transition-all duration-300 ease-in-out hover:shadow-md transform hover:scale-105 !z-0"
          >
            SUBMIT
          </button>
        </form>
        {/*  */}
      </div>
    </div>
  );
}
