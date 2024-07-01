import { services } from "@/_fakeData/services";
import Container from "@/src/components/Container";
import FCSectionHeader from "@/src/components/FCSectionHeader";
import Header from "@/src/layout/Header";
import Layout from "@/src/layout/Layout";

import React from "react";
import GetStarted from "../../src/components/GetStarted";

import Services from "./_components/Services";

type Props = {
  // Define your props here (if any)
};

const OurServices: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Header />
      <div className="py-20">
        <FCSectionHeader
          title="Our Services"
          info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, temporibus dolore saepe consequuntur quasi unde"
        />

        <div className="mt-10">
          <Container>
            <Services services={services} />
          </Container>
        </div>

        <div className="mt-10">
          <GetStarted />
        </div>
      </div>
    </Layout>
  );
};

export default OurServices;
