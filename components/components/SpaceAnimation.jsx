import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SpaceAnimation = (props) => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const smallParallax = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const reverseParallax = useTransform(parallax, (v) => -v);
  const lax = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const slowLax = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const laxRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div className="w-screen h-fit">
      <div
        className="relative"
        style={{
          aspectRatio: "2.04",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          {" "}
          <source
            src="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/iStock-1465799002.mp4"
            type="video/mp4"
          />
        </video>
        <span className="text-[6vw] leading-[6vw] text-white font-bold font-poppins absolute bottom-[20%] left-[15%]">
          Reach new <br /> heights
        </span>
        <motion.img
          style={{ x: reverseParallax, scale: lax }}
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/966b4d3eb70115ea0f47a0a410609ab2fc4753bae5380ec1065147fd7b434bd5?apiKey=15589348c8884353aa1a6f32b20bd58b&"
          className="leftRocks aspect-[0.62] object-contain object-center h-full overflow-hidden  absolute z-10 left-0 scale-[1.5]"
        />
        <motion.img
          style={{ y: reverseParallax, scale: lax, rotate: laxRotate }}
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7016020b80dcb7778c9d29fd53b3b363f1f41415ef46a24d04983ba41cdf0653?apiKey=15589348c8884353aa1a6f32b20bd58b&"
          className="Astro aspect-[0.92] object-contain object-center h-full overflow-hidden  absolute z-10 scale-90 left-[45%]"
        />
        <motion.img
          style={{ y: smallParallax, scale: slowLax }}
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ae32ec6478cf9a896809ec507650bf491fa62c8360746e734138c461cd6076d?apiKey=15589348c8884353aa1a6f32b20bd58b&"
          className="bottomRightRocks aspect-[0.6] object-contain object-center h-1/2 overflow-hidden  absolute z-10 bottom-[-10%] right-[10%] scale-75"
        />
        <motion.img
          style={{ x: smallParallax }}
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ac5e2d8ad104f3b1fe1910a90ab2f613b60027a0d41fa0da44f908518d71fb4?apiKey=15589348c8884353aa1a6f32b20bd58b&"
          className="rightRocks aspect-[0.3] object-contain object-center h-full overflow-hidden  absolute z-10 right-0"
        />{" "}
        <div className="absolute bottom-[-20%]" ref={target} />
      </div>
    </div>
  );
};

export default SpaceAnimation;
