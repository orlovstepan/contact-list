import {useState} from 'react'
import { User } from '../type'
import Add from './Add';

type Props = {
  setUser: (user: User) => void,
  resetSearchValue: (value: string) => void,
}

function AddButton({setUser,resetSearchValue}: Props) {

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
    <div>
        <button onClick={() => setShowModal(true)} className='btn-add'>Create contact</button>
        {showModal && <Add onAdd={handleAdd} handleClose={handleClose} showModal={showModal} />}
    </div>
  )
}

export default AddButton