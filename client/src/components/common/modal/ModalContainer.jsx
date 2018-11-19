import React, { Component } from 'react';
import Modal from './Modal';

class ModalFormContainer extends Component {
  render() {
  const {id, children, btnText, header, hide, style} = this.props;
    return (
      <Modal
        btnText={btnText}
        header={header}
        id={id}
        hide={hide}
        style={style}>
        {children}
      </Modal>
    );
  }
}

 
export default ModalFormContainer;
 