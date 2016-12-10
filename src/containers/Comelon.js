import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Modal from '../components/Modal';
import LoginForm from '../atoms/LoginForm';
import ConfigForm from '../components/ConfigForm';
import debugCreator from '../utils/debug';
import {
  showModal,
  fadeOutModal,
} from '../actions';

const debug = debugCreator('Comelon');

class Comelon extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps) {
    const result = !(Object.is(nextProps.user, this.props.user)) ||
                   !(Object.is(nextProps.modal, this.props.modal));
    debug('should update? : %o', result);
    return result;
  }

  onShowLoginModal() {
    this.props.dispatch(showModal({
      childComponent: (
        <LoginForm
          isLogin={this.props.user.isLogin}
          dispatch={this.props.dispatch}
        />
      ),
    }));
  }

  onShowConnectForm() {
    this.props.dispatch(showModal({
      childComponent: (
        <div>
          <h1>接続する</h1>
        </div>
      ),
    }));
  }

  onShowConfigModal() {
    this.props.dispatch(showModal({
      childComponent: (
        <ConfigForm
          dispatch={this.props.dispatch}
        />
      ),
    }));
  }

  onHiddenModal(e) {
    e.preventDefault();
    this.props.dispatch(fadeOutModal());
  }

  render() {
    const { modal } = this.props;
    return (
      <div>
        <Header />
        <Modal
          visible={modal.visible}
          childComponent={modal.childComponent}
          onHiddenModal={this.onHiddenModal}
        />
        <Footer
          onShowLoginModal={this.onShowLoginModal}
          onShowConnectForm={this.onShowConnectForm}
          onShowConfigModal={this.onShowConfigModal}
        />
      </div>
    );
  }
}

Comelon.propTypes = {
  dispatch: PropTypes.func.isRequired,
  modal: ImmutablePropTypes.record.isRequired,
  user: ImmutablePropTypes.record.isRequired,
  comments: ImmutablePropTypes.list.isRequired,
};

export default connect(
  state => ({
    modal: state.modal,
    user: state.user,
    comments: state.comments,
  }),
)(Comelon);
