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
      )
    }));
  }

  onHiddenModal(e) {
    this.props.dispatch(hiddenModal())
    e.preventDefault();
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
        <Footer onShowLoginPage={this.onShowLoginPage} />
      </div>
    );
  }
}

export default connect(
  state => ({
    modal: state.modal,
    user: state.user,
  })
)(Comelon);
