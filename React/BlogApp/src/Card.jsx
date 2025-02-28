import React from 'react';
const Card = ({ title, description, onDelete, category }) => {
  return (
    <div className="blog-card">
      <h2><b>{title}</b></h2>
      <p>{category}</p>
      <hr></hr>
      <p>{description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};




export default Card;