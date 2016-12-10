import React, { PropTypes } from 'react';
import { ModalState } from '../records/modal';
import './Modal.css';

export default function Modal({ visible, onHiddenModal, childComponent }) {
  if (visible === ModalState.HIDE) return null;
  const klass = visible === ModalState.FADEOUT ? 'fadeOut' : 'fadeIn';
  return (
    <div className={`animated ${klass} modal`}>
      <div className="modal-paper">
        {/* eslint jsx-a11y/no-static-element-interactions: [0] */}
        <div className="close" onClick={onHiddenModal}>
          <span className="fa fa-close" />
        </div>
        {childComponent}
      </div>
    </div>
  );
}

Modal.propTypes = {
  visible: PropTypes.symbol.isRequired,
  onHiddenModal: PropTypes.func.isRequired,
  childComponent: PropTypes.element,
};
