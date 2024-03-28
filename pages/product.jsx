import React, { useEffect, useRef, useState } from 'react';
import BlurbSection from '../components/components/BlurbSection';

import Container from '../components/components/Container';

import HalfGrid from '../components/components/HalfGrid';
import HalfGrid2 from '../components/components/HalfGrid2';
import LearnToday from '../components/components/LearnToday';
import Form from '../components/components/Form';
import ProductForm from '../components/components/ProductForm';
const Product = ({ product }) => {
    const imageRef = useRef(null);
    const [gradientStyle, setGradientStyle] = useState({});
    const resizeObserver = useRef(null);

    const updateGradientPosition = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            setGradientStyle({
                top: `${rect.top - rect.height / 2}px`,
                left: `${rect.left - rect.width / 1.5}px`,
                width: `${rect.width * 2 - rect.width}px`,
                height: `${rect.height * 2 - rect.height / 2}px`,
                position: 'absolute',
                filter: `blur(${rect.height * 2}px)`,
            });
        }
    };

    useEffect(() => {
        if (imageRef.current) {
            resizeObserver.current = new ResizeObserver(() => {
                updateGradientPosition();
            });
            resizeObserver.current.observe(imageRef.current);
        }

        window.addEventListener('resize', updateGradientPosition);

        return () => {
            if (resizeObserver.current) {
                resizeObserver.current.disconnect();
            }
            window.removeEventListener('resize', updateGradientPosition);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div
            className=" pt-[50px]"
            style={{ background: 'linear-gradient(rgb(161, 161, 161),white, white)' }}
        >
            <div
                className="rotate-180"
                style={{
                    ...gradientStyle,
                    borderRadius: '1551.722px',
                    background:
                        'linear-gradient(180deg, #E7326A 0%, #FF292F 24.48%, #FF7B01 56.77%, #F2DE02 85.94%, #AEF61C 98.44%)',
                }}
            />
            <Container>
                <Container>
                    {' '}
                    <header className="my-[4vmin] self-center flex items-center justify-around max-md:max-w-full flex-wrap lg:flex-nowrap max-sm:justify-center text-center clamp-CTA z-10">
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
                    </header>
                    <h1 className="font-sophia clamp-product-header text-center mt-[4vmin] mb-[8vmin]  z-100 ">
                        <span className="font-bold">Introducing Ahura AI 2.0</span>
                    </h1>
                    {/* Image */}
                    <img
                        ref={imageRef}
                        onLoad={updateGradientPosition}
                        loading="lazy"
                        srcSet="/uploads/131.png"
                        className="aspect-[1440/1024] object-contain object-center w-[90%] mx-auto overflow-hidden self-stretch max-md:max-w-full z-10"
                        alt=""
                    />
                </Container>
            </Container>
            {/*       <Container>
        {' '}
        <div
          id="test"
          className=" flex flex-col items-center mx-auto self-center w-full max-w-7xl"
        >
          <h2 className="text-black text-lg md:text-2xl font-semibold  uppercase  max-md:max-w-full  max-sm:text-center pt-12 px-5">
            Partners and Collaborators
          </h2>
          <img
            loading="lazy"
            srcSet="/uploads/image 34.png"
            className="aspect-[2.8] object-contain object-center mx-auto w-full overflow-hidden self-stretch max-md:max-w-full  "
            alt=""
          />
        </div>
      </Container> */}
            {/*       <Container>
        {' '}
        <BlurbSection blurbs={product.productBlurbs} />
      </Container> */}

            <div className="my-4 ">
                {' '}
                <HalfGrid2
                    position="top"
                    imgSide="right"
                    image="/uploads/ProductGrid1.png"
                    textBold="Early Learning Interventions."
                    textReg="Teachers no longer need to wait for exam results! Ahura AI 2.0 identifies at-risk students from day one, allowing instructors and coaches to proactively offer targeted support and prevent knowledge gaps from widening."
                />
                <HalfGrid2
                    position="middle"
                    imgSide="left"
                    image="/uploads/Group10378.png"
                    textBold="Real-time AI Learning Coach "
                    textReg="Sensors and real-time notifications to keep your attention glued, transforming learning from a chore to a captivating adventure."
                />
                <HalfGrid2
                    position="bottom"
                    imgSide="right"
                    image="/uploads/Group10380.png"
                    textBold="Make Learning Fun & Accessible"
                    textReg="Supercharge any online content, from dry textbooks to engaging videos. Our latest release will adapt to your preferred learning style whether it is auditory, visual, kinesthetic, and everything in between."
                />
                <Container>
                    <LearnToday
                        header=""
                        h1="Take a Journey to an"
                        h2="Empowered Tomorrow"
                        body=""
                        button=""
                    />{' '}
                    <div className="relative overflow-hidden rounded-lg mt-4">
                        <div class="flex flex-col items-stretch max-h-[800px]">
                            <div class="max-w-6xl mx-auto w-[75vw] aspect-[16/9]  overflow-hidden rounded-lg shadow-lg">
                                <div class="w-full h-full overflow-hidden rounded-lg  ">
                                    <iframe
                                        class="w-full h-full"
                                        src="https://player.vimeo.com/video/899504821?h=5a1cf3ba04&autoplay=1&loop=1&muted=1&byline=false&controls=0"
                                        frameborder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowfullscreen
                                        byline="false"
                                        autoplay="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>{' '}
                {/*         <Container>
          <LearnToday
            header=""
            h1="By Today"
            h2="We mean today"
            body=""
            button=""
          />
          <div className="flex flex-row flex-wrap lg:flex-nowrap">
            <div className="flex max-w-[629px] flex-col items-stretch mx-auto">
              <span className="bg-zinc-100 bg-opacity-70 flex w-full flex-col pl-11 pr-20 py-12 rounded-3xl border-[1.163px] border-solid border-black items-start max-md:max-w-full max-md:px-5">
                <div className="text-neutral-900 text-3xl leading-10 mt-1 max-md:max-w-full">
                  Comprehensive Curriculum
                </div>
                <div className="text-neutral-900 text-2xl leading-8 w-[533px] mt-7 max-md:max-w-full">
                  Well-structured curriculum covering foundational and advanced
                  AI concepts,
                </div>
              </span>
              <span className="flex flex-col items-stretch mt-11 px-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-neutral-900 text-3xl leading-10 max-md:max-w-full">
                  Clear & Easy learning
                </div>
                <div className="text-neutral-900 text-3xl leading-10 mt-12 max-md:max-w-full max-md:mt-10">
                  Command + K
                </div>
                <div className="text-neutral-900 text-3xl leading-10 mt-14 max-md:max-w-full max-md:mt-10">
                  Monitor every Details with analyzing
                </div>
              </span>
            </div>
            <span className="shadow-lg bg-white flex max-w-[798px] flex-col items-center px-11 py-11 rounded-[32.679px] max-md:px-5 mx-auto">
              <div className="text-neutral-900 text-3xl font-medium leading-9 whitespace-nowrap mt-2.5">
                Your Focus Nudges
              </div>
              <div className="self-stretch mt-7 max-md:max-w-full">
                <div className="gap-5 flex  max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                    <span className="bg-neutral-100 flex grow flex-col w-full pl-6 pr-11 py-12 rounded-2xl items-start max-md:mt-8 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc79d9a20b9c527c224909f5cf46f1f4810178f46b17294d3c0ba98dd1c10aa?apiKey=15589348c8884353aa1a6f32b20bd58b&"
                        className="aspect-[1.04] object-contain object-center w-[87px] overflow-hidden self-center mt-2.5"
                      />
                      <div className="text-black text-center text-xl font-medium ml-3 mt-12 max-md:ml-2.5 max-md:mt-10">
                        Walked <br /> Away{' '}
                      </div>
                      <div className="text-black text-center text-2xl font-medium self-center whitespace-nowrap mt-9">
                        1
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <span className="bg-neutral-100 flex grow flex-col items-stretch w-full px-10 py-12 rounded-2xl max-md:mt-8 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/873bea09f9647e085ff90c3d8db517ad12a3c34df057549084528b0893e744f5?apiKey=15589348c8884353aa1a6f32b20bd58b&"
                        className="aspect-[1.01] object-contain object-center w-[73px] overflow-hidden self-center mt-2.5"
                      />
                      <div className="text-black text-center text-xl font-medium mt-16 max-md:mt-10">
                        Mobile
                        <br />
                        Phones
                      </div>
                      <div className="text-black text-center text-2xl font-medium self-center whitespace-nowrap mt-10">
                        7
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <span className="bg-neutral-100 flex grow flex-col w-full pl-6 pr-9 py-12 rounded-2xl items-end max-md:mt-8 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/265d724f193999d3645292d88eabfe2bd49361a4571b1216483c62cd1dc28eef?apiKey=15589348c8884353aa1a6f32b20bd58b&"
                        className="aspect-square object-contain object-center w-[72px] overflow-hidden max-w-full mt-2.5"
                      />
                      <div className="text-black text-center text-xl font-medium self-stretch mt-16 max-md:mt-10">
                        Irrelevant
                        <br />
                        Websites
                      </div>
                      <div className="text-black text-center text-2xl font-medium self-center whitespace-nowrap mt-10">
                        3
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <span className="bg-neutral-100 flex grow flex-col items-stretch w-full pl-12 pr-7 py-12 rounded-2xl max-md:mt-8 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba76cb11c8df78cb664e7f6c1afce8c675b3bb0bb7693dc6f92cea46f733d56?apiKey=15589348c8884353aa1a6f32b20bd58b&"
                        className="aspect-[1.08] object-contain object-center w-[78px] overflow-hidden self-center mt-3"
                      />
                      <div className="text-black text-center text-xl font-medium mt-14 max-md:mt-10">
                        Social
                        <br />
                        Media
                      </div>
                      <div className="text-black text-center text-2xl font-medium self-center whitespace-nowrap mt-10">
                        0
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </Container> */}
                {/*         <Container className="">
          <LearnToday
            header=""
            h1="Join millions of Users"
            h2="On Ahura"
            body=""
            button=""
          />
          <div className="ml-auto w-auto max-w-[700px]">
            {' '}
            <span className=" ">
              At Ahura AI, we are redefining the boundaries of corporate
              learning. Our platform is an intersection of advanced technology
              and educational excellence, providing an engaging, customizable,
              and impactful learning experience. We are committed to not just
              equipping your team with knowledge but to fostering a culture of
              innovation and continuous improvement.
            </span>
          </div>
        </Container> */}
                <Container>
                    <ProductForm form="d2ab6994-5fce-4368-9e1a-1b81dee759ba" />
                </Container>
            </div>
        </div>
    );
    <HalfGrid />;
};

export default Product;
