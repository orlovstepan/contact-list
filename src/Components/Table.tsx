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

  const [checked, setChecked] = useState<Number[]>([]);

  console.log('checked',checked)



  const handleCheckEach = (id: number, e: any) =>{
    const value = checked.filter(userId => id!==userId);
    setChecked(prev=> prev.includes(id) ? value : [...prev, id] );
  }

  const handleCheckAll = (e: any) =>{
    setChecked(users.length === checked.length ? [] : users.map(user=>user.id))
  }

  return (
    <table className="table" >
      <thead>
      <tr className="table--upperRow">
        <td><input onChange={(e)=>handleCheckAll(e)}
         name="check--all" type={'checkbox'}/></td>
        <th className="label"> Name </th>
        <th className="label">Phone </th>
        <th className="label">Email </th>
      </tr>
      </thead>
      <tbody>
      {users.map((user, index) => <tr id={index % 2 ? "even" : "odd"} key={user.id} className="container" >
          <td>
            <input name="check--individual" 
            onChange={(e)=> handleCheckEach(user.id, e)}
            checked={checked.includes(user.id) ? true: false} 
            className="info"
            type={'checkbox'}/>
          </td>
          <td className="info">{user.name} </td>
          <td className="info">{user.phone} </td>
          <td className="info" id="email" // onClick={() => copyEmail(user.email)}
          >
            {user.email}
            {/* <img src={copied === user.email ? "tick.png" : "copy.png"} className="copy" /> */}
          </td>
          {/* <button onClick={() => deleteUser(user.id)} >🗑️</button> */}
        </tr>)}
        </tbody>
    </table>
  )
}

export default Table






////// NOT USING THIS
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
        {users.map((user, index) => <tr id={index % 2 ? "even" : "odd"} key={user.id} className="container" >
          <td className="info">{user.name} </td>
          <td className="info">{user.phone} </td>
          <td className="info" id="email" onClick={() => copyEmail(user.email)}>
            {user.email}
            <img src={copied === user.email ? "tick.png" : "copy.png"} className="copy" />
          </td>
          {/* <button onClick={() => deleteUser(user.id)} >🗑️</button> */}
        </tr>)}
      <button onClick={() => setShowModal(true)} className='btn-add'>+</button>
      {showModal && <Add onAdd={handleAdd} handleClose={handleClose} showModal={showModal} />}
    </div>
  )
}