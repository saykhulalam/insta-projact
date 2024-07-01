"use client";

import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import Spinner from "@/src/ui/Spinner";
import { useProducts } from "@/src/context/ProductContext";
import { productType } from "@/src/type";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type IUser = productType[];

type IFollower = productType;

const Follower: React.FC = () => {
  const [instagramUsername, setInstagramUsername] = useState<string>("");
  const [user, setUser] = useState<IUser>([]);
  const [landing, setLanding] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // State for selected user ID
  const [selectUser, setSelectUser] = useState<IFollower>();
  const { addProduct, storeDetails } = useProducts();

  const router = useRouter();

  useEffect(() => {
    if (selectUser) {
      setInstagramUsername(selectUser?.full_name);
    }
  }, [selectUser]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInstagramUsername(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Profil byl úspěšně vybrán.");
    // @ts-ignore
    addProduct({ ...storeDetails, selectUser });
    setTimeout(() => {
      router.push("/");
    }, 300);
  };

  const fetchInstagramFollowers = async () => {
    setLanding(true);
    try {
      const response = await axios.get("/api/searchUser", {
        params: {
          search_query: instagramUsername,
        },
      });

      const data = await response?.data;
      const user = await data?.data?.items;

      if (user) {
        setUser(user);
        setLanding(false);
      }
    } catch (error) {
      console.error("Error fetching Instagram data:", error);
    }
  };

  useEffect(() => {
    if (instagramUsername?.length >= 3) {
      fetchInstagramFollowers();
    } else {
      setUser([]);
    }
  }, [instagramUsername]);

  return (
    <div className="rounded-[20px] bg-white md:w-[600px] px-2 py-6 h-fit mx-auto">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="tracking-tight text-center pb-2 font-bold text-2xl">
          Zadání základních údajů
        </h3>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1 text-sm">
              Zadejte Instagram přezdívku
            </label>
            <div className="relative my-4">
              <img
                alt="input icon"
                loading="lazy"
                width="22"
                height="22"
                decoding="async"
                className="absolute top-1/2 left-[16px] transform -translate-y-1/2 opacity-60"
                src="https://utfs.io/f/6320f2c2-6253-42be-9746-8ecc97766e5d-nyy399.svg"
                style={{ color: "transparent" }}
              />
              <input
                className="flex h-10 w-full border border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 py-[25px] rounded-xl pl-12 text-base shadow-xs focus-visible:ring-[2px] focus-visible:ring-offset-0 transition duration-100 focus-visible:ring-[#fd7702] focus-visible:shadow-newxl font-medium"
                placeholder="leosmares"
                value={instagramUsername}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-start mt-2 ml-1 text-sm text-gray-400">
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
              className="lucide lucide-shield-check w-5 h-5 text-green-400 mr-1"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            Nikdy po vás nebudeme požadovat vaše heslo.
          </div>
          <div className="flex flex-col justify-center items-center pt-8">
            <button
              disabled={selectedUserId ? false : true}
              className="justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 z-[5] relative rounded-lg text-md text-white font-medium shadow-md hover:shadow-lg transition duration-150 bg-blackSecondary hover:bg-[#fd7702] h-10 py-6 px-8 flex items-center bg-brand mt-4"
            >
              Pokračovat
            </button>
          </div>
        </form>
      </div>

      {landing ? (
        <div className="py-20">
          {/* loading */}
          <Spinner />
        </div>
      ) : (
        <>
          {/* all Follower */}
          <div className="w-full px-4 space-y-5 max-h-[600px] overflow-y-scroll">
            {user?.map((follower) => (
              <div
                key={follower?.id}
                onClick={() => {
                  setSelectUser(follower);
                  setSelectedUserId(follower?.id);
                }} // Update selected user ID
                className={`flex flex-row items-center justify-between py-3 px-4 rounded-2xl overflow-hidden transition duration-300 ease-in-out cursor-pointer 
                  ${
                    selectedUserId === follower?.id
                      ? "border-2 border-blue-500 shadow-lg"
                      : "hover:shadow-lg bg-secondary/40"
                  }`}
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={"/profile.jpg"}
                    alt={follower?.full_name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {follower.full_name}
                    </h3>
                    <p className="text-gray-400">@{follower.username}</p>
                  </div>
                </div>
                <div>
                  <button className="border border-blackSecondary py-2 px-4 rounded-md">
                    Views
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Follower;
