import { useState } from "react"
import { User } from "../type"

type Props = {
  handleClose: () => void,
  showModal: boolean,
  setUsers: (user: User) => void,
  usersArr: User[]
}

function Add({handleClose, usersArr, setUsers}: Props) {

  const [user, setUser] = useState<User>(
    { 
      name: '',
      phone: '',
      id: usersArr.length+1,
      email: ''
    }
  )
  
  const handleChange = (e: React.SyntheticEvent): void => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleAdd = (e: any): void =>{
    e.preventDefault();
    setUsers(user)
  }

  return (
    <div className="add-form-modal">
      <div className="add-form-modal-content">
      <form className="add-person">
        <button className="button--close" onClick={handleClose}>X</button>
        <input name="name" value={user.name} placeholder="name" onChange={handleChange}></input>
        <input name="phone" value={user.phone} placeholder="phone" onChange={handleChange}></input>
        <input name="email" value={user.email} placeholder="email" onChange={handleChange}></input>
        <button onClick={(e)=>handleAdd(e)} className="button--add">add</button>
      </form>
        </div>
    </div>
  )
}

export default Add
