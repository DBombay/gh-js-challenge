import React from 'react'

export default function UserRow(props) {
  const user = this.props.user;

  return(
    <tr key={user.key}>
      <td>user.image</td>
      <td>user.first</td>
      <td>user.last</td>
      <td>user.email</td>
    </tr>
  )
}