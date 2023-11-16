import React from 'react';
import ManImg from '../img/Cool-Model-Man-PNG-Free-Image.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container-mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            SUMMER SALE <br />
            <span className="font-semibold">MEN</span>
          </h1>
          <Link
            className="self-start uppercase font-semibold border-b-2 border-primary"
            to={'/'}
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img className="w-[665px]" src={ManImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
