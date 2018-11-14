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
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.id == id) {
        task.state = cat;
      }
      return task;
    });

    this.setState({
      tasks:tasks
    });
 
    this.props.changed(id,cat)
  }
  render() {
    return (
       <div>djsa</div>
    );
  } 
}

export default Planner;
     