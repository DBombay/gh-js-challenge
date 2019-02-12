import React from 'react'
import {SelectedUser, UserRow} from '../Components'
import {Table} from 'reactstrap'
import UserHeader from "../Components/UserHeader";

export default class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.buildUserRows = this.buildUserRows.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.sortNames = this.sortNames.bind(this);
    this.unselectUser = this.unselectUser.bind(this);
    this.state = {
      users: this.props.users,
      selectedUser: null
    }
  }

  componentWillReceiveProps(props) {
    this.sortNames('first', 'asc')
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

  compareValues(key, order = 'asc') {
    return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  selectUser(user) {
    if (this.state.selectedUser !== null) {
      this.unselectUser(this.state.selectedUser)
    }
  
    let users = this.state.users.filter(function (obj) {
      return obj.id !== user.id;
    });

    this.setState({
        users: users,
        selectedUser: user
      }
    )
  }

  sortNames(value, direction) {
    let users = this.state.users;

    this.setState({
      users: users.sort(this.compareValues(value, direction))
    })
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
            <UserHeader compare={this.sortNames} selected={false}/>
            {this.buildUserRows(this.state.users)}
          </Table>
        </div>
      </div>
    )
  }
}