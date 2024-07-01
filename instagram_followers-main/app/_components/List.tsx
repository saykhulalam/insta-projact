import React from "react";

type Props = {
  // Define your props here (if any)
};

const List: React.FC<Props> = (props) => {
  return (
    <div className="py-5">
      <div className="w-full mx-auto mt-6">
        <div className="card2-wrapper">
          <div className="rounded-[20px] bg-white text-card-foreground shadow-owncard2 px-6 sm:px-8 py-6 font-medium">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-secondary text-white w-auto h-auto p-1.5">
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
                    className="lucide lucide-camera w-4 h-4"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </div>
                <div className="mt-[1px] md:text-lg text-base">
                  Nakupují u nás influenceři
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-secondary text-white w-auto h-auto p-1.5">
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
                    className="lucide lucide-clock w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="mt-[1px] md:text-lg text-base">
                  <span>
                    Doba doručení: <b className="text-secondary">27 sekund</b>{" "}
                    ⚡️
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-secondary text-white w-auto h-auto p-1.5">
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
                    className="lucide lucide-refresh-cw w-4 h-4"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                </div>
                <div className="mt-[1px] md:text-lg text-base">
                  Doživotní garance
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-secondary text-white w-auto h-auto p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-4 h-4"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="mt-[1px] md:text-lg text-base">
                  Nejvyšší kvalita v Česku
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-secondary text-white w-auto h-auto p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-4 h-4"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="mt-[1px] md:text-lg text-base">
                  100% anonymně a bez rizika
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
