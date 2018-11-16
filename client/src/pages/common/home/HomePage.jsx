import React, { Component, Fragment } from 'react';
import HomeContainer from 'components/home/HomeContainer';
import TopBarContainer from 'components/topBar/TopBarContainer'
import { Link } from 'react-router-dom';

class HomePage extends Component {

	render() {
    const {match} = this.props;
		return (
			<HomeContainer action={(this.props.location.state||{}).action} />
		);
	} 
}

export default HomePage;
