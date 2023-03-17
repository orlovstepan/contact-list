import { useState } from "react";
import { User } from "../type";
import Add from "./Add";

type Props = {
  checked: number[],
  setChecked: (usersIds: number[]) => void,
  users: User[],
  setUser: (user: User) => void,
  resetSearchValue: (value: string) => void,
};

function Table({
  setUser,
  checked,
  setChecked,
  resetSearchValue,
  users,
}: Props) {

  const handleCheckEach = (id: number) => {
    const value = checked.filter((userId) => id !== userId);
    setChecked((prev: number[]) => 
      prev.includes(id) ? value : [...prev, id]
    );
  };

  const handleCheckAll = (e: any) => {
    setChecked(
      users.length === checked.length ? [] : users.map((user) => user.id)
    );
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
        <td><input onChange={(e)=>handleCheckAll(e)}
         name="check--all" type={'checkbox'} checked={checked.length === users.length ? true : false}/></td>
        <th className="label"> Name </th>
        <th className="label">Phone </th>
        <th className="label">Email </th>
      </tr>
      </thead>
      <tbody>
      {users.map((user, index) => <tr id={index % 2 ? "even" : "odd"} key={user.id} className="container" >
          <td>
            <input name="check--individual" 
            onChange={(e)=> handleCheckEach(user.id)}
            checked={checked.includes(user.id) ? true: false} 
            type={'checkbox'}/>
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