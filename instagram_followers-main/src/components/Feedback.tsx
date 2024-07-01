import { reviews } from "@/_fakeData/reviews";
import FCSectionHeader from "@/src/components/FCSectionHeader";
import { InfiniteReviewMovingCards } from "@/src/ui/infinite-review-moving-cards";
import React from "react";

type Props = {
  // Define your props here (if any)
};

const Feedback: React.FC<Props> = (props) => {
  return (
    <div className="py-20">
      <FCSectionHeader
        title="Více než 300+ recenzí mluví za vše"
        info="Máme více než 300 recenzí od našich zákazníků, kteří nás hodnotí průměrně 4,9 z 5 hvězdiček."
      />

      <div className="mt-10">
        <InfiniteReviewMovingCards
          items={reviews?.slice(0, 10)}
          direction="right"
          speed="slow"
        />
        <InfiniteReviewMovingCards
          items={reviews?.slice(11, 20)}
          direction="left"
          speed="slow"
        />
        <InfiniteReviewMovingCards
          items={reviews?.slice(21, 30)}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Feedback;
