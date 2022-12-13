import React from "react";

const Junk = () => {
  return (
    <div>
      <div className='pt-4'>
        <img
          src='./images/crypto.svg'
          alt=''
        />
        <p className='text-base text-black text-left w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elem
        </p>
      </div>
    </div>
  );
};

function Testimonial() {
  return (
    <div className='w-5/6 mx-auto testimonial'>
      <div className='w-5/6 mx-auto pt-16'>
        <div>
          <h2 className='text-5xl font-bold lg:w-1/2'>
            Real Stories from Real Customers
          </h2>
          <p className='text-base font-normal pt-6'>
            Get inspired by these stories.
          </p>
        </div>
        <div className='lg:w-[90%] w-full lg:float-right float-none mt-8 grid lg:grid-cols-2'>
          <div className="card1 h-96 flex gap-2">
            <div className="pt-6 pl-6">
            <img src='./images/smallquote.svg' alt=' ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;