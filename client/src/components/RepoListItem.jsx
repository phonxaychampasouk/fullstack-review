import React, { Component } from 'react';

class RepoListItem extends Component {
  constructor(props){
    super(props);
      this.state = {
        repos: this.props.repos
      }
    }

render(){
   return (
   <div> this states prop is : {this.state.repos}</div>
   )
}
}

export default RepoListItem;