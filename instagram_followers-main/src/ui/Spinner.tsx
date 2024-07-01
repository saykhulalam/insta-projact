import React from "react";

type Props = {
  // Define your props here (if any)
};

const Spinner: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-secondary border-t-black border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
