import React, { Component } from 'react';
import PlannerContainer from 'components/planner/PlannerContainer';

class PlannerPage extends Component {

  render() {
    return (
        <PlannerContainer userId={(this.props.location.state||{}).id} />
    );
  } 
}

export default PlannerPage;
     