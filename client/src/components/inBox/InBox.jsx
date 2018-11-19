import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Form from 'components/common/form/Form';  

class InBox extends Component { 
    headerCell(name){
    return (<th>
      {name}
      </th>);
  }

  bodyCell(value){
    return (<td>
      {value}
      </td>);
  }
	render() {
		const h = (name)=>this.headerCell(name);
		const b = (name)=>this.bodyCell(name);
		const {posts,users} = this.props;
		return ( 
			<Fragment>
		<div className="table-responsive">
           <table>
             <thead>
               <tr>
                 {h('nadawca')}
                 {h('treść')}
               </tr>
             </thead>
             <tbody>
             {this.props.posts.map(e => <tr key={e._id}>
             	{b((users.find(el => el._id === e.sender))).name}
             	{b(e.text)}

              </tr>)}
             </tbody>
           </table>
           </div>
			</Fragment>
			);
	}
}


export default InBox;
