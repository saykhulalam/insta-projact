import FCSectionHeader from "@/src/components/FCSectionHeader";
import Header from "@/src/layout/Header";
import Layout from "@/src/layout/Layout";
import React from "react";
import Content from "./_components/Content";

type Props = {
  // Define your props here (if any)
};

const Container: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Header />
      <div className="py-20">
        <FCSectionHeader
          title="Kontaktujte nás"
          info="Náš tým je připraven vám s čímkoliv pomoci. Stačí vyplnit formulář a my se vám co nejdříve ozveme."
        />

        <div className="mt-16">
          <Content />
        </div>
      </div>
    </Layout>
  );
};

export default Container;
