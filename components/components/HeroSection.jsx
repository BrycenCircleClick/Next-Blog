import * as React from "react";

const HeroSection = ({ props }) => {
  return (
    <div className="flex-col overflow-hidden relative flex w-screen aspect-[1920/927] h-[60vh] md:h-[750px] lg:h-[927px] justify-center items-center px-16 py-12 max-md:px-5">
      <img
        src="https://ahuraai.com/wp-content/react-app/HomepageHeroImage-500.webp"
        srcSet="https://ahuraai.com/wp-content/react-app/HomepageHeroImage-500.webp 500w, 
        https://ahuraai.com/wp-content/react-app/HomepageHeroImage-1000.webp 1000w, 
        https://ahuraai.com/wp-content/react-app/HomepageHeroImage-1500.webp 1500w"
        sizes="(max-width: 600px) 500px,
        (max-width: 900px) 1000px,
        1500px"
        className="absolute h-full w-full object-cover object-center inset-0 "
        id="heroID"
        alt="Hero"
      />
      <div
        className=" flex flex-col text-[9vw] md:text-[70px] lg:text-[100px] leading-[9vw] md:leading-[75px] lg:leading-[110px] font-bold items-stretch absolute bottom-[10px] md:bottom-[10%] mb-8 max-md:max-w-full "
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      >
        <div className="text-white max-md:max-w-full  font-semibold">
          {" "}
          Capture each &{" "}
        </div>
        <div className=" bg-clip-text  max-md:max-w-full  font-bold">
          <div
            style={{
              background:
                "linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            every moment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
