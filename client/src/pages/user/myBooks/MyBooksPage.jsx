import React, { Component } from 'react';
import MyBooksContainer from 'components/myBooks/MyBooksContainer';

class MyBooksPage extends Component {

  render() {
    return (
        <MyBooksContainer location={this.props.location}/>
    );
  } 
}

export default MyBooksPage;
    