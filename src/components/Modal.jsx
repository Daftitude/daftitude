import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;