import React from 'react';
import './Modal.css';

export const Modal = ({ visible, onHiddenModal, childComponent }) => {
  if (!visible) return null;
  return (
    <div className="animated fadeIn modal">
      <div className="modal-paper">
        <div className="close" onClick={onHiddenModal}>
          <span className="fa fa-close" />
        </div>
        {childComponent}
      </div>
    </div>
  );
};
