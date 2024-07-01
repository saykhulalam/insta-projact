"use client";
import React, { useEffect } from "react";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import dynamic from "next/dynamic";
import Link from "next/link";
// import { menu } from "./data";
const Sidebar = dynamic(
  () => import("react-pro-sidebar").then((mod) => mod.Sidebar),
  { ssr: false }
);

type Props = {
  setToggled: any;
  toggled: boolean;
};

const menu = [
  {
    id: 1,
    name: "Instagram Followers",
    link: "/instagram-followers",
  },
  {
    id: 2,
    name: "Vyber Profilu",
    link: "/instagram-followers-vyber-profilu",
  },
  {
    id: 3,
    name: "Vyber Fotografii",
    link: "/instagram-followers-vyber-fotografii",
  },
];

const FCSidebar: React.FC<Props> = (props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code that depends on the window object can go here
    }
  }, []);

  return (
    <div style={{ display: "flex", height: "100%", zIndex: "9999999" }}>
      <Sidebar
        onBackdropClick={() => props.setToggled(false)}
        toggled={props.toggled}
        breakPoint="all" // Change to "all" for consistency
        backgroundColor="#fff"
        className="fixed top-0 left-0 h-full w-64 z-50 shadow-lg"
        // rtl={true}
      >
        <div className="w-full px-3 py-3 flex justify-end">
          <button
            onClick={() => props.setToggled(false)}
            className="text-black font-bold"
          >
            X
          </button>
        </div>

        <Menu className="mt-1 bg-red-900">
          {menu.map((menu, idx) => (
            <Link href={menu?.link} key={idx}>
              <MenuItem key={menu?.id}>
                <h6 className="text-black text-[14px] not-italic font-semibold leading-4 float-left">
                  {menu?.name}
                </h6>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default FCSidebar;
