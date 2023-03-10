import { User, TypeSearch } from '../type'
import { useState } from 'react'
import Add from './Add';

type Props = {
  value: string,
  handleChange: (value: string) => void,
  setUser: (user: User) => void,
  resetSearchValue: (value: string) => void,
  handleChangeType: (type: TypeSearch) => void,
}

function Searchbar({value, setUser, resetSearchValue, handleChange, handleChangeType}: Props) {

  const [showModal, setShowModal] = useState(false);

  const handleAdd = (user: User) => {
    resetSearchValue("");
    setUser(user);
    handleClose();
  }

  const handleClose = () => {
    setShowModal(!showModal);
  }

  return (
    <div className='topBar'>
        <div className='searchbar'>
        <input className='search-input' placeholder="Search 🔎" value={value} onChange={(e)=> handleChange(e.currentTarget.value)} />
        <select onChange={(e) => handleChangeType(e.currentTarget.value as TypeSearch)}>
          <option>name</option>
          <option>phone</option>
          <option>email</option>
        </select>
        </div>
        <button onClick={() => setShowModal(true)} className='btn-add'>Create contact</button>
        {showModal && <Add onAdd={handleAdd} handleClose={handleClose} showModal={showModal} />}
    </div>
  )
}

export default Searchbar