import { useState } from "react"
import { User } from "../type"
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from "../store"
import { addUser, addUsers } from "../store/user"

// DISPATCH FUNCTIONS FROM REACT

type Props = {
  handleClose: () => void,
}


function Add({ handleClose }: Props) {
  
  const dispatch = useDispatch();

  const {users} = useSelector((state: RootState)=>state.userState);

  const [phoneUsed, setPhoneUsed] = useState<boolean>(false);
  console.log('phone is used', phoneUsed);

  
  const [user, setUser] = useState<User>(
    {
      name: '',
      phone: '',
      id: new Date().valueOf(),
      email: ''
    }
    )
    
  const isPhoneUsed = (phone: string) =>{
    const phoneArr = users.map(user=>user.phone);
    if (phoneArr.includes(phone)) {
      setPhoneUsed(true);
      return true 
    };
    return false
  }
    
  const handleChange = (e: any): void => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const evrethingAdd = (e: any) => {
    e.preventDefault();
    dispatch(addUser(user));
    handleClose()
  }

  const updateUser = (newUser: User, oldUser: User): User => {
    if (newUser.phone === oldUser.phone){
      return {
        ...oldUser,
        name: newUser.name,
        phone: newUser.phone,
        email: newUser.email
      }
    }
    return oldUser;
  }

  const updateData = () =>{
    const newUsers = users.map((oldUser => updateUser(user, oldUser)))
    dispatch(addUsers(newUsers));
    handleClose();
  }

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (isPhoneUsed(user.phone)) {
      return
    }
    dispatch(addUser(user));
    handleClose()
  }

  return (
    <div className="add-form-modal">
      <div className="add-form-modal-content">
        <button className="button--close" onClick={handleClose}>X</button>
        <form className="add-person">
          <input className="add-person--input" name="name" value={user.name} placeholder="name" onChange={handleChange}></input>
          <input className="add-person--input" name="phone" value={user.phone} placeholder="phone" onChange={handleChange}></input>
          <input className="add-person--input" name="email" value={user.email} placeholder="email" onChange={handleChange}></input>
          <button disabled={!Boolean(user.name && user.email || user.phone)} onClick={handleAdd} className="button--add">add</button>
        </form>
        {phoneUsed && <div className="phone--update"> 
        <p>The phone is already in use, would you still like to add?</p>
        <button onClick={evrethingAdd}>Yes, add anyway</button>
        <button onClick={updateData} >Yes, but change contact data</button>
        <button onClick={handleClose}>No</button>
       </div>}
      </div>
    </div>
  )
}

export default Add
