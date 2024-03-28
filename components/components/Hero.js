import Container from './container';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Hero = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [200, -400]);
  const reverseParallax = useTransform(parallax, (v) => -v);
  const lax = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <motion.div className="bg-[#B8CBCC] pt-[20px] overflow-hidden z-10 flex flex-col justify-center items-center pb-12 px-0 md:px-16 ">
      <Container>
        <motion.div
          className="absolute top-[-200px] right-[-300px] h-[800px] w-[800px] opacity-80 z-[-10] "
          style={{
            borderRadius: '805.491px',
            background:
              'linear-gradient(180deg, #E7326A 0%, #FF292F 24.48%, #FF7B01 56.77%, #F2DE02 85.94%, #AEF61C 98.44%)',

            scale: lax,
            transition: 'scale ease 0.5s',
          }}
          initial={{ opacity: 0, filter: `blur(0px)`, x: '200px' }}
          animate={{ opacity: 0.8, filter: `blur(107px)`, x: '0px' }}
          transition={{ duration: 1 }}
        />{' '}
        <div className="w-full z-10 max-w-[1457px] mt-12 mb-9 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex flex-col lg:flex-row max-md:items-stretch max-md:gap-0">
            <div className="flex z-10 flex-col items-stretch w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <header className="text-xl z-10 md:text-2xl font-black  uppercase bg-clip-text max-md:max-w-full">
                  <span
                    style={{
                      background:
                        'linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)',
                      backgroundClip: 'text',
                      color: 'transparent',
                      rotate: '90deg',
                    }}
                  >
                    Ahura AI House{' '}
                  </span>
                </header>
                <div className="text-zinc-900 z-10 text-4xl md:text-6xl lg:text-6xl font-black  uppercase mt-4 max-md:max-w-full  ">
                  {' '}
                  Welcome To
                  <br />
                  <span
                    style={{
                      background:
                        'linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    DAVOS 2024
                  </span>
                </div>
                <div className="text-black text-2xl font-bold  uppercase mt-5 md:mt-10 max-md:max-w-full">
                  {' '}
                  LEADING THE GLOBAL CONVERSATION ON Responsible AI{' '}
                </div>
                <div className="text-zinc-900 text-md md:text-lg mt-6 max-md:max-w-full">
                  {' '}
                  AI has been the talk of the town during the Annual Meeting of
                  the World Economic Forum 2023 and the conversation has only
                  accelerated since then. Today, there is an urgent need for a
                  global discussion that includes policymakers, academics, civil
                  society, venture, and industry. <br /> <br /> To provide a
                  platform for this global conversation, Ahura AI has initiated
                  the Davos 2024 Ahura AI House. During the Annual Meeting of
                  the World Economic Forum, the group will bring together
                  leading figures across disciplines to engage in debates around
                  the most critical issues around Artificial Intelligence and to
                  discuss its potential for humankind. <div ref={target}></div>
                  <br />{' '}
                  <div className="flex w-full">
                    {' '}
                    <a
                      className="text-zinc-900 text-lg text-center md:text-left font-light whitespace-nowrap justify-center items-center border self-center rounded-3xl lg:rounded-[60px] border-solid border-zinc-900 max-w-[75vw] w-[75vw] md:w-fit my-5 md:my-0 px-4 lg:px-8 py-2 lg:py-4 mx-auto md:mx-0 hover:bg-zinc-900 hover:text-zinc-200 hover:no-underline hover:font-normal transition-all duration-200 hover:shadow-xl"
                      role="button"
                      href="#schedule" // Optional for indicating the target
                      onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor link behavior
                        const scheduleSection =
                          document.getElementById('schedule');
                        if (scheduleSection) {
                          scheduleSection.scrollIntoView({
                            behavior: 'smooth',
                          });
                        }
                      }}
                    >
                      Schedule
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0 lg:w-1/3">
              <div className="grow max-md:max-w-full  max-md:mt-10">
                <motion.div className=" relative w-full md:w-3/4 mx-auto lg:w-[400px] h-[800px] max-w-[70vw] flex flex-col  max-md:gap-0 ">
                  <motion.div
                    className="flex  relative top-0 left-0 z-50 flex-col items-stretch h-full   max-md:ml-0"
                    initial={{ transform: 'translate(0%, 20%)' }}
                    animate={{ transform: `translate(-10%, 20%)` }}
                    transition={{ duration: 1 }}
                  >
                    <motion.img
                      loading="lazy"
                      srcSet="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/Frame%20313279.png"
                      className="aspect-[1] object-contain object-center absolute top-[-30%] left-[30%] opacity-50 h-3/4 overflow-hidden   rounded-xl  "
                      animate={{
                        scale: [1, 1.1, 1],
                        transform: [
                          'translate(0%,0%)',
                          'translate(0%, 30%)',
                          'translate(0%,0%)',
                        ],
                      }}
                      transition={{
                        duration: 5,
                        ease: 'easeInOut',
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 5,
                        delay: 3,
                      }}
                    />
                    <motion.img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/67cc20dab805e1c6ae87a6aa9da3929de40c765f4f3c8978f98ea2e493641575?apiKey=15589348c8884353aa1a6f32b20bd58b&"
                      className="aspect-[0.76] object-contain object-center  z-50  absolute top-0 left-0  h-full min-h-[400px] overflow-hidden rounded-xl  "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  <motion.div
                    className="flex relative  flex-col items-stretch h-full  w-full max-md:ml-0"
                    initial={{ transform: 'none' }}
                    animate={{ transform: `translate(10%, 0%)` }}
                    transition={{ duration: 1 }}
                  >
                    <motion.img
                      loading="lazy"
                      srcSet="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/Frame%20313279.png"
                      className="aspect-[1] object-contain object-center absolute bottom-[10%] right-[70%]  h-1/2  opacity-50  rounded-xl  "
                      animate={{
                        scale: [1, 1.5, 1],
                        transform: [
                          'translate(0%,0%)',
                          'translate(0%, -70%)',
                          'translate(0%,0%)',
                        ],
                      }}
                      transition={{
                        duration: 5,
                        ease: 'easeInOut',
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 4,
                        delay: 5,
                      }}
                    />

                    <motion.img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3f388de9790796407e3e78827f7cbdffc5292509132a88367913e1efe3b7e29?apiKey=15589348c8884353aa1a6f32b20bd58b&"
                      className="aspect-[0.89] object-contain object-center absolute bottom-0 right-0   rounded-xl  "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>{' '}
        </div>{' '}
      </Container>
    </motion.div>
  );
};

export default Hero;
