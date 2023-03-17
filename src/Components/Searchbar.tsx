import { User, TypeSearch } from '../type'
import AddButton from './Add-button';
import DeleteButton from './Delete-button';

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
        <DeleteButton checked={checked} deleteUser={deleteUser} />
        <AddButton setUser={setUser} resetSearchValue={resetSearchValue} />
        </div>
    </div>
  )
}

export default Searchbar