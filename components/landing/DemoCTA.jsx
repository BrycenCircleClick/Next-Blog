import React from "react";

const DemoCTA = (props) => {
  return (
    <div className="flex flex-col relative">
      <div className="absolute -top-[50%] right-[-100%] left-[-100%] bottom-[-100vh] bg-gradient-to-b from-gray-400 to-white z-[-2]" />
      <div
        className="absolute -top-[50%] left-[-75%] lg:left-[-25%] h-full w-[500px] opacity-90 z-[-1]"
        style={{
          borderRadius: "1551.722px",
          background:
            "linear-gradient(180deg, #E7326A 0%, #FF292F 24.48%, #FF7B01 56.77%, #F2DE02 85.94%, #AEF61C 98.44%)",
          filter: "blur(257px)",
        }}
      />
      <header className="self-center flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-sm:justify-center text-center">
        <h1 className="text-zinc-900 text-3xl leading-[116.55px] grow shrink basis-auto my-auto max-md:max-w-full max-md:text-4xl max-sm:leading-9 max-sm:text-2xl font-light">
          AI-enhanced workforce education at scale.
        </h1>
        <button
          className="text-zinc-900 text-lg font-medium leading-3 whitespace-nowrap justify-center items-center border self-center px-8 py-4 rounded-3xl border-solid border-zinc-900 max-md:px-8 max-sm:w-fit max-sm:text-center max-sm:h-fit mx-auto"
          role="button"
        >
          Get a Demo
        </button>
      </header>

      <div className="text-zinc-900 max-w-[80vw] leading-[50px] md:leading-[80px] md:text-7xl  max-md:text-4xl max-md:leading-10 max-md:mt-10  text-left md:text-left ">
        <span className="" role="heading" aria-level="1">
          The Future of upskilling
          <br className="visible xl:hidden" />
          <span className="font-bold"> is here.</span>
        </span>
        <span className="leading-[93px]"></span>
      </div>
      <p className="text-zinc-900 text-lg font-medium leading-8 self-center w-[701px] max-w-full ml-0 lg:ml-44 mt-8 max-md:mt-10 max-sm:mt-5">
        At Ahura, our mission is to inspire, educate, and ignite your passion
        for the cosmos. We are your premier destination for all things related
        to space exploration, astronomy, and the mysteries of the universe.
        Whether you're a seasoned astronomer or a curious novice, join us on a
        journey to the furthest reaches of the cosmos.
      </p>
    </div>
  );
};

export default DemoCTA;
