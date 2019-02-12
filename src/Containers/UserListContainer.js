import React from 'react'
import {SelectedUser, UserRow} from '../Components'
import {Table} from 'reactstrap'
import UserHeader from "../Components/UserHeader";

export default class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.buildUserRows = this.buildUserRows.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.unselectUser = this.unselectUser.bind(this);
    this.state = {
      users: this.props.users,
      selectedUser: null
    }
  }

  buildUserRows(users) {
    const UsersList = users.map((user) => {
      return (
        <UserRow user={user} key={user.id} selected={false} onClick={this.selectUser}/>
      )
    });

    return (
      <tbody>
      {UsersList}
      </tbody>
    )
  }

  selectUser(user) {
    let users = this.state.users.filter(function (obj) {
      return obj.id !== user.id;
    });

    this.setState({
        users: users,
        selectedUser: user
      }
    )
  }

  unselectUser(user) {
    let users = this.state.users;
    users.push(user);

    this.setState({
      users: users,
      selectedUser: null
    })
  }

  render() {
    return (
      <div className='container w-100'>
        {this.state.selectedUser &&
        <div className="row">
          <SelectedUser user={this.state.selectedUser} onClick={this.unselectUser}/>
        </div>
        }
        <div className='row'>
          <h1>Users</h1>
          <Table hover>
            <UserHeader/>
            {this.buildUserRows(this.state.users)}
          </Table>
        </div>
      </div>
    )
  }
}