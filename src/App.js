import React, { Component } from 'react';
import UserListContainer from './Containers/UserListContainer'
import Users from './lib/users.json'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserListContainer users={Users}/>
      </div>
    );
  }
}
