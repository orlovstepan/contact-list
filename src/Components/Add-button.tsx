import {useState} from 'react'
import { User } from '../type'
import Add from './Add';
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../store/user';
import { resetFilter } from '../store/filter';


function AddButton() {

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);



  const handleAdd = (user: User) => {
    dispatch(resetFilter())
    dispatch(addUser(user))
    handleClose();
  }

  const handleClose = () => {
    setShowModal(!showModal);
  }
  return (
    <div>
        <button onClick={() => setShowModal(true)} className='btn-add'>Create contact</button>
        {showModal && <Add onAdd={handleAdd} handleClose={handleClose} />}
    </div>
  )
}

export default AddButton