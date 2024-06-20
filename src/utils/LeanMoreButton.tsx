import React from "react";

interface LeanMoreProps {
  text: string;
  onClick?: () => void;
}

const LeanMore: React.FC<LeanMoreProps> = ({ onClick, text }) => {
  return (
    <button className="overflow-hidden w-32 p-2 h-12 bg-[#6F4E37] text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
      {text}
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 text-center opacity-0 absolute top-2.5 left-6 z-10 flex text-[10px]">
        click here
      </span>
    </button>
  );
};

export default LeanMore;
