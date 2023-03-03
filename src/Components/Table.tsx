import { useState } from 'react';
import { User } from '../type'
import Add from './Add';

type Props = {
  users: User[],
  setUser: (user: User) => void,
  resetSearchValue: (value: string) => void,
  deleteUser: (id: number) => void
}

function Table({ setUser, deleteUser, resetSearchValue, users }: Props) {
  return (
    <div className="table" >
      <div className="table--upperRow">
        <p className="label"> Name </p>
        <p className="label">Phone </p>
        <p className="label">Email </p>
      </div>
      <Contact deleteUser={deleteUser}  setUser={setUser} resetSearchValue={resetSearchValue} users={users} />
    </div>
  )
}

export default Table

function Contact({ setUser, deleteUser, resetSearchValue, users }: Props) {

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

  const handleAdd = (user: User) => {
    resetSearchValue("");
    setUser(user);
    handleClose();
    
  }

  const handleClose = () => {
    setShowModal(!showModal);
  }

  return (
    <div>
      <ul>
        {users.map((user, index) => <li id={index % 2 ? "even" : "odd"} key={user.id} className="container" >
          <p className="info">{user.name} </p>
          <p className="info">{user.phone} </p>
          <p className="info" id="email" onClick={() => copyEmail(user.email)}>
            {user.email}
            <img src={copied === user.email ? "tick.png" : "copy.png"} className="copy" />
          </p>
          <button onClick={() => deleteUser(user.id)} >🗑️</button>
        </li>)}
      </ul>
      <button onClick={() => setShowModal(true)} className='btn-add'>+</button>
      {showModal && <Add onAdd={handleAdd} handleClose={handleClose} showModal={showModal} />}
    </div>
  )
}