import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "./Container";

const LearnToday = ({ header, h1, h2, body, button }) => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });

  return (
    <Container className={` container relative mx-auto p-2 md:p-5 max-w-6xl`}>
      {" "}
      <div className="flex max-w-5xl flex-col px-2 md:px-5">
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
          <div className="text-zinc-900  bg-clip-border text-4xl md:text-6xl lg:text-7xl font-semibold  lg:leading-[86px] self-stretch w-full mt-2 max-md:max-w-full max-sm:font-semibold">
            {h1}
          </div>
        )}
        {h2 != "" && (
          <div className="text-zinc-900 text-4xl md:text-6xl lg:text-7xl font-semibold  lg:leading-[86px] self-stretch w-full  max-md:max-w-full">
            <motion.span
              ref={ref1}
              className="flex flex-col relative shrink-0 box-border"
              style={{
                background:
                  "linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)",

                scale: isInView1 ? "1" : ".8",
                opacity: isInView1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                color: "transparent",
                backgroundClip: "text",
                transformOrigin: "left",
              }}
            >
              {h2}
            </motion.span>
          </div>
        )}
        {body != "" && (
          <div className="text-zinc-900 text-lg font-medium leading-8 self-stretch w-full mt-3 max-md:max-w-full max-md:mt-5">
            {body}
          </div>
        )}
        {button != "" && (
          <a
            href="https://ahuraai.com/signup/"
            className="text-white text-xl font-medium whitespace-nowrap justify-center items-stretch shadow-2xl bg-zinc-900 mt-11 px-10 py-3 rounded-3xl self-center md:self-start hover:bg-zinc-200 hover:text-zinc-900 border-zinc-900 border-[1px] hover:no-underline transition-all duration-200 "
          >
            {button}
          </a>
        )}
      </div>
    </Container>
  );
};

export default LearnToday;
