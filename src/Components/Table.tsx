import { useState } from "react";
import { User } from "../type";
import { useSelector, useDispatch } from 'react-redux'
import { setChecked, setFavourite } from '../store/user';
import { RootState } from "../store";


function Table() {

  const dispatch = useDispatch();
  const { users, checked, favourite } = useSelector((state: RootState) => state.userState)
  const { searchValue, searchType } = useSelector((state: RootState) => state.filterState)

  console.log('favourite', favourite);

  const handleCheckEach = (id: number) => {
    const value = checked.filter((userId) => id !== userId);
    dispatch(setChecked(checked.includes(id) ? value : [...checked, id]))
  };

  const handleCheckAll = (e: any) => {
    dispatch(setChecked(
      users.length === checked.length ? [] : users.map((user) => user.id)
    ));
  };

  const handleFavourite = (id: number) => {
    const value = favourite.filter((userId) => id !== userId);
    dispatch(setFavourite(favourite.includes(id) ? value : [...favourite, id]))
  }

  const [copied, setCopied] = useState('');

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
    } catch (e) {
      console.log("error in copy", e);
    }
  }

  const filterUsers = (searchValue: string, users: User[], searchType: string) => {
    return users.filter((user) => {
      const value = user[searchType];
      if (typeof value === 'string') { 
        return value.toLowerCase().includes(searchValue.toLowerCase());
      }
      return false; 
    });
  };

  const filteredUsers = filterUsers(searchValue, users, searchType);

  return (
    <table className="table" >
      <thead>
        <tr className="table--upperRow">
          <td><input onChange={(e) => handleCheckAll(e)}
            name="check--all" type={'checkbox'} checked={checked.length === filteredUsers.length ? true : false} /></td>
          <th className="label"> Name </th>
          <th className="label">Phone </th>
          <th className="label">Email </th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user, index) => <tr id={index % 2 ? "even" : "odd"} key={user.id} className="container" >
          <td>
            <input name="check--individual"
              onChange={(e) => handleCheckEach(user.id)}
              checked={checked.includes(user.id) ? true : false}
              type={'checkbox'} />
          </td>
        
          <td className="info" id='name'>
            <img onClick={() => handleFavourite(user.id)} 
            className="user-favourite-icon"
            src={favourite.includes(user.id) ? 'favorite.png' : 'star.png' } /> 
            {user.name} </td>
          <td className="info">{user.phone} </td>
          <td className="info" id="email" onClick={() => copyEmail(user.email)}
          >
            {user.email}
            <img src={copied === user.email ? "tick.png" : "copy.png"} className="copy" />
          </td>
        </tr>)}
      </tbody>
    </table>
  )
}

export default Table
