import React from "react";
import Container from "@/src/components/Container";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import { prompt } from "@/app/layout";
const Pokladna = () => {
  return (
    <section className="pt-10">
      <Container>
        <div className="flex gap-14 xl:gap-[83px] md:px-5 xl:flex-row flex-col ">
          <div className="">
            <LeftSide promptClassname={prompt.className} />
          </div>
          <div className="">
            <RightSide promptClassname={prompt.className} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pokladna;
