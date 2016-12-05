import React from 'react';
import { ModalState } from '../records/modal';
import './Modal.css';

export default function Modal({ visible, onHiddenModal, childComponent }) {
  if (visible === ModalState.HIDE) return null;
  const klass = visible === ModalState.FADEOUT ? 'fadeOut' : 'fadeIn';
  return (
    <div className={`animated ${klass} modal`}>
      <div className="modal-paper">
        <div className="close" onClick={onHiddenModal}>
          <span className="fa fa-close" />
        </div>
        {childComponent}
      </div>
    </div>
  );
}
