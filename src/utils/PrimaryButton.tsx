import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer uppercase bg-[#6F4E37] font-bold px-10 py-2 border transition-all duration-300 ease-in-out hover:shadow-md transform hover:scale-105 !z-0"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
