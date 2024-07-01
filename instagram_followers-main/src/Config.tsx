"use client";
import React from "react";
import { ToastContainer } from "react-toastify";


type Props = {
  // Define your props here (if any)
  children: any;
};

const Config: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default Config;
