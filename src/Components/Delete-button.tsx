import React from 'react'

type Props = {
    checked: number[],
    deleteUser: (checked: number[]) => void,
}

function DeleteButton({checked, deleteUser}: Props) {
  return (
    <button className={checked.length ? 'delete--enabled' : 'delete--disabled'} onClick={() => deleteUser(checked)}>Delete</button>
  )
}

export default DeleteButton