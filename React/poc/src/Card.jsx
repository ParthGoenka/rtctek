import React from 'react';
const Card = ({ title, description }) => {
  return (
    <div className="blog-card">
      <h2><b>{title}</b></h2>
      <hr></hr>
      <p>{description}</p>
      
    </div>
  );
};




export default Card;