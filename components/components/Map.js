import React from 'react';

const Map = () => {
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[892px] justify-center items-center px-16 py-12 max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e32885c97edac340f66dc8920def4971c2c7cf37f377890d1cfef0f67ba6ec74?apiKey=15589348c8884353aa1a6f32b20bd58b&"
        className="absolute h-full w-full object-cover object-center inset-0"
      />

      <form className="relative bg-white flex w-[340px] max-w-full flex-col items-stretch mx-auto pt-6 rounded-xl max-md:my-10 translate-y-[45%]">
        <div className="flex flex-col px-7 items-start max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84dbeddb46602900bca597dfa6e79cc57a70e28eb73adbbf1a893e91d9cd881b?apiKey=15589348c8884353aa1a6f32b20bd58b&"
            className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
          />
          <div className="text-black text-xl leading-8 self-stretch mt-5">
            {' '}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Promenade%20118%2C%207260%20Davos%2C%20Switzerland"
              target="_blank"
              rel="noopener noreferrer"
            >
              Promenade 118, 7260 Davos, Switzerland
            </a>
          </div>
        </div>

        <div className="bg-stone-800 flex shrink-0 h-2 flex-col mt-10 rounded-none max-md:mt-10" />
      </form>
    </div>
  );
};

export default Map;
