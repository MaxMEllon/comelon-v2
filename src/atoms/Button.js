import React from 'react';
import './Button.css';

export const Button = ({ type, content, ...props }) => {
  const klass = type === undefined ? 'button primary' : `button ${type}`;
  return (
    <button className={klass} {...props}>
      { content }
    </button>
  );
};
