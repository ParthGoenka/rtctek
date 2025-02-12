import React from 'react';
import './App.css';
import Card from './Card';
import { cardData } from './data';
import Footer from './Footer';
import Header from './Header';
import Postform from './postForm';

const App = () => {
  return (
    <div className="app">
      <Header name="Parth"></Header>
      <Postform/>
      <div className="blog-list">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <Footer name="Bloggers"></Footer>
    </div>
  );
};

export default App;

