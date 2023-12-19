import * as React from "react";

const HeroSection = (props) => {
  return (
    <div className="flex-col overflow-hidden relative flex h-[50vh] justify-center items-center px-16 py-12 max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f425804014cfba62fa7270a7217924c01bd045a8b1bea3fa659cdf232aaca3?apiKey=15589348c8884353aa1a6f32b20bd58b&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className=" flex flex-col items-stretch absolute bottom-[100px] mb-8 max-md:max-w-full max-md:mt-10">
        <header className="text-white text-center text-8xl leading-[90px] max-md:max-w-full max-md:text-4xl font-semibold">
          {" "}
          Capture each &{" "}
        </header>
        <h1 className="text-center text-8xl leading-[90px] bg-clip-text mt-2.5 mx-6 max-md:max-w-full max-md:text-4xl max-md:mr-2.5 font-bold">
          <span
            style={{
              background:
                "linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            every moment.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
