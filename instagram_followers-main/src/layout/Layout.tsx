import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  // Define your props here (if any)
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
