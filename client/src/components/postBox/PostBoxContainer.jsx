import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PostBox from './PostBox';
import { withRouter } from 'react-router'
import postAction from 'store/actions/postAction';
import SuccessModal from 'components/common/modal/SuccessModal';

class PostBoxContainer extends Component { 
	constructor (props) {
		super(props)
		this.state = {
			text:'',
			actionId:null,
			displaySuccessModal:false
		} 
	};    
  componentDidUpdate(prevProps){
    if (prevProps.success!==this.props.success && (this.props.success === this.state.actionId)) {
      this.setState({displaySuccessModal:true});

      }
  }
	sendMsg = () => {
    	const actionId =  Math.random();
    	this.setState({actionId});
    	this.props.sendMessage(this.props.user.id,this.props.owner,this.state.text,actionId);
	}
  successAction = () => {  
    this.setState({
      displaySuccessModal:false,
    })
    this.props.hide();

  }
	render() {
		const {owner} = this.props;
		return ( 
			<Fragment> 
			{this.state.displaySuccessModal 
			? <SuccessModal successInfo='Wiaoomość została wyslana' successAction={this.successAction} /> : null}
			<PostBox sendMsg={this.sendMsg}
			formData={this.state} 
			onChange={v=>this.setState(v)} />
			</Fragment>
			);
	}
}
function mapStateToProps (state) {
	return {
		user: state.user,
    	success: state.success,

	}
}


function mapDispatchToProps(dispatch) {
	return {
		sendMessage: (sender,recipient,text,actionId) => dispatch(postAction.sendMessage(sender,recipient,text,actionId)),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostBoxContainer));
