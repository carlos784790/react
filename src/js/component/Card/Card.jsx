import React from 'react';
import './card.css';

const Card = ({ title, text }) => {
    return (
      <div className="card">
        <div className="card-body">
        <img src="https://source.unsplash.com/random/500x500" alt="Card Image" className="card-image" />
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
          <button id="Find Out More">Found out more!
          </button>
        </div>
      </div>
    );
  };

  export default Card;