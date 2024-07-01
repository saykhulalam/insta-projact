import React from "react";
import Container from "./Container";

type Props = {
  // Define your props here (if any)
  title: string;
  info: string;
};

const FCSectionHeader: React.FC<Props> = ({ title, info }) => {
  return (
    <Container>
      <>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            {title}
          </h2>
          <p className="max-w-xl text-center mt-2">{info}</p>
        </div>
      </>
    </Container>
  );
};

export default FCSectionHeader;
