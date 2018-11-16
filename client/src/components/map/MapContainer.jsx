import React, { Component, Fragment } from 'react';
import Map from './Map';
import { connect } from 'react-redux';
import userAction from 'store/actions/userAction';
import { withRouter } from 'react-router';


class MapContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			bounds: null,
			center: {
				lat:  50.29449229999999,
				lng: 18.67138019999993,
			},
			markers: [],		
			lat:'',
			lng:'',
			serched:false,
			displayInfo:null

		} 
		this.handleMapMounted = this.handleMapMounted.bind(this);
		this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
		this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
		this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
	};  
	handleMapMounted(map) {
		this._map = map;
	}
	componentDidUpdate(prevState) {
		if (prevState.lat !== this.state.lat && prevState.lng !== this.state.lng && this.state.serched===true && this.props.setLocation!==undefined) {
			this.props.setLocation(this.state.lat,this.state.lng);
			this.setState({serched:false})
		}
	}
	handleBoundsChanged() {
		this.setState({
			bounds: this._map.getBounds(),
			center: this._map.getCenter(),
		});
	}
	redirectToProfile = (user,userId) => {
		this.props.history.push( {pathname: `profile/${user}`,
			state: { id: userId }});

	}
		click = (i) => {
		this.setState(prevState => ({displayInfo:prevState.displayInfo === i ? null : i}))
	}
	handleSearchBoxMounted(searchBox) {
		this._searchBox = searchBox;
	}

	handlePlacesChanged() {

		const places = this._searchBox.getPlaces();
		this.setState({lat:(places[0].geometry.location||{}).lat(),lng:(places[0].geometry.location||{}).lng()})
		const markers = places.map(place => ({
			position: place.geometry.location,
		}));

		const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

		this.setState({
			center: mapCenter,
			markers,
			serched:true
		});
	}
 
	render() { 
		const {setLocation,users,mainMap,...rest} = this.props;
		return (
			<Map mainMap={mainMap} click={this.click} locations={(users||[]).length>0 ? 
				(users||[]).filter(e =>e.location!==undefined).map((e,index) => (e.location.slice(1, -1).split(',')).concat(e))
				: []}  onMapMounted={this.handleMapMounted}
			onBoundsChanged={this.handleBoundsChanged} markers={this.state.markers}
			onSearchBoxMounted={this.handleSearchBoxMounted} redirectToProfile={this.redirectToProfile}
			bounds={this.state.bounds} center={this.state.center}
			onPlacesChanged={this.handlePlacesChanged} displayInfo={this.state.displayInfo} 
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBj4blO0jFHddFGpPJA6bnFPw_QWpBL12U&v=3.exp&libraries=geometry,drawing,places`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: `600px`, width: `600px` }} />}
			mapElement={<div style={{ height: `100%` }} />} {...rest}/>
			);
	} 
}


function mapStateToProps (state) {
	return {
		users:state.users,
	}
}


function mapDispatchToProps(dispatch) {
	return {
		getUsersList: () => dispatch(userAction.getUsersList()),
	} 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapContainer));
