import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import Card from "./Card";

const Cards = ({ handleSelect ,disabled}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4">
      {cards.map((card, idx) => (
        <Card key={idx} handleSelect={handleSelect} disabled={disabled} card={card}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};

export default Cards;
