import { User, TypeSearch } from '../type'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue, setSearchType } from '..//store/filter'
import AddButton from './Add-button';
import DeleteButton from './Delete-button';
import { RootState } from '../store';

function Searchbar() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state: RootState) => state.filterState)
  const { checked } = useSelector((state: RootState) => state.userState)

  const handleChange = (value: string) => {
    dispatch(setSearchValue(value))
  }
  const handleChangeType = (value: TypeSearch) => {
    dispatch(setSearchType(value))
  }

  return (
    <div className='topBar'>
        <div className='searchbar'>
        <input className='search-input' placeholder="Search 🔎" value={searchValue} onChange={(e)=> handleChange(e.currentTarget.value)} />
        <select className='topBar--select-type' onChange={(e) => handleChangeType(e.currentTarget.value as TypeSearch)}>
          <option>name</option>
          <option>phone</option>
          <option>email</option>
        </select>
        </div>
        <div className='topBar--buttons'>
        <DeleteButton />
        <AddButton />
        </div>
    </div>
  )
}

export default Searchbar