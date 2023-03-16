import { useState } from "react"
import { User } from "../type"

type Props = {
  handleClose: () => void,
  showModal: boolean,
  onAdd: (user: User) => void,
}

function Add({handleClose, showModal, onAdd}: Props) {

  const [user, setUser] = useState<User>(
    { 
      name: '',
      phone: '',
      id: new Date().valueOf(),
      email: ''
    }
  )
  
  const handleChange = (e: any): void => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleAdd = (e: any) =>{
    e.preventDefault();
    onAdd(user)
  }

  return (
    <div className="add-form-modal">
      <div className="add-form-modal-content">
            <button className="button--close" onClick={handleClose}>X</button>
          <form className="add-person">
            <input className="add-person--input" name="name" value={user.name} placeholder="name" onChange={handleChange}></input>
            <input className="add-person--input" name="phone" value={user.phone} placeholder="phone" onChange={handleChange}></input>
            <input className="add-person--input" name="email" value={user.email} placeholder="email" onChange={handleChange}></input>
            <button onClick={handleAdd} className="button--add">add</button>
          </form>
        </div>
    </div>
  )
}

export default Add
