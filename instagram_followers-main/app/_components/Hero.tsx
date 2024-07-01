import Header from "@/src/layout/Header";
import React from "react";
import Services from "./Services";
import Container from "@/src/components/Container";
import List from "./List";

type Props = {
  // Define your props here (if any)
};

const Hero: React.FC<Props> = (props) => {
  return (
    <div className="bg-gradient-to-r from-[#f8fafc] to-[#f4f4f5] w-full">
      <Header />

      <Container>
        <div className="py-20">
          {/* google rating start */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="border-secondary border px-4 py-2 rounded-3xl w-fit flex items-center space-x-2 bg-white/50 cursor-pointer">
              <div className="flex items-center">
                <img src="/google.svg" className="w-5 h-5 mr-1 mt-0.5" alt="" />
                <div className="flex -space-x-[1px]">
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="h-5 w-5 fill-brand"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="h-5 w-5 fill-brand"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="h-5 w-5 fill-brand"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="h-5 w-5 fill-brand"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                    className="h-5 w-5 fill-brand"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div className="ml-1.5 text-[15px] mt-0.5">
                  <span className="font-semibold mr-[1px]">4,9</span>/5
                </div>
              </div>
            </div>
          </div>
          {/* google rating end */}
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl sm:text-[45px] font-extrabold text-center text-black leading-[38px] sm:leading-[53px]">
              Získejte <span className="text-blackSecondary">nové</span>{" "}
              fanoušky z Česka za pár sekund! 🇨🇿
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium sm:leading-[32px] leading-snug text-gray-600 text-center">
              Nejvyšší kvalita v ČR. 24/7 podpora. Automatické doručení ihned.
            </p>

            <Services />
            <List />
          </div>

          {/* services */}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
