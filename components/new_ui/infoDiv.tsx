import React from "react";

type InfoDivProps = {
  title: string;
  children: React.ReactNode;
};

const InfoDiv = (props: InfoDivProps) => {
  return (
    <div
      id={props.title}
      className="flex flex-col md:flex-row justify-between items-start w-full gap-4 md:gap-0"
    >
      <h3 className="text-2xl md:text-3xl font-bold urbanist-font">
        {props.title}
      </h3>
      <div className="w-full md:w-[calc(50%+100px)] text-base">
        {props.children}
      </div>
    </div>
  );
};

export default InfoDiv;
