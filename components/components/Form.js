import React from 'react';
import HubspotForm from './HubspotForm';

const Form = ({ form }) => {
  return (
    <div>
      <header className="gap-5 flex flex-col lg:flex-row max-md:items-stretch max-md:gap-0">
        <section className="flex flex-col items-stretch w-full max-md:ml-0 align-middle ">
          <div className="text-zinc-900 text-[8vw] max-md:leading-[8vw] md:text-5xl lg:text-6xl flex flex-col items-stretch px-0 md:px-5 max-md:max-w-full max-md:mb-10 ">
            Let us know how you would like to
            <span
              className="text-[9vw] md:text-5xl lg:text-6xl  bg-clip-text max-md:max-w-full   font-bold"
              style={{
                background:
                  'linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              participate, speak, or sponsor.
            </span>
          </div>
        </section>
        <section className="flex flex-col items-stretch w-full mb-10 mx-auto  max-md:mx-0">
          <HubspotForm form={form} />
        </section>
      </header>
    </div>
  );
};

export default Form;
