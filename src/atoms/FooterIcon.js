import React from 'react';
import './FooterIcon.css';

export const FooterIcon = (props) => {
  const { iconName, ...others } = props;
  return (
    <div className="footer-icon" {...others} >
      <span className={`fa fa-${iconName} fa-2x`} />
    </div>
  );
};
