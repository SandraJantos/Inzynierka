import React, { Component } from 'react';
import PlannerContainer from 'components/planner/PlannerContainer';

class PlannerPage extends Component {

  render() {
    return (
        <PlannerContainer location={this.props.location} />
    );
  } 
}

export default PlannerPage;
     