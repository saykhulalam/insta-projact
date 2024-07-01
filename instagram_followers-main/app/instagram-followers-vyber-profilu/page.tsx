import Container from "@/src/components/Container";
import Header from "@/src/layout/Header";
import Layout from "@/src/layout/Layout";
import React from "react";
import Follower from "./_components/Follower";
type Props = {
  // Define your props here (if any)
};

const Followers: React.FC<Props> = async (props) => {
  return (
    <Layout>
      <Header />
      <Container>
        <div className="py-20">
          <Follower />
        </div>
      </Container>
    </Layout>
  );
};

export default Followers;
