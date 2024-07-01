import { ourOffer } from "@/_fakeData/ourOffer";
import Container from "@/src/components/Container";
import FCSectionHeader from "@/src/components/FCSectionHeader";
import React from "react";
import SingleOffer from "./SingleOrder";

type Props = {
  // Define your props here (if any)
};

const OurOffer: React.FC<Props> = (props) => {
  return (
    <div className="py-20">
      <Container>
        <div>
          <FCSectionHeader
            title="Nabídneme vám více, než ostatní"
            info="Z tohoto důvodu nám důvěřuje již více než 15 000 zákazníků. Jsme na trhu již více než 3 roky."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {ourOffer?.map((item) => (
              <SingleOffer key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurOffer;
