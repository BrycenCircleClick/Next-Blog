import React from "react";

const HalfGrid = () => {
  const vMan =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&";

  const gridContainersDiv =
    "flex flex-col relative  w-[48vmin] h-[48vmin] md:w-[40vmin] justify-center items-center border-black/30 border-l-[1px]  ";

  const gridContainersH1 =
    "text-zinc-900 text-xs md:text-xl lg:text-3xl p-4 text-center relative box-border max-md:max-w-full max-sm:text-center max-sm:aspect-[1:1px] self-center flex";

  return (
    <div className="ContainerMain flex-col flex items-center my-8">
      <div className="w-screen h-[1px] bg-black/30" />
      <div className="topRow w-full justify-center  flex items-center h-fit flex-row max-md:max-w-full max-md:flex-wrap ">
        <div className={`${gridContainersDiv}`}>
          <h1 className={gridContainersH1}>
            Our AI-powered solution optimizes your supply chain by analyzing
            data, identify inefficiencies, and providing actionable insights.
          </h1>
        </div>
        <div
          className={`bg-white border-black/30 border-r-[1px]  ${gridContainersDiv}`}
        >
          <div className="flex flex-col relative  w-[40vmin] h-[40vmin] mix-blend-difference justify-center items-center border-0 border-solid  overflow-hidden   grow    self-center py-12 max-md:max-w-full max-md:px-5 text-zinc-900">
            <img
              loading="lazy"
              srcSet={vMan}
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative flex flex-col items-stretch mt-44 mb-36 max-md:my-10">
              <div className="text-zinc-100 text-center text-4xl leading-[51.6px] self-center w-[243px]">
                Get up to
              </div>
              <div className="text-zinc-100 text-7xl leading-[52.26px] self-center whitespace-nowrap mt-2 max-md:text-4xl">
                3x
              </div>
              <div className="text-zinc-100 text-center text-4xl leading-[51.6px] whitespace-nowrap mt-6">
                faster learning
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-[1px] bg-black/30" />

      <div className="w-screen h-[1px] bg-black/30" />
    </div>
  );
};

export default HalfGrid;
