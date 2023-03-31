import { useState } from "react";
import DeleteModal from "./Delete-modal";
import { useSelector } from "react-redux";
import { setChecked } from "../store/user";
import { RootState } from "../store";


function DeleteButton() {

  const { checked } = useSelector((state: RootState) => state.userState)

    const [showModal, setShowModal] = useState<Boolean>(false);

    const handleClose = () => {
        setShowModal(!showModal);
      }


  return (
    <div className="delete-container">
        <button onClick={()=>setShowModal(!showModal)} className={checked.length ? 'delete--enabled' : 'delete--disabled'}>Delete</button>
        {showModal && <DeleteModal handleClose={handleClose} />}
    </div>
  )
}

export default DeleteButton