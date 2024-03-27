import React from "react";
import Container from "./Container";

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
      <Container>
        {" "}
        <div className="self-center flex items-center justify-around max-md:max-w-full flex-wrap lg:flex-nowrap max-sm:justify-center text-center clamp-CTA">
          <h1 className="text-zinc-900  basis-auto my-auto max-md:max-w-full font-light">
            AI-enhanced workforce education at scale.
          </h1>
          <a
            className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-light whitespace-nowrap justify-center items-center border self-center rounded-3xl lg:rounded-[60px] border-solid border-zinc-900 max-w-[75vw] max-sm:w-full lg:w-fit my-5 md:my-0 px-4 lg:px-8 py-2 lg:py-4 hover:bg-zinc-900 hover:text-zinc-200 hover:no-underline hover:font-normal transition-all duration-200 hover:shadow-xl"
            role="button"
            href="https://ahuraai.com/signup/"
          >
            Get a Demo
          </a>
        </div>
      </Container>

      <Container
        className={`flex flex-col   w-full relative mx-auto p-2 pt-0 md:p-5`}
      >
        {" "}
        <div className="text-zinc-900 w-full max-w-xl md:max-w-3xl lg:max-w-full text-[8.5vw]  md:text-7xl lg:text-[100px] leading-[8.5vw] lg:leading-[105px]  ml-0 lg:ml-[2vw] ">
          <span className="self-center text-left" role="heading" aria-level="1">
            The Future of
            <br className="visible" />
            upskilling
            <span className="font-bold"> is here.</span>
          </span>
        </div>
        <p className="text-zinc-900 text-base md:text-lg  font-jakarta font-medium leading-normal md:leading-[33px] self-end w-full max-w-3xl  mr-0 pl-2 md:pl-[10vw] lg:pl-0  lg:mr-[5vw] mt-5">
          In a world where the only constant is change, Ahura stands as a beacon
          of innovation in corporate learning. We've mastered the art of digital
          education, revolutionizing how enterprises train, upskill, and reskill
          their workforce. Our platform isn't just a learning tool; it's a
          gateway to the future of work, designed for today's dynamic business
          environment.
        </p>
      </Container>
    </div>
  );
};

export default DemoCTA;
