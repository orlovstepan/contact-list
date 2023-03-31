import { useState } from "react";
import { User } from "../type";
import { useSelector, useDispatch } from 'react-redux'
import { setChecked } from '../store/user';
import { RootState } from "../store";

function Table() {

  const dispatch = useDispatch();
  const { users, checked } = useSelector((state: RootState) => state.userState)

  const handleCheckEach = (id: number) => {
    const value = checked.filter((userId) => id !== userId);
    dispatch(setChecked(checked.includes(id) ? value : [...checked, id]))
  };

  const handleCheckAll = () => {
    dispatch(setChecked(
      users.length === checked.length ? [] : users.map((user) => user.id)
    ));
  };

  const [copied, setCopied] = useState('');

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
    } catch (e) {
      console.log("error in copy", e);
    }
  }

  return (
    <table className="table" >
      <thead>
        <tr className="table--upperRow">
          <td><input onChange={(e) => handleCheckAll(e)}
            name="check--all" type={'checkbox'} checked={checked.length === users.length ? true : false} /></td>
          <th className="label"> Name </th>
          <th className="label">Phone </th>
          <th className="label">Email </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => <tr id={index % 2 ? "even" : "odd"} key={user.id} className="container" >
          <td>
            <input name="check--individual"
              onChange={() => handleCheckEach(user.id)}
              checked={checked.includes(user.id) ? true : false}
              type={'checkbox'} />
          </td>
          <td className="info">{user.name} </td>
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