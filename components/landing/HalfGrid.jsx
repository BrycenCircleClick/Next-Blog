import React from "react";

const ManGrid = () => {
  const vMan =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&";

  const gridContainersDiv =
    "flex flex-col relative  justify-center items-center border-black/30 border-[1px] md:w-[40vmin] w-[80vw] h-[80vw]  md:h-[40vmin] ";

  const gridContainersH1 =
    "text-zinc-900 text-xs md:text-xl lg:text-3xl p-4 text-center relative box-border max-md:max-w-full max-sm:text-center max-sm:aspect-[1:1px] self-center flex";

  return (
    <div className="my-8">
      <div className="w-screen h-[1px] my-[-1px] bg-black/30" />
      <div className="w-[80vmin] h-fit mx-auto grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 ">
        <div className="flex justify-center items-center  md:w-[40vmin] w-[80vw] h-[80vw]  md:h-[40vmin] border-[1px] border-black/30 mr-0 md:mr-[-1px]">
          <p className="text-zinc-900 text-xl md:text-2xl lg:text-3xl p-4 text-center relative box-border max-md:max-w-full max-sm:text-center max-sm:aspect-[1:1px] self-center flex font-medium">
            {" "}
            Our AI-powered solution optimizes your supply chain by analyzing
            data, identify inefficiencies, and providing actionable insights.
          </p>
        </div>
        <div className={`bg-white ml-0 md:ml-[-1px]  ${gridContainersDiv}`}>
          {" "}
          <div className="flex justify-center items-center  md:w-[40vmin] w-[80vw] h-[80vw]  md:h-[40vmin] border-[1px] border-black/30 mr-0 md:ml-[-1px] relative  mix-blend-difference  flex-col     overflow-hidden       self-center   text-zinc-900">
            <img
              loading="lazy"
              srcSet={vMan}
              className="absolute h-full w-full object-cover object-center inset-0"
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
      <div className="w-screen h-[1px]  my-[-1px] bg-black/30" />
      <div className="w-screen h-[1px]  my-[-1px] bg-black/30" />
    </div>
  );
};

export default ManGrid;
