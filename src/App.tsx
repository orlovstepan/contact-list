import './App.css';
import { useEffect } from 'react';
import Searchbar from './Components/Searchbar';
import Table from './Components/Table';
import { useSelector, useDispatch } from 'react-redux';
import { User } from './type';
import { RootState } from './store';
import { addUsers, addUser } from './store/user';
import { setSearchValue } from './store/filter';

export default function App() {
  const dispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.userState);
  const { searchValue, searchType } = useSelector((state: RootState) => state.filterState);

  const filterUsers = (searchValue: string, users: User[], searchType: string) => {
    return users.filter((user) => {
      const value = user[searchType];
      if (typeof value === 'string') { 
        return value.toLowerCase().includes(searchValue.toLowerCase());
      }
      return false; 
    });
  };
  

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch(addUsers(data)));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="App">
      <Searchbar/>
      <Table />
    </main>
  );
}
