import React from 'react';
import './FooterIcon.css';

export default function FooterIcon(props) {
  const { iconName, ...others } = props;
  return (
    <div className="footer-icon" {...others} >
      <span className={`fa fa-${iconName} fa-2x`} />
    </div>
  );
}
