import React from 'react';
import { FooterIcon } from '../atoms/FooterIcon';
import './Footer.css';


export const Footer = ({ onShowLoginPage }) => (
  <div className="footer">
    <FooterIcon
      iconName="user"
      onClick={onShowLoginPage}
    />
    <FooterIcon iconName="star" />
    <FooterIcon iconName="volume-up" />
    <FooterIcon iconName="cog" />
  </div>
);
