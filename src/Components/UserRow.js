import React from 'react'

export default function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.key}>
      <td>
        <img src={user.image}/>
      </td>
      <td>{user.first}</td>
      <td>{user.last}</td>
      <td>{user.email}</td>
    </tr>
  )
}