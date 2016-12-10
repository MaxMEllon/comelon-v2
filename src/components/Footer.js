import React, { PropTypes } from 'react';
import FooterIcon from '../atoms/FooterIcon';
import './Footer.css';

export default function Footer({ onShowLoginModal, onShowConnectForm, onShowConfigModal }) {
  return (
    <div className="footer">
      <FooterIcon
        iconName="user"
        onClick={onShowLoginModal}
      />
      <FooterIcon
        iconName="plug"
        onClick={onShowConnectForm}
      />
      <FooterIcon iconName="volume-up" />
      <FooterIcon
        iconName="cog"
        onClick={onShowConfigModal}
      />
    </div>
  );
}

Footer.propTypes = {
  onShowLoginModal: PropTypes.func.isRequired,
  onShowConnectForm: PropTypes.func.isRequired,
};
