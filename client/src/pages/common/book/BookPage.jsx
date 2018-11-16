import React, { Component } from 'react';
import BookContainer from 'components/book/BookContainer';

class BookPage extends Component {

  render() {
    return (
        <BookContainer bookId={this.props.location.state.bookId} />
    );
  } 
}

export default BookPage;
     