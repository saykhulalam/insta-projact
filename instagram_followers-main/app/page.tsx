import Layout from "@/src/layout/Layout";
import Hero from "./_components/Hero";
import List from "./_components/List";
import Logos from "./_components/Logos";
import Feedback from "../src/components/Feedback";
import OurOffer from "./_components/OurOffer";
import Faqs from "./_components/Faqs";
import GetStarted from "../src/components/GetStarted";

export default function Home() {
  return (
    <main>
      <Layout>
        <Hero />
        
        <Logos />
        <Feedback />
        <OurOffer />
        <Faqs />
        <GetStarted />
      </Layout>
    </main>
  );
}
