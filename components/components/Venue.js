import Container from './container';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const Venue = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const target = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(target, { once: true });

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [200, -400]);
  const reverseParallax = useTransform(parallax, (v) => -v);
  const lax = useTransform(scrollYProgress, [0, 1], [1, 2]);

  console.log(parallax);
  console.log(reverseParallax);

  return (
    <>
      <motion.section
        ref={ref1}
        className="bg-white flex flex-col items-center  self-center w-full max-w-7xl"
        style={{
          transform: isInView1 ? 'none' : 'translateY(200px)',
          opacity: isInView1 ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h2 className="text-black text-lg md:text-2xl font-semibold  uppercase  max-md:max-w-full  max-sm:text-center pt-12 px-5">
          Partners and Collaborators
        </h2>
        <img
          loading="lazy"
          srcSet="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/partners-1.png"
          className="aspect-[2.8] object-contain object-center w-full overflow-hidden self-stretch mt-6 max-md:max-w-full "
          alt=""
        />
      </motion.section>

      <Container>
        <motion.div
          ref={target}
          className="absolute top-[30%] left-[-300px] h-[800px] w-[800px]  z-[-10] "
          style={{
            borderRadius: '805.491px',
            background:
              'linear-gradient(180deg, #E7326A 0%, #FF292F 24.48%, #FF7B01 56.77%, #F2DE02 85.94%, #AEF61C 98.44%)',

            scale: lax,
            transition: 'all ease 0.5s',
          }}
          animate={{ filter: `blur(107px)`, x: '0px' }}
          transition={{ duration: 1 }}
        />{' '}
        <motion.section
          className="flex flex-col items-stretch"
          style={{
            transform: isInView2 ? 'none' : 'translateY(200px)',
            opacity: isInView2 ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <div className="z-[1] flex w-full justify-between gap-5 items-end max-md:max-w-full max-lg:flex-wrap">
            <div className="flex flex-col items-stretch  px-0 md:px-5 max-md:max-w-full ">
              <div
                className="text-zinc-900 text-[8vw] max-md:leading-[8vw] md:text-5xl lg:text-6xl  mt-2.5 max-md:max-w-full "
                aria-label="The Ahura AI House Venue & Layout"
              >
                The Ahura AI House <br />
                <span className="font-bold text-[9vw] md:text-[7vw] lg:text-7xl ">
                  Venue & Layout
                </span>
              </div>
              <p className="text-zinc-900 text-lg font-medium leading-8 my-11 max-md:max-w-full max-md:mt-10">
                Ahura AI is proud to present the Inaugural Ahura AI House! Over
                the course of five days, Ahura AI will gather decentralized
                thinkers, investors, corporations, startup founders, high
                profile individuals, and policy makers in one place in order to
                engage in meaningful discourse. We are excited to welcome you to
                network with top leaders and build meaningful connections and
                explore synergies in an interactive environment. The Davos 2024
                Ahura AI House is located in a premier location at Promenade 118
                - in the heart of Davos! Doors will be open from 08:00 to 23:00
                each day.
              </p>
              <div ref={ref2} />
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8e32313d73a59da40ac43c5704ad846a348be0cecf4b123f45ce4553c6d2a3f1?apiKey=15589348c8884353aa1a6f32b20bd58b&"
              className="aspect-[0.85] object-contain object-center w-full overflow-hidden self-stretch h-auto ml-auto  min-w-[250px] md:min-w-[350px]"
              alt=""
            />
          </div>
          <div className="py-5 lg:py-0" />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46370e69476f34ef0d9768e8075a5b6a5d208704a565414ff48f3dd2020e7964?apiKey=15589348c8884353aa1a6f32b20bd58b&"
            className="aspect-[2.04] object-contain object-center w-full overflow-hidden max-md:max-w-full py-0 "
            alt=""
          />
        </motion.section>
      </Container>
    </>
  );
};

export default Venue;
