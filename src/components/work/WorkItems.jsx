// WorkItems.js
import React from 'react';

const WorkItems = ({ item, onDemoClick }) => {
  return (
    <div className="work__card">
      <div classNmae="img__container">
        <img src={item.image} alt={item.title} className="work__img" />
      </div>
     
      <h3 className="work__title">{item.title}</h3>
      <button className="work__button" onClick={onDemoClick}>
        View More<i className="bx bx-right-arrow-alt work__button-icon"></i>
      </button>
    </div>
  );
};

export default WorkItems;
