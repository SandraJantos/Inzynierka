import React, { Component } from 'react';
import Modal from './Modal';

class SuccessModal extends Component {
  render() {
  const {id, btnText, header, hide,successInfo,t} = this.props;
    return (
      <Modal
        btnText={btnText}
        header={header}
        successModal={true}
        id={id}
        hide={hide}>
        <div>{successInfo}</div>
        <button onClick={this.props.successAction}>ok</button>
      </Modal>
    );
  }
}
  
export default SuccessModal;
   