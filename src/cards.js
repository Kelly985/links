import React, { useState } from 'react';
import Card from './cardlogic';
import './cards.css';
import SearchBar from './search';

const cardsData = [
  {
    iconUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlfGVufDB8fDB8fHww', // Replace with the URL of your image.
    name: 'Google',
    link: 'https://google.com',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2Vib29rfGVufDB8fDB8fHww', // Replace with the URL of your image.
    name: 'Facebook',
    link: 'https://www.facebook.com/',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D', // Replace with the URL of your image.
    name: 'Instagram',
    link: 'https://www.instagram.com/',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlfGVufDB8fDB8fHww', // Replace with the URL of your image.
    name: 'Google',
    link: 'https://google.com',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2Vib29rfGVufDB8fDB8fHww', // Replace with the URL of your image.
    name: 'Facebook',
    link: 'https://www.facebook.com/',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D', // Replace with the URL of your image.
    name: 'Instagram',
    link: 'https://www.instagram.com/',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlfGVufDB8fDB8fHww', // Replace with the URL of your image.
    name: 'Google',
    link: 'https://google.com',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2Vib29rfGVufDB8fDB8fHww', // Replace with the URL of your image.
    name: 'Facebook',
    link: 'https://www.facebook.com/',
  },

  {
    iconUrl: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D', // Replace with the URL of your image.
    name: 'Instagram',
    link: 'https://www.instagram.com/',
  },


  
];

const CardList = () => {
  const [filteredCards, setFilteredCards] = useState(cardsData);

  const handleSearch = (searchTerm) => {
    const filtered = cardsData.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="card-list">
      <SearchBar onSearch={handleSearch} />
      {filteredCards.map((card, index) => (
        <Card key={index} iconUrl={card.iconUrl} name={card.name} link={card.link} />
      ))}
    </div>
  );
};

export default CardList;