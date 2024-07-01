import React from "react";

type Props = {
  // Define your props here (if any)
};

const Empty: React.FC<Props> = (props) => {
  return (
    <div className="p-6 flex flex-col space-y-4 w-full overflow-y-auto flex-grow text-gray-900">
      <div className="flex flex-col justify-center text-center pt-12 pb-0">
        <div>
          <img
            alt="Empty Cart"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="mx-auto h-auto min-w-[180px] max-w-[230px] my-10"
            src="/add-to-cart.svg"
          />
        </div>
        <div>
          <h1 className="px-4 text-xl font-bold tracking-tighter text-transparent md:text-2xl bg-clip-text bg-gradient-to-r hero-h1-gradient drop-shadow">
            Máte úplně prázdný košík...
          </h1>
          <p className="px-6 pt-2 text-sm md:text-base">
            Měli byste si na svůj profil vybrat něco pěkného. 🙈
          </p>
        </div>
      </div>
    </div>
  );
};

export default Empty;
