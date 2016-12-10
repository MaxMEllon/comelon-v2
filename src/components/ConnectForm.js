import React, { PropTypes } from 'react';
import Button from '../atoms/Button';
import {
  fetchConnect,
  fadeOutModal,
} from '../actions';

const onConnect = (e, dispatch) => {
  const liveid = document.getElementById('connect-form-live-id').value;
  dispatch(fetchConnect({ liveid }));
};

const onHiddenModal = (e, dispatch) => {
  e.preventDefault();
  dispatch(fadeOutModal());
};
export default function ConnectForm({ dispatch }) {
  return (
    <div>
      <h1>接続する</h1>
      <hr />
      <input id="connect-form-live-id" />
      <div className="button-group" style={{ textAlign: 'right' }}>
        <Button
          type="danger"
          content="いいえ"
          onClick={e => onHiddenModal(e, dispatch)}
        />
        <Button
          content="はい"
          onClick={e => onConnect(e, dispatch)}
        />
      </div>
    </div>
  );
}

ConnectForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
