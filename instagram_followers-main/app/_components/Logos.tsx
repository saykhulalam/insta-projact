import Container from "@/src/components/Container";
import { InfiniteLogoMovingCards } from "@/src/ui/infinite-logo-moving-cards";
import React from "react";

type Props = {
  // Define your props here (if any)
};

const Logos: React.FC<Props> = (props) => {
  return (
    <div className="py-10">
      <Container>
        <div className="w-full md:w-[576px] mx-auto">
          <h1 className="text-lg font-bold text-center">Napsali o nás:</h1>

          <div>
            <InfiniteLogoMovingCards
              items={logos}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Logos;


const logos = [
  "/logos/2.webp",
  "/logos/3.svg",
  "/logos/4.webp",
  "/logos/6.svg",
];
