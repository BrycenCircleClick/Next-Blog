import React from 'react';
import Container from './container';

const SponsorDeck = () => {
  return (
    <div className={`w-full max-w-7xl  relative mx-auto p-2 md:p-5`}>
      <div className="p-12 rounded-[40px] max-md:px-5 bg-gradient-to-r from-red-600 to-yellow-500 ">
        <header className="gap-5 flex flex-col lg:flex-row max-md:gap-0">
          <div className="flex flex-col items-stretch lg:w-[65%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-white text-2xl font-light  max-md:max-w-full md:text-4xl  max-sm:text-left">
                Interested in becoming part of the AI &amp;{' '}
                <b className="font-extrabold ">Blockchain Lounge?</b>
              </h1>
              <p className="text-white text-lg font-medium leading-7 mt-10 max-md:max-w-full">
                We are excited to welcome you to network with top leaders and
                build meaningful connections and explore synergies in an
                interactive environment.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch lg:w-[35%] lg:ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:mt-10">
              <p className="text-white  font-medium leading-7">
                For more information, please download this sponsorship deck:
              </p>
              <button className="justify-center self-center lg:self-start items-stretch bg-zinc-900 hover:bg-zinc-800 flex flex-col mt-16 px-4 py-4 rounded-lg max-md:mt-10 max-md:px-5 w-fit">
                <span className="text-white text-center text-sm font-semibold whitespace-nowrap w-auto self-center">
                  <a href="https://21472314.fs1.hubspotusercontent-na1.net/hubfs/21472314/Davos%202024%20AI%20%26%20Crypto%20Lounge%20Sponsorship%20Opportunities.pdf">
                    {' '}
                    Download Sponsorship Deck
                  </a>
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default SponsorDeck;
