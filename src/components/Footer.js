import React, { PropTypes } from 'react';
import { FooterIcon } from '../atoms/FooterIcon';
import './Footer.css';

export const Footer = ({ onShowLoginPage, onShowConnectForm }) => (
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

Footer.propTypes = {
  onShowLoginPage: PropTypes.func.isRequired,
  onShowConnectForm: PropTypes.func.isRequired,
};
