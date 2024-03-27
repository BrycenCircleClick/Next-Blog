import React from "react";

const HalfGrid = () => {
  const gridContainersDiv =
    "flex justify-center items-center aspect-[800/618]  w-[90vw] md:w-[45vw]   border-[#1F1F1F] max-w-[800px] ";

  const gridContainersH1 =
    "text-zinc-900 text-xs md:text-xl lg:text-3xl p-4 text-center relative box-border max-md:max-w-full max-sm:text-center aspect-[1:1] self-center flex";

  return (
    <div className="my-8">
      <div className="w-screen h-[1px]  absolute bg-[#1F1F1F]" />
      <div className="w-fit h-fit mx-auto grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2">
        <div
          className={`bg-white border-[1px] border-b-0  ${gridContainersDiv}`}
        >
          {" "}
          <div
            className={` mix-blend-difference overflow-hidden   ${gridContainersDiv}`}
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/452cced90ceb7f7d74945b8457abc0458ef22abe5c1e9ac93455ccbe17108a7c?apiKey=15589348c8884353aa1a6f32b20bd58b&"
              className=" w-auto h-full object-cover object-center inset-0 "
            />
          </div>
        </div>{" "}
        <div
          className={`bg-white border-[1px] border-b-0 md:border-l-0 ${gridContainersDiv}`}
        >
          <p className="text-zinc-900 text-md md:text-lg lg:text-2xl p-4 text-center md:text-left  relative box-border max-md:max-w-full  max-sm:aspect-[1:1px] self-center  ">
            {" "}
            Our AI-powered solution optimizes your supply chain by analyzing
            data, identifying inefficiencies, and providing actionable insights.
          </p>
        </div>
      </div>
      <div className="w-screen h-[1px] absolute  my-[-1px] bg-[#1F1F1F]" />
    </div>
  );
};

export default HalfGrid;
