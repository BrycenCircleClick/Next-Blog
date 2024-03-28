import React from 'react';

const HalfGrid2 = ({ image, textBold, textReg, imgSide, position }) => {
  const gridContainersDiv = `flex justify-center items-center aspect-auto md:aspect-[800/618] h-fit md:h-auto w-[90vw] md:w-[45vw]   max-w-[800px] box-border ${
    position == 'middle' ? ' ' : null
  } `;

  const textContainerClasses = `text-zinc-900 text-sm lg:text-lg clamp-grid-product-padding p-[2.5vw] relative  max-w-full self-center flex flex-col text-left border-x-[1px] border-[#1F1F1F] ${gridContainersDiv} ${
    imgSide === 'left'
      ? 'md:order-last md:border-l-[0px] '
      : 'md:order-first md:border-r-[1px]'
  } `;

  const imageContainerClasses = `overflow-hidden clamp-grid-product-padding p-[2.5vw] 'order-first border-x-[1px] border-b-[1px] md:border-b-0 box-border border-[#1F1F1F] ${gridContainersDiv} ${
    imgSide === 'left'
      ? 'md:order-first md:border-r-[1px] '
      : 'md:order-last md:border-l-[0px] '
  } `;
  const lineClass = `w-screen h-0 absolute  border-[#1F1F1F]  border-t-[1px] box-border`;

  return (
    <div className=" relative ">
      {position === 'middle' || position === 'top' ? (
        <div
          className={`${lineClass} ${
            position === 'middle' ? 'top-0 md:top-[-1px]' : 'top-0'
          }`}
        />
      ) : null}
      <div className="w-fit h-fit mx-auto grid md:grid-cols-2   grid-rows-1">
        <div className={imageContainerClasses}>
          <img
            loading="lazy"
            srcSet={image}
            className="w-auto h-full object-contain object-center inset-0"
          />
        </div>

        <div className={`visible md:invisible ${lineClass} `} />

        <div className={`${gridContainersDiv} `}>
          {' '}
          <p className={textContainerClasses}>
            <span className="mb-[1.5vw] font-bold mr-[23%] clamp-grid-product ">
              {textBold}
            </span>
            <br />
            {textReg}
          </p>
        </div>
      </div>
      {position === 'middle' || position === 'bottom' ? (
        <div
          className={`${lineClass} ${
            position === 'middle'
              ? 'bottom-[-1px] md:bottom-[-1px]'
              : 'bottom-0 '
          }`}
        />
      ) : null}
    </div>
  );
};

export default HalfGrid2;
