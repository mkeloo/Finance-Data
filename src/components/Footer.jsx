import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  const footerData = [
    {
      id: 1,
      title: 'Solutions',
      link1: 'Analytics',
      link2: 'Marketing',
      link3: 'Commerce',
      link4: 'Insights',
    },
    {
      id: 2,
      title: 'Support',
      link1: 'Pricing',
      link2: 'Docs',
      link3: 'Guides',
      link4: 'API Status',
    },
    {
      id: 3,
      title: 'Company',
      link1: 'About',
      link2: 'Blog',
      link3: 'Jobs',
      link4: 'Partners',
    },
    {
      id: 4,
      title: 'Legal',
      link1: 'Claim',
      link2: 'Privacy',
      link3: 'Terms',
      link4: 'Press',
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">
          <span className=" link link-underline link-underline-black">
            DollarTech
          </span>
          <span className="text-5xl">.</span>
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 mr-2">
          <FaFacebookSquare
            size={30}
            className="duration-300 hover:scale-125 hover:text-[#00df9a]"
          />
          <FaInstagram
            size={30}
            className="duration-300 hover:scale-125 hover:text-[#00df9a]"
          />
          <FaTwitterSquare
            size={30}
            className="duration-300 hover:scale-125 hover:text-[#00df9a]"
          />
          <FaGithubSquare
            size={30}
            className="duration-300 hover:scale-125 hover:text-[#00df9a]"
          />
          <FaDribbbleSquare
            size={30}
            className="duration-300 hover:scale-125 hover:text-[#00df9a]"
          />
        </div>
      </div>

      {/* Footer Populating Data */}
      <div className="lg:col-span-2 md:flex md:justify-between mt-6 justify-evenly grid-cols-2 grid ">
        {footerData.map(({ id, title, link1, link2, link3, link4 }) => (
          <div key={id} className="flex items-center justify-center mb-7">
            <ul>
              <h5 className="text-xl text-[#00df9a]">{title}</h5>
              <li className="py-2 text-md">
                <span className="link link-underline link-underline-black">
                  {link1}
                </span>
              </li>
              <li className="py-2 text-md">
                <span className="link link-underline link-underline-black">
                  {link2}
                </span>
              </li>
              <li className="py-2 text-md">
                <span className="link link-underline link-underline-black">
                  {link3}
                </span>
              </li>
              <li className="py-2 text-md">
                <span className="link link-underline link-underline-black">
                  {link4}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
