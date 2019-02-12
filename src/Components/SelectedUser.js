import React from 'react'
import {Table} from 'reactstrap'
import {UserHeader, UserRow} from './'

export default function SelectedUser(props) {
  return (
    <div className='container-fluid'>
      <h1>Selected User</h1>
      <Table borderless>
        <UserHeader/>
        <tbody>
        <UserRow user={props.user}/>
        </tbody>
      </Table>
    </div>
  )
}