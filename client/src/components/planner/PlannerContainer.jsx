import React, { Component } from 'react';
import Planner from './Planner';
import { connect } from 'react-redux';


class PlannerContainer extends Component {
		constructor (props) {
		super(props)
		this.state = {
			chatMsg:'',
			msgBy:''
		} 
	};    

  render() {
    return (
        <Planner  />
    );
  } 
}
function mapStateToProps (state,ownProps) {
	return {
	}
}


function mapDispatchToProps(dispatch) {
	return {
	
	} 
}
export default connect(mapStateToProps, mapDispatchToProps)(PlannerContainer);
     