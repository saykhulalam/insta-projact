import React from "react";
import Container from "../components/Container";
import Link from "next/link";

type Props = {
  // Define your props here (if any)
};

const Footer: React.FC<Props> = (props) => {
  return (
    <div className="z-10 border-t border-secondary/50 py-8 mb-24">
      <Container>
        <div>
          <div className="md:flex md:justify-between">
            <div className="space-y-4 w-full md:w-auto md:text-left ">
              <div className="w-fit mx-auto md:mx-0">
                <Link href="/">
                  <img
                    src="/logo.webp"
                    className="w-[180px] h-auto"
                    alt="Logo"
                  />
                </Link>
              </div>
              <p className="max-w-xs mx-auto md:mx-0 text-[15px] text-gray-600 text-center md:text-left">
                Moderní online nástroj pro zvýšení popularity na sociálních
                sítích.
              </p>
              <div className="rounded-lg border border-secondary border-1 flex items-center w-fit px-3 py-2 text-xs mx-auto md:mx-0">
                <span className="relative flex ml-0.5 mr-2.5 h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-darkGray"></span>
                </span>
                Všechny služby funkční
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-8 text-center md:text-left mt-8 md:mt-0">
              <div></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Naše služby
                </h3>
                <ul className="mt-4 space-y-1">
                  <li>
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/all#instagram"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/all#tiktok"
                    >
                      TikTok
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/all#facebook"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/all#youtube"
                    >
                      YouTube
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Užitečné odkazy
                </h3>
                <ul className="mt-4 space-y-1">
                  <li>
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/reviews"
                    >
                      Recenze
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/tos"
                    >
                      Obchodní podmínky
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/privacy-policy"
                    >
                      Ochrana soukromí
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Kontaktujte nás
                </h3>
                <ul className="mt-4 space-y-1">
                  <li className="">
                    <Link
                      className="text-sm text-gray-600 hover:text-gray-900"
                      href="/contact"
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:flex items-center justify-between mt-14 mb-4">
            <div className="flex items-center justify-center md:justify-start space-x-1">
              <img
                alt="PayPal"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/paypal.svg"
              />
              <img
                alt="Visa"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/visa.svg"
              />
              <img
                alt="Mastercard"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/mastercard.svg"
              />
              <img
                alt="American Express"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/american-express.svg"
              />
              <img
                alt="Apple Pay"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/apple-pay.svg"
              />
              <img
                alt="Google Pay"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/google-pay.svg"
              />
            </div>

            <div className="flex items-center justify-center md:justify-end space-x-1 mt-2 md:mt-0">
              <img
                alt="Verified By Visa"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/verified.svg"
              />
              <img
                alt="Norton"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-auto w-[45px]"
                src="/norton.svg"
              />
            </div>
          </div>

          <div className="text-center sm:flex sm:justify-between sm:text-left mt-4">
            <div className="space-x-1 text-sm text-gray-500">
              <span>
                <Link className="hover:text-gray-800" href="/reviews">
                  Recenze
                </Link>
                <span className="ml-1">·</span>
              </span>
              <span>
                <Link className="hover:text-gray-800" href="/tos">
                  Obchodní podmínky
                </Link>
                <span className="ml-1">·</span>
              </span>
              <span>
                <Link className="hover:text-gray-800" href="/privacy-policy">
                  Ochrana soukromí
                </Link>
                <span className="ml-1 hidden">·</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              ©Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
