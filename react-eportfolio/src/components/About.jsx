import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-center pb-8 pl-4 col-span-2'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Tracy Ho, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='mb-3'>I am passionate about combining varios kinds of technique to build
                excellent websites or softwares that could support a company to allure
                potential customers and achieve considerable development.</p>
              <p> "If you believe, you can achieve" - That's my motto!
                All you need to do is to believe, connect with me and we are going
                to build some incredible products together.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;