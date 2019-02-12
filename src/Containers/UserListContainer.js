import React from 'react'
import {SelectedUser, UserRow} from '../Components'
import User from '../lib/User.js'
import {Table} from 'reactstrap'

export default class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.buildUserRows = this.buildUserRows.bind(this);
    this.state = {
      users: {},
      selectedUser: {}
    }
  }

  buildUserRows(users) {
    const UsersList = Object.keys(users).map((key) => {
      const user = new User(key);

      return (
        <UserRow user={user}/>
      )
    });

    return (
      <tbody>
      {UsersList}
      </tbody>
    )
  }

  render() {
    return (
      <div className='container'>
        <div className="row justify-content-center">
          <SelectedUser user={this.state.selectedUser}/>
        </div>
        <Table hover>
          <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          </thead>
          {this.buildUserRows}
        </Table>
      </div>
    )
  }
}