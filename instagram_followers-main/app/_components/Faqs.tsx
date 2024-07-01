import Container from "@/src/components/Container";
import FCSectionHeader from "@/src/components/FCSectionHeader";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faqs } from "@/_fakeData/faqs";

type Props = {
  // Define your props here (if any)
};

const Faqs: React.FC<Props> = (props) => {
  return (
    <div className="py-20">
      <Container>
        <div>
          <FCSectionHeader
            title="Máme odpovědi na vaše otázky"
            info="Sepsali jsme pro vás odpovědi na otázky, na které se nejčastěji ptáte."
          />

          <div className="mx-auto w-full max-w-4xl mt-10 flex flex-col space-y-5">
            {faqs?.map((item, index) => (
              <Disclosure
                as="div"
                className="p-6 bg-white rounded-xl"
                key={index}
                defaultOpen={index === 0}
              >
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-lg text-left font-bold text-black group-data-[hover]:text-blackSecondary">
                    {item?.question}
                  </span>
                  <ChevronDownIcon className="size-5 fill-secondary group-data-[hover]:fill-secondary/20 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-base text-blackSecondary">
                  {item?.answer}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faqs;
