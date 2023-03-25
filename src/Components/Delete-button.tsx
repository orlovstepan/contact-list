// ADD CONFIRMATION MODAL

import { useState } from "react";
import DeleteModal from "./Delete-modal";


type Props = {
    checked: number[],
    deleteUser: (checked: number[]) => void,
}

function DeleteButton({checked, deleteUser}: Props) {

    const [showModal, setShowModal] = useState<Boolean>(false);

    const handleClose = () => {
        setShowModal(!showModal);
      }


  return (
    <div className="delete-container">
        <button onClick={()=>setShowModal(!showModal)} className={checked.length ? 'delete--enabled' : 'delete--disabled'}>Delete</button>
        {showModal && <DeleteModal deleteUser={deleteUser} checked={checked} handleClose={handleClose} />}
    </div>
  )
}

export default DeleteButton