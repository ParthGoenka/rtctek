import React from 'react';
import './App.css';
import Card from './Card';
import { cardData } from './data';

const App = () => {
  return (
    <div className="app">
      <h1>Blogs</h1>
      <div className="blog-list">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

