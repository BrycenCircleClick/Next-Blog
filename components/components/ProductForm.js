import React from 'react';
import Container from './Container';
import HubspotForm from './HubspotForm';

const ProductForm = ({ form }) => {
  return (
    <div>
      <header className="gap-5 flex flex-col lg:flex-row max-md:items-stretch max-md:gap-0">
        <Container className="flex flex-col items-stretch w-full max-md:ml-0 align-middle ">
          <div className="text-zinc-900  bg-clip-border clamp-product-form font-semibold   self-stretch w-full mt-2 max-md:max-w-full max-sm:font-semibold">
            Sign up for our 2.0 beta to
          </div>
          <div className="text-zinc-900 clamp-product-form font-semibold   self-stretch w-full  max-md:max-w-full">
            <span
              className="flex flex-col relative shrink-0 box-border"
              style={{
                background:
                  'linear-gradient(90deg, #E7326A -0.59%, #FF292F 21.06%, #FF7B01 49.62%, #F2DE02 75.41%, #AEF61C 86.46%)',

                color: 'transparent',
                backgroundClip: 'text',
              }}
            >
              discover what we can do for you.
            </span>
          </div>
        </Container>
        <Container className="flex flex-col items-stretch w-full mb-10 mx-auto  max-md:mx-0">
          <HubspotForm form={form} />
        </Container>
      </header>
    </div>
  );
};

export default ProductForm;
