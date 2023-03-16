import { User, TypeSearch } from '../type'
import { useState } from 'react'
import Add from './Add';

type Props = {
  value: string,
  checked: number[],
  handleChange: (value: string) => void,
  setUser: (user: User) => void,
  resetSearchValue: (value: string) => void,
  handleChangeType: (type: TypeSearch) => void,
  deleteUser: (checked: number[]) => void,
}

function Searchbar({value, checked, setUser, resetSearchValue, handleChange, handleChangeType, deleteUser}: Props) {

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
        <select className='topBar--select-type' onChange={(e) => handleChangeType(e.currentTarget.value as TypeSearch)}>
          <option>name</option>
          <option>phone</option>
          <option>email</option>
        </select>
        </div>
        <div className='topBar--buttons'>
        <button className={checked.length ? 'delete--enabled' : 'delete--disabled'} onClick={() => deleteUser(checked)}>Delete</button>
        <button onClick={() => setShowModal(true)} className='btn-add'>Create contact</button>
        </div>
        {showModal && <Add onAdd={handleAdd} handleClose={handleClose} showModal={showModal} />}
    </div>
  )
}

export default Searchbar