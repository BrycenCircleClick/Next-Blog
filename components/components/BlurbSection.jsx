import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const BlurbSection = ({ blurbs }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });

  return (
    <div className="container mx-auto max-w-6xl px-4 mb-5 font-inter">
      <div className="flex flex-wrap -mx-4 lg:mx-0 h-full pt-10 pb-16 ">
        {blurbs &&
          blurbs.map((blurb, i) => (
            <motion.div
              ref={i === 0 ? ref1 : i === 1 ? ref2 : i == 2 && ref3}
              className="w-full lg:w-1/3 px-4 self-start pb-5 lg:pb-0"
              style={{
                transform:
                  i === 0
                    ? isInView1
                      ? "translateX(0)"
                      : "translateX(-100%)" // Transform for i=0
                    : i === 1
                      ? isInView2
                        ? "translateX(0)"
                        : "translateX(-100%)" // Transform for i=1
                      : isInView3
                        ? "translateX(0)"
                        : "translateX(-100%)", // Transform for i=2
                opacity:
                  i === 0
                    ? isInView1
                      ? 1
                      : 0 // Transform for i=0
                    : i === 1
                      ? isInView2
                        ? 1
                        : 0 // Transform for i=1
                      : isInView3
                        ? 1
                        : 0, // Transform for i=2
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  loading="lazy"
                  src={blurb.image}
                  className="w-[74px] h-[74px] object-contain"
                  alt={blurb.image}
                />
                <div className="text-2xl leading-[2.5rem] font-semibold my-10 mb-5 text-black">
                  {blurb.headingtext}
                </div>
                <div className="text-[18px] text-left leading-[30px] text-black/70 ">
                  {blurb.bodytext}
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default BlurbSection;
