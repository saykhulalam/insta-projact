import Container from "@/src/components/Container";
import React from "react";
import FCButton from "./FCButton";

type Props = {
  // Define your props here (if any)
};

const GetStarted: React.FC<Props> = (props) => {
  return (
    <div className="py-20">
      <Container>
        <div className="bg-gradient-to-r from-[#0f172a] to-[#334155] max-w-[1000px] mx-auto w-full p-10 rounded-2xl md:grid md:grid-cols-2">
          <div>
            <div className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <h1 className="block md:text-2xl text-xl ">
                Nakopněte svá čísla do pár sekund!
              </h1>
              <h2 className="md:text-2xl text-xl">Začněte hned teď.</h2>
            </div>
            <p className="mt-4 md:text-lg text-base leading-6 text-white font-medium">
              Získejte skvělá čísla na svých profilech během chviličky. Začněte
              hned teď, dokud je <b>aktivní sleva!</b>
            </p>

            <FCButton text="Vybrat balíček" />
          </div>

          <div className="relative w-full h-full hidden md:block">
            <img
              src="/man3.webp"
              className="h-[300px] w-[300px] absolute top-1/2 left-[60%]"
              style={{ transform: "translate(-50%, -50%)" }}
              alt="Robot"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetStarted;
