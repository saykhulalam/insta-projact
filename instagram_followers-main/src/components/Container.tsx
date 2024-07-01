import React from "react";

type Props = {
  // Define your props here (if any)
  children: any;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className="container mx-auto md:px-0 px-4">{children}</div>;
};

export default Container;
