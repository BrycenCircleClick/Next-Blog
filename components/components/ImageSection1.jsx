import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "./Container";
const homepageTopVideoUrl = "/uploads/iStock-1352464078.mp4";
const homepageBottomVideoUrl = "/uploads/iStock-939307278.mp4";
const ImageSection1 = ({
  image1,
  image2,
  image3,
  video2,
  video3,
  text1,
  text2,
  text3,
  text1bold,
  text2bold,
  text3bold,
}) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const isInView3 = useInView(ref3, { once: false });
  return (
    <Container>
      <div className="gap-0 flex max-md:flex-col max-md:items-stretch max-md:gap-0 font-jakarta ">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch px-0 max-md:max-w-full max-md:mt-9">
            <motion.div
              ref={ref1}
              className="flex flex-col relative shrink-0 box-border"
              style={{
                transform: isInView1 ? "none" : "translateX(-20%)",
                opacity: isInView1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {image1 && (
                <img
                  loading="lazy"
                  srcSet={image1}
                  className="aspect-[0.74] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  alt="Image description"
                />
              )}
              <div className="text-zinc-900  p-2  max-md:max-w-full">
                <p className="text-lg ">
                  {" "}
                  {text1bold && (
                    <span className="font-bold leading-8">
                      {text1bold ? text1bold : ""}
                    </span>
                  )}
                  {text1
                    ? text1
                    : "At Ahura, our mission is to inspire, educate, and ignite your passion for the cosmos."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-2 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch px-0 md:px-2 max-md:max-w-full max-md:mt-9">
            <motion.div
              ref={ref2}
              className="flex flex-col relative shrink-0 box-border"
              style={{
                transform: isInView2 ? "none" : "translateX(20%)",
                opacity: isInView2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {image2 && !video2 ? (
                <img
                  loading="lazy"
                  srcSet={image2}
                  className="aspect-[1.4] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  alt="Image description"
                />
              ) : (
                ""
              )}
              {video2 && (
                <video
                  loading="lazy"
                  className="aspect-[1] object-cover object-center w-full overflow-hidden max-md:max-w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={homepageTopVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="text-zinc-900  p-2 max-md:max-w-full">
                <p className="text-lg ">
                  {" "}
                  <span className="font-bold leading-8">
                    {text2bold ? text2bold : ""}
                  </span>
                  {text2
                    ? text2
                    : "At Ahura, our mission is to inspire, educate, and ignite your passion for the cosmos."}
                </p>
              </div>
            </motion.div>
            <motion.div
              ref={ref3}
              className="flex flex-col relative shrink-0 box-border"
              style={{
                transform: isInView3 ? "none" : "translateX(20%)",
                opacity: isInView3 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {image3 && !video3 ? (
                <img
                  loading="lazy"
                  srcSet={image3}
                  className="aspect-[1.22] object-contain object-center w-full overflow-hidden mt-7 max-md:max-w-full"
                  alt="Image description"
                />
              ) : (
                ""
              )}
              {video3 && (
                <video
                  loading="lazy"
                  className="aspect-[1] object-cover object-center w-full overflow-hidden max-md:max-w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={homepageBottomVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="text-zinc-900  p-2 max-md:max-w-full">
                <p className="text-lg ">
                  {" "}
                  <span className="font-bold leading-8">
                    {text3bold ? text3bold : ""}
                  </span>
                  {text3
                    ? text3
                    : "At Ahura, our mission is to inspire, educate, and ignite your passion for the cosmos."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageSection1;
