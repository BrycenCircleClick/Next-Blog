import React from "react";
import Container from "../container";

const LearnToday = ({ header, h1, h2, body, button }) => {
  return (
    <Container>
      {" "}
      <div className="flex max-w-5xl flex-col px-5">
        {header != "" && (
          <span className="text-xl font-bold leading-5  self-stretch w-full mt-5 max-md:max-w-full max-sm:text-left max-sm:mt-5 ">
            <span
              style={{
                background:
                  "linear-gradient(91deg, #F00 1.33%, #C0B05C 95.69%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {header}
            </span>{" "}
          </span>
        )}

        {h1 != "" && (
          <h1 className="text-zinc-900 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[43px] md:leading-[53px] lg:leading-[86px] self-stretch w-full mt-2 max-md:max-w-full max-sm:font-semibold">
            {h1}
          </h1>
        )}
        {h2 != "" && (
          <h2 className="text-zinc-900 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[43px] md:leading-[53px] lg:leading-[86px] self-stretch w-full  max-md:max-w-full">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {h2}
            </span>
          </h2>
        )}
        {body != "" && (
          <div className="text-zinc-900 text-lg font-medium leading-8 self-stretch w-full mt-3 max-md:max-w-full max-md:mt-5">
            {body}
          </div>
        )}
        {button != "" && (
          <a
            href="#"
            className="text-white text-xl font-medium whitespace-nowrap justify-center items-stretch shadow-2xl bg-zinc-900 mt-11 px-10 py-3 rounded-3xl self-start max-md:mt-10 max-md:px-5 max-sm:text-center max-sm:self-center max-sm:w-[50vw] max-sm:mt-10"
          >
            {button}
          </a>
        )}
      </div>
    </Container>
  );
};

export default LearnToday;
