import React from 'react'
import Octicon, {ChevronDown, ChevronUp} from '@githubprimer/octicons-react'
import {Button} from 'reactstrap'

export default class UserHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      first: true,
      last: true
    }
  }

  toggle(column) {
    if (column === "first") {
      this.props.compare('first', this.state.first ? 'asc' : 'desc');
      this.setState({
        first: !this.state.first
      })
    } else if (column === "last") {
      this.props.compare('last', this.state.last ? 'asc' : 'desc');
      this.setState({
        last: !this.state.last
      })
    }
  }

  render() {
    return (
      <thead>
      <tr>
        <th>Image</th>
        <th>
          First Name
          {!this.props.selected &&
          <Button color='link' onClick={() => {this.toggle("first")}}>
            <Octicon
              icon={this.state.first ? ChevronDown : ChevronUp}
              className='pl-1'
              size='small'/>
          </Button>
          }
        </th>
        <th>
          Last Name
          {!this.props.selected &&
          <Button color='link' onClick={() => {this.toggle("last")}}>
            <Octicon
              icon={this.state.last ? ChevronDown : ChevronUp}
              className='pl-1'
              size='small'/>
          </Button>
          }
        </th>
        <th>Email</th>
        <th></th>
      </tr>
      </thead>
    )
  }
}
