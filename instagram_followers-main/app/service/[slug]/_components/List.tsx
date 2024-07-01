import React from "react";

type Props = {
  service:
    | {
        image: string;
        price: string;
        slug: string;
        description: string;
        views: {
          id: number;
          title: string;
          price: number;
        }[];
        advantages: string[];
      }
    | undefined;
};

const List: React.FC<Props> = (props) => {
  return (
    <div className="bg-white md:p-10 p-5 rounded-2xl max-w-[600px] mx-auto">
      {/* advantages list here */}
      <h1 className="text-center text-lg md:text-xl font-semibold text-black">
        Výhody:
      </h1>
      <ul className="grid grid-cols-1 gap-3 mt-5">
        {props.service?.advantages?.map((advantage, idx) => (
          <li
            key={idx}
            className="text-lg font-medium text-black flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {advantage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
