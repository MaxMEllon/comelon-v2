import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import { LoginForm } from '../atoms/LoginForm';
import {
  showModal,
  hiddenModal,
} from '../actions';

class Comelon extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onShowLoginPage() {
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

  onHiddenModal(e) {
    e.preventDefault();
    this.props.dispatch(hiddenModal());
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
          onShowLoginPage={this.onShowLoginPage}
          onShowConnectForm={this.onShowConnectForm}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    modal: state.modal,
    user: state.user,
    comments: state.comments,
  }),
)(Comelon);
