import React, { PropTypes } from 'react';
import FooterIcon from '../atoms/FooterIcon';
import './Footer.css';

export default function Footer({ onShowLoginPage, onShowConnectForm }) {
  return (
    <div className="footer">
      <FooterIcon
        iconName="user"
        onClick={onShowLoginPage}
      />
      <FooterIcon
        iconName="plug"
        onClick={onShowConnectForm}
      />
      <FooterIcon iconName="volume-up" />
      <FooterIcon iconName="cog" />
    </div>
  );
}

Footer.propTypes = {
  onShowLoginPage: PropTypes.func.isRequired,
  onShowConnectForm: PropTypes.func.isRequired,
};
