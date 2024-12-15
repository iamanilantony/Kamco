import React from "react";

type InfoDivProps = {
  title: string;
  children: React.ReactNode;
};

const InfoDiv = (props: InfoDivProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full gap-4 md:gap-0">
      <h3 className="text-2xl md:text-4xl font-bold urbanist-font">
        {props.title}
      </h3>
      <div className="w-full md:w-1/2 text-base md:text-lg">
        {props.children}
      </div>
    </div>
  );
};

export default InfoDiv;
