"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import FCSidebar from "./FCSidebar";
import FCCardDrawer from "../components/FCCardDrawer";
import { useProducts } from "../context/ProductContext";

type Props = {
  // Define your props here (if any)
};

const Header: React.FC<Props> = (props) => {
  const { products } = useProducts();
  const [toggled, setToggled] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };
  return (
    <div className="border-b border-secondary/20">
      <FCSidebar toggled={toggled} setToggled={setToggled} />
      <FCCardDrawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <div>
        <Container>
          <div className=" justify-between w-full h-[60px] z-50 transition  flex items-center">
            <Link href="/">
              <Image src="/logo.webp" alt="" width={160} height={60} />
            </Link>

            <div className="flex items-center gap-5">
              <ul className="md:flex hidden items-center gap-5">
                <li className="text-black text-base hover:text-secondary font-medium">
                  <Link href="/nase-sluzby">Nase sSluzby</Link>
                </li>
                <li className="text-black text-base hover:text-secondary font-medium">
                  <Link href="/kontakt">kontakt</Link>
                </li>

                {/* <li className="text-black text-base hover:text-black/60 font-medium">
                  <Link href="/instagram-followers-vyber-profilu">
                    Vyber Profilu
                  </Link>
                </li>
                <li className="text-black text-base hover:text-black/60 font-medium">
                  <Link href="/instagram-followers-vyber-fotografii">
                    Vyber Fotografii
                  </Link>
                </li> */}
              </ul>
              <div
                className="drawer-button w-10 h-10 justify-center items-center flex relative rounded-lg cursor-pointer hover:bg-secondary transition group"
                onClick={toggleDrawer}
              >
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
                  className="lucide lucide-shopping-bag w-[22px] h-[22px] text-black group-hover:text-white"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <div className="absolute top-1 right-0 rounded-md h-[15px] w-[15px] bg-gradient-to-tl from-secondary/80 to-secondary/90 text-white font-extrabold text-[11px] flex justify-center items-center">
                  {products?.length}
                </div>
              </div>
              {/* sidebar button */}
              <div className="xl:hidden block">
                <button
                  onClick={() => setToggled(!toggled)}
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
