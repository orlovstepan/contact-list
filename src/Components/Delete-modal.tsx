import { useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteUser } from "../store/user";
import { useDispatch } from "react-redux";

type Props = {
    handleClose: () => void,
}

function DeleteModal({ handleClose}: Props) {
    
    const dispatch = useDispatch();

    const { checked } = useSelector((state: RootState) => state.userState)

    function handleDelete(){
        dispatch(deleteUser(checked));
        handleClose();
    }


  return (
    <div className="delete--modal"> 
            <div className="delete--modal-content">
            <p className="delete--confirmation-text">Are you sure you want to delete {checked.length} {checked.length>1 ? "contacts" : "contact"}?</p>
            <div className="delete--confirmation-buttons">
                <button onClick={() => handleDelete()}>Yes</button>
                <button onClick={handleClose}>No</button>
            </div>
            </div>
        </div>
  )
}

export default DeleteModal