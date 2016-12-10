import React, { PropTypes } from 'react';
import './Button.css';

export default function Button({ type, content, ...props }) {
  const klass = type === undefined ? 'button primary' : `button ${type}`;
  return (
    <button className={klass} {...props}>
      { content }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string.isRequired,
};
