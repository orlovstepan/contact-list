import './App.css'
import { useState, useEffect } from 'react'
import Searchbar from './Components/Searchbar';
import Table from './Components/Table';
import { User, TypeSearch } from './type';

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [value, setValue] = useState('');
  const [type, setSearchType] = useState<TypeSearch>('name');

  const filterUsers = (searchValue: string, users: User[]) => {
    return users.filter(user => user[type].toLowerCase().includes(searchValue.toLowerCase()));
  }

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  const onChange = (value: string) => {
    setValue(value)
  }

  const onAdd = (user: User) => {
    setUsers([...users, user]);
  }

  const onDelete = (id: number) => {
    setUsers(users.filter(user => id !== user.id))
  }

  return (
    <main className='App'>
        <Searchbar resetSearchValue={setValue} setUser={onAdd} value={value} handleChange={onChange} handleChangeType={setSearchType} />
        <Table deleteUser={onDelete} resetSearchValue={setValue} setUser={onAdd} users={filterUsers(value, users)} />
    </main>
  )
}