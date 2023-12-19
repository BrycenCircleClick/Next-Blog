import React from "react";

const BlurbSection = () => {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col px-5 items-start max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d844fdd7c9bafcc017a3251796443abfde0fb8120273d2cf88e3558147e09e16?apiKey=15589348c8884353aa1a6f32b20bd58b&"
              className="aspect-square object-contain object-center w-[74px] justify-center items-center overflow-hidden max-w-full"
              alt="Image 1"
            />
            <div className="self-stretch text-zinc-900 text-2xl font-semibold leading-10 tracking-tight whitespace-nowrap mt-10">
              Effortless Integration
            </div>
            <div className="self-stretch text-gray-500 text-lg font-medium leading-8 mt-5">
              Seamless integration with your existing systems, ERPs, and
              business applications. Support for a wide range of EDI standards,
              ensuring compatibility with your partners and clients
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col px-5 items-start max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d991269e6ab498ed13a7152d5d70dbeb21aad9407a8ce182828a98918d7cfc?apiKey=15589348c8884353aa1a6f32b20bd58b&"
              className="aspect-[1.01] object-contain object-center w-[75px] justify-center items-center overflow-hidden max-w-full"
              alt="Image 2"
            />
            <div className="self-stretch text-zinc-900 text-2xl font-semibold leading-10 tracking-tight whitespace-nowrap mt-10">
              Automated Workflows
            </div>
            <div className="self-stretch text-gray-500 text-lg font-medium leading-8 mt-5">
              Say goodbye to manual data entry and tedious processes. Our
              automation features will boost your productivity. Intelligent
              mapping and transformation capabilities to ensure data consistency
              and accuracy.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col px-5 items-start max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31ed892bab7f67f31b90a9ae61d0c5eebb845df3eb3467a4a33aee48103164f9?apiKey=15589348c8884353aa1a6f32b20bd58b&"
              className="aspect-[1.01] object-contain object-center w-[75px] overflow-hidden max-w-full"
              alt="Image 3"
            />
            <div className="self-stretch text-zinc-900 text-2xl font-semibold leading-10 tracking-tight whitespace-nowrap mt-10">
              Real-time Visibility
            </div>
            <div className="self-stretch text-gray-500 text-lg font-medium leading-8 mt-5">
              Gain real-time insights into your EDI transactions and activities.
              Monitor and track data flows, identifying and resolving issues
              before they impact your business
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurbSection;
