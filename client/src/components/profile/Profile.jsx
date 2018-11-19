import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Form from 'components/common/form/Form';  
import ModalContainer from 'components/common/modal/ModalContainer';  
import PostBoxContainer from 'components/postBox/PostBoxContainer';  
class Profile extends Component {
    constructor (props) {
    super(props)
    this.state = {
      showPostModal:false
    } 
  };
    showPostModal = () => {
     this.setState({
        showPostModal: true
      });
  }    
  render() {
    const {books,match,reservationId,formData,onChange,user,owner} = this.props;
    return (
      <div>
      <Form
        formData={formData} 
        onChange={onChange}  
        schema={[
        {name:'zarezerwowane', path:'reservedBooks',type:'checkbox'}, 
        ]} 
      /> 
      {books.length>0 ? books.map(el => <div>
        <div>title:{el.title}</div>
        <div>description:{el.description}</div>
        <img style={{width:'200px'}} src={`https://s3.amazonaws.com/samimagesbucket/${(el.image||{}).key}`}  />
        <Link to={{pathname:`/book/${el.title}`,state:{ bookId: el._id,reservationId }}}>Więcej</Link>
        <div>state:{el.reservationState==='0' ? <span style={{color:'green'}}>FREE!</span> : null}</div>
        </div>
        ) : null}
        {Object.keys(user||{}).length > 0 ? <div onClick={()=>{this.showPostModal()}}>{`Skontaktuj sie z ${(owner||{}).name}`}</div> : null}
        {this.state.showPostModal===true ? <ModalContainer hide={()=>{this.setState({showPostModal:false})}}>
        <PostBoxContainer hide={()=>{this.setState({showPostModal:false})}} owner={owner._id} />
        </ModalContainer> : null}
      </div>
      );
  } 
}
 
export default withRouter(Profile);
 