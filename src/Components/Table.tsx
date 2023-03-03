import { useState } from 'react';
import { User } from '../type'
import Add from './Add';

type Props = {
  users: User[],
  usersArr: User[]
  setUsers: (user:User) => void
}

function Table({ setUsers, usersArr, users }: Props) {
  return (
    <div className="table" >
      <div className="table--upperRow">
        <p className="label"> Name </p>
        <p className="label">Phone </p>
        <p className="label">Email </p>
      </div>
      <Contact usersArr={usersArr} setUsers={setUsers} users={users} />
    </div>
  )
}

export default Table

function Contact({ setUsers, usersArr, users }: Props) {

  const [copied, setCopied] = useState('');
  const [showModal, setShowModal] = useState(false);

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
    } catch (e) {
      console.log("error in copy", e);
    }
  }

  const handleAdd = () => {
    setShowModal(!showModal);
  }

  const handleClose = () => {
    setShowModal(!showModal);
  }

  return (
    <div>
      <ul>
        {users.map(user => <li id={user.id % 2 ? "even" : "odd"} key={user.id} className="container" >
          <p className="info">{user.name} </p>
          <p className="info">{user.phone} </p>
          <p className="info" id="email" onClick={() => copyEmail(user.email)}>
            {user.email}
            <img src={copied === user.email ? "tick.png" : "copy.png"} className="copy" />
          </p>
        </li>)}
      </ul>
      <button onClick={handleAdd} className='btn-add'>+</button>
      {showModal && <Add usersArr={usersArr} setUsers={setUsers} handleClose={handleClose} showModal={showModal} />}
    </div>
  )
}