import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  const cardData = [
    {
      id: 1,
      img: Single,
      title: 'Single',
      price: '$149',
      feature1: '500 GB Storage',
      feature2: '1 Granted User',
      feature3: 'Send up to 2 GB',
    },
    {
      id: 2,
      img: Double,
      title: 'Partnership',
      price: '$199',
      feature1: '1 TB Storage',
      feature2: '5 Granted Users',
      feature3: 'Send up to 10 GB',
    },
    {
      id: 3,
      img: Triple,
      title: 'Group Plan',
      price: '$299',
      feature1: '5 TB Storage',
      feature2: '10 Granted Users',
      feature3: 'Send up to 20 GB',
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map(
          ({ id, img, title, price, feature1, feature2, feature3 }) => (
            <div
              key={id}
              className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:ring-green-600"
            >
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white "
                src={img}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
              <p className="text-center text-4xl font-bold">{price}</p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">{feature1}</p>
                <p className="py-2 border-b mx-8">{feature2}</p>
                <p className="py-2 border-b mx-8">{feature3}</p>
              </div>
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:text-black">
                Start Trial
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cards;
