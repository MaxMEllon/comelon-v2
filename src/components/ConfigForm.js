import React, { PropTypes } from 'react';
import './ConfigFrom.css';

export default function ConfigForm() {
  return (
    <div className="config-page">
      <h2>設定画面</h2>
      <hr />
    </div>
  );
}

ConfigForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
