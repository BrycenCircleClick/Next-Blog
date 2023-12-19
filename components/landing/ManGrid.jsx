import React from "react";

const ManGrid = () => {
  return (
    <div className="flex-col flex items-center">
      <div className="w-full justify-center flex items-center h-[500px] flex-row mt-[px] max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col relative shrink-0 box-border max-w-[50%] h-auto self-stretch justify-center items-center border-0 border-solid">
          <h1 className="text-zinc-900 text-3xl leading-9 grow shrink basis-auto text-center relative box-border max-md:max-w-full max-sm:text-center max-sm:aspect-[1:1px]">
            Our AI-powered solution optimizes your supply chain by analyzing
            data, identify inefficiencies, and providing actionable insights.
          </h1>
        </div>
        <div className="flex flex-col relative shrink-0 box-border w-auto h-auto self-stretch grow items-center justify-center border-0 border-solid bg-white">
          <div className="flex-col mix-blend-difference overflow-hidden relative flex grow justify-center items-center w-auto self-center py-12 max-md:max-w-full max-md:px-5 ">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e505ba8d075fc996b2133fe96ce368b420a92d54d5d5c70e3376f9d73e510e34?apiKey=15589348c8884353aa1a6f32b20bd58b&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative flex flex-col items-stretch mt-44 mb-36 max-md:my-10">
              <div className="text-zinc-900 text-center text-4xl leading-[51.6px] self-center w-[243px]">
                Get up to
              </div>
              <div className="text-zinc-900 text-7xl leading-[52.26px] self-center whitespace-nowrap mt-2 max-md:text-4xl">
                3x
              </div>
              <div className="text-zinc-900 text-center text-4xl leading-[51.6px] whitespace-nowrap mt-6">
                faster learning
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex items-center h-[500px] flex-col md:flex-row mt-[px] max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        {" "}
        <div className="w-full  justify-center flex items-center h-[500px] flex-row  max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col relative shrink-0 box-border max-w-[50%] h-auto self-stretch justify-center items-center border-0 border-solid">
            <h1 className="text-zinc-900 text-3xl leading-9 grow shrink basis-auto text-center relative box-border max-md:max-w-full max-sm:text-center max-sm:aspect-[1:1px]">
              Our AI-powered solution optimizes your supply chain by analyzing
              data, identify inefficiencies, and providing actionable insights.
            </h1>
          </div>{" "}
          <div className="flex flex-col relative shrink-0 box-border max-w-[50%] h-auto self-stretch justify-center items-center border-0 border-solid">
            <h1 className="text-zinc-900 text-3xl leading-9 grow shrink basis-auto text-center relative box-border max-md:max-w-full max-sm:text-center max-sm:aspect-[1:1px]">
              Our AI-powered solution optimizes your supply chain by analyzing
              data, identify inefficiencies, and providing actionable insights.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManGrid;
