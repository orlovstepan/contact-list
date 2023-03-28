import "./App.css";
import { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar";
import Table from "./Components/Table";
import { useSelector, useDispatch } from 'react-redux'
import { User, TypeSearch } from "./type";
import { RootState } from "./store";
import { addUser, addUsers, deleteUser} from './store/user'

export default function App() {
  const dispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.userState)

  const filterUsers = (searchValue: string, users: User[]) => {
    return users.filter((user) =>
      user[type].toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(addUsers(data)));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onChange = (value: string) => {
    setValue(value);
  };

  const onAdd = (user: User) => {
    dispatch(addUser(user))
  };

  // const onDelete = (checked: number[]) => {
  //   setUsers(users.filter((user) => !checked.includes(user.id)));
  //   setChecked([]);
  // };
  

  

  return (
    <main className="App">
      <Searchbar
        resetSearchValue={setValue}
        setUser={onAdd}
        value={value}
        checked={checked}
        handleChange={onChange}
        handleChangeType={setSearchType}
      />
      <Table
        checked={checked}
        setChecked={setChecked}
        users={filterUsers(value, users)}
      />
    </main>
  );
}
