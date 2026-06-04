import React from 'react';

const Hero = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/globe.png')]">
          <div className='flex justify-center h-full items-end pb-70'>
              <h1 className='font-medium text-gray-400 text-3xl lg:text-4xl text-center'>Assisting over <span className='text-white'>15,000 job seekers</span><br></br>find their dream positions.</h1>
          </div>
        </div>
    );
};

export default Hero;