import React, { Component } from 'react';

class Textarea extends Component {
  render() {
    const {onChange, ...rest} = this.props;
    return (
          <textarea value='' className="textarea" onChange={onChange} {...rest}></textarea>
      );
  }
}

export default Textarea;
