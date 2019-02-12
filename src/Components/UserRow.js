import React from 'react'
import {Button} from 'reactstrap'

export default function UserRow(props) {
  const user = props.user;
  let btnText = props.selected ? 'Un-Select' : 'Select';
  let btnColor = props.selected ? 'danger' : 'info';


  return (
    <tr key={user.key}>
      <td>
        <img src={user.image}/>
      </td>
      <td>{user.first}</td>
      <td>{user.last}</td>
      <td>{user.email}</td>
      <td>
        <Button onClick={() => {props.onClick(user)}} color={btnColor} outline>{btnText}</Button>
      </td>
    </tr>
  )
}