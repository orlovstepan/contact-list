import "./App.css";
import { useState, useEffect } from "react";
import Searchbar from "./Components/Searchbar";
import Table from "./Components/Table";
import { useSelector, useDispatch } from 'react-redux'
import { User, TypeSearch } from "./type";
import { RootState } from "./store";
import { addUser} from './store/user'

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [value, setValue] = useState("");
  const [type, setSearchType] = useState<TypeSearch>("name");
  const [checked, setChecked] = useState<number[]>([]);
  const dispatch = useDispatch();


  const filterUsers = (searchValue: string, users: User[]) => {
    return users.filter((user) =>
      user[type].toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onChange = (value: string) => {
    setValue(value);
  };

  const onAdd = (user: User) => {
    dispatch(addUser(user))
    setUsers([...users, user]);
  };

  const onDelete = (checked: number[]) => {
    setUsers(users.filter((user) => !checked.includes(user.id)));
    setChecked([]);
  };

  const store = useSelector((state: RootState) => state)

  console.log('store', store)

  return (
    <main className="App">
      <Searchbar
        resetSearchValue={setValue}
        setUser={onAdd}
        value={value}
        checked={checked}
        handleChange={onChange}
        handleChangeType={setSearchType}
        deleteUser={onDelete}
      />
      <Table
        checked={checked}
        setChecked={setChecked}
        resetSearchValue={setValue}
        setUser={onAdd}
        users={filterUsers(value, users)}
      />
    </main>
  );
}
