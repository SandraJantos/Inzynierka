import React, { Component } from 'react';
import { connect } from 'react-redux';


class Planner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books:''
    } 
  };    
  componentDidUpdate(prevProps){
    if (prevProps.books!==this.props.books) {
      this.setState({books:this.props.books});
    }
  }

  onDragStart = (ev, id) => {
    console.log(ev,id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    console.log(ev);
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let books = this.state.books.filter((book) => {
      if (book._id == id) {
        book.state = cat;
      }
      return book;
    });

    this.setState({
      books:books
    });

    this.props.changed(id,cat)
  }


  render() {
    let books = {
      unread: [],
      inProgess:[],
      complete: []
    }
    if(this.state.books.length>0){
      (this.state.books||[]).forEach ((t) => {
        (books[t.state]||[]).push(
          <div key={t.id} 
          onDragStart = {(e) => this.onDragStart(e, t._id)}
          draggable
          className="draggable"
          style = {{backgroundColor: t.bgcolor}}
          >
          <div> <span className="title-sm">TYTUŁ: </span>{t.title}</div>
          </div>
          );
      }) 
    }
    else{
      books = {}
    }

    return (
      <div className="container-drag">
        <div className="wip"
        onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e, "unread")}}>
        <span className="book-header">DO PRZECZYTANIA</span>
        {books.unread}
        </div>
        <div className="inProgess"
        onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>{this.onDrop(e, "inProgess")}}>
        <span className="book-header">W TRAKCIE</span>
        {books.inProgess}
        </div>
        <div className="droppable" 
        onDragOver={(e)=>this.onDragOver(e)}
        onDrop={(e)=>this.onDrop(e, "complete")}>
        <span className="book-header">PRZECZYTANE</span>
        {books.complete}
        </div>
      </div>
      );
  } 
}

export default Planner;
