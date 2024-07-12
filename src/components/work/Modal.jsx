// Modal.js
import React from 'react';

const Modal = ({ show, onClose, project }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>&times;</span>
        <h4 className='modal-title'><i>{project.modal_heading}</i></h4>
        
        <h4 className='details'>{project.details}</h4>

        <img className='modal_image' src={project.modal_image}/> 
        <p className='content'>{project.content}</p>
      </div>
    </div>
  );
};

export default Modal;
