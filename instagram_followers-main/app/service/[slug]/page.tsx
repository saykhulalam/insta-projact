import { services } from "@/_fakeData/services";
import Container from "@/src/components/Container";
import FCSectionHeader from "@/src/components/FCSectionHeader";
import Header from "@/src/layout/Header";
import Layout from "@/src/layout/Layout";
import React from "react";
import Content from "./_components/Content";
import Feedback from "@/src/components/Feedback";
import GetStarted from "@/src/components/GetStarted";
import List from "./_components/List";
import Package from "./_components/Package";

async function getSingleService(slug: string) {
  const service = services;
  const singleService = service.find((item: any) => item.slug === slug);
  return singleService;
}

export async function generateStaticParams() {
  const service = services;

  const slugs = service.map((item: any) => item.slug);
  return slugs;
}

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const service = await getSingleService(slug);
  if (service) {
    return { title: service.name };
  } else {
    return { title: "Unknown Author" };
  }
}

type Props = {
  // Define your props here (if any)
};

const Service: React.FC<Props> = async ({ params }: any) => {
  const { slug } = params;

  const service = await getSingleService(slug);
  

  return (
    <Layout>
      <Header />

      <div className="py-20">
        <Container>
          <FCSectionHeader
            title="INSTAGRAM"
            info={service?.description || ""}
          />

          <div className="space-y-5 mt-10">
            <Package packages={packages} />
            <Content service={service} />
            <List service={service} />
          </div>

          <div>
            <Feedback />
          </div>

          <div>
            <GetStarted />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Service;

const packages = [
  {
    name: "Premium",
    imgSrc: "/eu.png",
    description: "kvalita",
    features: ["Nejnižší cena v ČR", "Doživotní garance"],
    bgColor: "#F3F4F6",
    textColor: "text-black",
  },
  {
    name: "Local",
    imgSrc: "/cz.png",
    description: "z Česka",
    features: ["Jen reální a aktivní", "100% sledující z Česka"],
    bgColor: "#FFEED5",
    textColor: "text-black",
  },
];
