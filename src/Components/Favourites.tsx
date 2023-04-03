import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store"
import { setShowFavourite } from "../store/filter";


function Favourites() {

    const dispatch = useDispatch();

    const { favourite } = useSelector((state: RootState) => state.userState)
    const { showFavourite } = useSelector((state: RootState) => state.filterState)

    const handleFavourite = () => {
        dispatch(setShowFavourite(!showFavourite))
      }

  return (
    <div className="favourites-container">
        <button onClick={()=>handleFavourite()}
        className={ favourite.length>0 ? "favourites--button" : 'favourites--button--hidden'}>
        Show Favourites 
        </button>
    </div>
  )
}

export default Favourites