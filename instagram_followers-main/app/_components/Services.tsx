import { services } from "@/_fakeData/services";
import { InfiniteServicesMovingCards } from "@/src/ui/infinite-services-moving-cards";

import React from "react";

type Props = {
  // Define your props here (if any)
};

const Services: React.FC<Props> = (props) => {
  return (
    <div className="bg-secondary/20 flex flex-col overflow-hidden max-w-3xl mx-auto rounded-3xl from-0% via-[#F7F7F7] via-40% to-orange-50 px-2 py-4 pb-2 mt-6 sm:mt-8">
      <div className="flex items-center">
        <div className="w-6 h-6 flex justify-center items-center bg-orange-200 rounded-lg mr-2">
          🎁
        </div>
        <div className="text-xl font-bold text-black">Jen DNES 50% sleva</div>
      </div>
      <InfiniteServicesMovingCards
        items={services}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Services;
