import React from "react";
import Container from "../container";

const ImageSection1 = ({ image1, image2, image3 }) => {
  return (
    <Container>
      <div className="gap-0 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch px-0 max-md:max-w-full max-md:mt-9">
            <div className="flex flex-col relative shrink-0 box-border">
              <img
                loading="lazy"
                srcSet={image1}
                className="aspect-[0.74] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                alt="Image description"
              />
              <div className="text-zinc-900 text-lg font-medium leading-8 mt-9 max-md:max-w-full">
                <p>
                  {" "}
                  At Ahura, our mission is to inspire, educate, and ignite your
                  passion for the cosmos.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-2 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch px-2 max-md:max-w-full max-md:mt-9">
            <div className="flex flex-col relative shrink-0 box-border">
              <img
                loading="lazy"
                srcSet={image2}
                className="aspect-[1.4] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                alt="Image description"
              />
              <div className="text-zinc-900 text-lg font-medium leading-8 mt-8 max-md:max-w-full">
                <p>
                  {" "}
                  At Ahura, our mission is to inspire, educate, and ignite your
                  passion for the cosmos.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col relative shrink-0 box-border">
              <img
                loading="lazy"
                srcSet={image3}
                className="aspect-[1.22] object-contain object-center w-full overflow-hidden mt-7 max-md:max-w-full"
                alt="Image description"
              />
              <div className="text-zinc-900 text-lg font-medium leading-8 mt-11 max-md:max-w-full max-md:mt-10">
                At Ahura, our mission is to inspire, educate, and ignite your
                passion for the cosmos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageSection1;
