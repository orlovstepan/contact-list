
import './App.css';
import { useEffect } from 'react';
import Searchbar from './Components/Searchbar';
import Table from './Components/Table';
import { useDispatch } from 'react-redux';
import { addUsers} from './store/user';

export default function App() {
  const dispatch = useDispatch();

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
