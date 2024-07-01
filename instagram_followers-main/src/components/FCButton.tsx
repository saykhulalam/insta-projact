import React from "react";

type Props = {
  // Define your props here (if any)
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  disabled?: boolean;
};

const FCButton: React.FC<Props> = ({ type, text, disabled }) => {
  return (
    <button
      type={type ? type : "button"}
      
      className="justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 z-[5] relative rounded-lg text-md text-white font-medium shadow-md hover:shadow-lg transition duration-150 bg-blackSecondary hover:bg-[#fd7702] h-10 py-6 px-8 flex items-center bg-brand mt-4"
    >
      {text}
    </button>
  );
};

export default FCButton;
