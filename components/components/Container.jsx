import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div
      className={`${
        className ? className : ''
      } container relative mx-auto p-2 md:p-5 lg:p-10 max-w-screen-sm md:max-w-screen-md  lg:max-w-[1450px]`}
    >
      {children}
    </div>
  );
};

export default Container;
