import React from "react";

const ManGrid = ({
  text1,
  text2,
  text3,
  text1bold,
  text2bold,
  text3bold,
  gridimage,
}) => {
  const gridContainersDiv =
    "flex justify-center items-center aspect-[8/6] h-full  w-[90vw] md:w-[40vw]   border-[#1F1F1F] max-w-[800px] ";

  const gridContainersH1 =
    "text-zinc-900 clamp-grid-text text-left   relative box-border self-center ";

  return (
    <div className="mb-5 mt-10 font-lato leading-[1.5]">
      <div className="w-screen h-[1px] aspect-[1/6] absolute  bg-[#1F1F1F]" />
      <div className="w-fit h-fit mx-auto grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 ">
        <div className={`${gridContainersDiv}  border-[1px] `}>
          <p className={`${gridContainersH1} `}>
            <span className="font-[900]">{text1bold ? text1bold : ""}</span>
            {text1
              ? text1
              : "Our AI-powered solution optimizes your supply chain by analyzing data, identify inefficiencies, and providing actionable insights."}
          </p>
        </div>
        <div
          className={`bg-white  border-[1px] border-t-0  md:border-t-[1px] md:border-l-0 ${gridContainersDiv}`}
        >
          {" "}
          <div className="flex justify-center items-center w-full h-full border-[1px] border-[#1F1F1F]  relative  mix-blend-difference flex-col  overflow-hidden   self-center   text-zinc-900">
            <img
              loading="lazy"
              src={gridimage ? gridimage : ""}
              className="absolute w-full h-auto object-cover object-center inset-0"
            />

            <div className="relative flex flex-col items-stretch mt-44 mb-36 max-md:my-10">
              <div className="text-zinc-100 text-center text-3xl leading-[31.6px] self-center w-[243px]">
                Get up to
              </div>
              <div className="text-zinc-100 text-5xl leading-[32.26px] self-center whitespace-nowrap mt-2 max-md:text-4xl">
                3x
              </div>
              <div className="text-zinc-100 text-center text-3xl leading-[31.6px] whitespace-nowrap mt-6">
                faster learning
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-[1px] absolute my-[-1px] bg-[#1F1F1F]" />
      <div className="w-fit h-fit mx-auto grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2">
        <div className={`${gridContainersDiv} border-[1px]  border-t-[0px] `}>
          <p className={`${gridContainersH1} `}>
            <span className="font-[900]">{text2bold ? text2bold : ""}</span>
            {text2
              ? text2
              : "Our AI-powered solution optimizes your supply chain by analyzing data, identify inefficiencies, and providing actionable insights."}
          </p>
        </div>
        <div
          className={`${gridContainersDiv} border-[1px] border-t-0 md:border-l-0 `}
        >
          <p className={`${gridContainersH1} `}>
            <span className="font-[900]">{text3bold ? text3bold : ""}</span>
            {text3
              ? text3
              : "Our AI-powered solution optimizes your supply chain by analyzing data, identify inefficiencies, and providing actionable insights."}
          </p>
        </div>
      </div>
      <div className="w-screen h-[1px] absolute  my-[-1px] bg-[#1F1F1F] " />
    </div>
  );
};

export default ManGrid;
