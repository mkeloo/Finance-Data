import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df7b] font-bold lg:text-3xl md:text-2xl sm:text-2xl text-xl">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            <span className="link link-underline link-underline-black">
              Manage Data Analytics
            </span>{' '}
            <span className="link link-underline link-underline-black">
              Centrally
            </span>
          </h1>
          <p className="md:text-xl ">
            Lorem ipsum dolor sit amet{' '}
            <span className="text-[#00df7b]">consectetur</span> adipisicing
            elit. Voluptatum molestiae delectus culpa hic assumenda, voluptate
            <span className="text-[#00df7b]"> reprehenderit </span> dolore
            <span className="text-[#00df7b]"> autem cum </span>
            ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex
            deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
