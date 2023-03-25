type Props = {
    checked: number[],
    deleteUser: (checked: number[]) => void,
    handleClose: () => void,
}

function DeleteModal({deleteUser, checked, handleClose}: Props) {

    function handleDelete(){
        deleteUser(checked);
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