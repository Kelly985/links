import React from 'react';
import './cards.css';


const Card = ({ iconUrl, name, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-icon" onClick={handleClick}>
        <img src={iconUrl} alt={name} />
      </div>
      <p className="card-name">{name}</p>
    </div>
  );
};

export default Card;
