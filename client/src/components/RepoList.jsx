import React, {Component} from 'react';
import RepoListItems from './RepoListItem.jsx'

class RepoList extends Component {
constructor(props) {
  super(props);
  this.state = {
    repos: this.props.repos
  }
}

render(){
  return (
    <div>
    <RepoListItems repos = {this.state.repos}/>
    </div>

  )
}
}

export default RepoList;