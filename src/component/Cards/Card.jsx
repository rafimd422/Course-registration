import React, { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types'; 

const Card = ({ card, handleSelect }) => {
  const { title, image, description, price, credit } = card;
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    handleSelect(card);
    setIsSelected(true);
  };

  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-6 pt-10">
          <img src={image} alt="Thumbnail" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-justify text-stone-900 text-opacity-60 mb-2">
            {description}
          </p>
          {/* price & credit section */}
          <div className="flex justify-between w-full text-stone-900 text-opacity-60 text-base font-medium mb-1">
            <p>$ Price: {price}</p>
            <p className="flex gap-2 items-center">
              <FaBookOpen /> Credit: {credit}hr
            </p>
          </div>
          <div className="card-actions">
            <button
              onClick={handleClick}
              className={`btn btn-wide ${isSelected ? 'bg-green-500' : 'bg-blue-500'} rounded-lg text-white hover:text-black`}
            >
              {isSelected ? 'Selected' : 'Select'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Card;
