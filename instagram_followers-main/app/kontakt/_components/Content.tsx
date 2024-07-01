import React from "react";
import ContactForm from "./Form";
import Container from "@/src/components/Container";
import FCButton from "@/src/components/FCButton";

type Props = {
  // Define your props here (if any)
};

const Content: React.FC<Props> = (props) => {
  return (
    <div className="pt-0 md:pt-8">
      <Container>
        <div className="grid md:grid-cols-8 grid-cols-1 gap-2 md:gap-4">
          <div className="md:col-span-4 flex justify-center md:justify-start h-fit">
            <div className="mt-0 md:mt-20 p-6 md:p-0 space-y-10 w-fit mx-auto">
              <div className="flex">
                <div className="bg-darkGray h-fit w-fit p-2 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-messages-square text-white h-6 w-6"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold leading-10 text-gray-900">
                    24/7 Chat
                  </h3>
                  <p className="leading-6 text-gray-600">
                    Chatujte online s naší podporou.
                  </p>
                  {/* <button className="mt-1.5 font-semibold text-orange-600 bg-white hidden">
                    Začít chatovat 
                  </button> */}
                  <FCButton text="Začít chatovat" />
                </div>
              </div>
              <div className="flex">
                <div className="bg-darkGray h-fit w-fit p-2 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail text-white h-6 w-6"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold leading-10 text-gray-900">
                    Email
                  </h3>
                  <p className="leading-6 text-gray-600">
                    Napište nám na <b>info@sledujici.cz</b> nebo vyplňte
                    formulář
                  </p>
                  <a
                    href="#form"
                    className="mt-1.5 block font-semibold text-orange-600"
                  >
                    Vyplnit formulář <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="hidden">
                <div className="bg-gradient-to-tl from-orange-500 to-yellow-300 h-fit w-fit p-2 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-white h-6 w-6"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold leading-10 text-gray-900">
                    WhatsApp
                  </h3>
                  <p className="leading-6 text-gray-600">
                    Napište nám na WhatsApp a my se vám co nejdříve ozveme.
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=+420728050885"
                    target="_blank"
                    className="mt-1.5 font-semibold block text-orange-600"
                  >
                    +420728050885 <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Content;
