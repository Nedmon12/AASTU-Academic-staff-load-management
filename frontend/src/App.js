import { useSelector } from 'react-redux';
import './App.css';
import DashboardTable from './components/GenerateTable';
import Login from './pages/login';

function App() {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const tableInputs = { 
    tableheaders: ["Name", "Weight", "Age", "Height"],
    rows: ["Natan" , 80, 22, 1.79]
  }
  return (
    <div className="App">
      { !isLoggedIn && <Login />}
      { isLoggedIn && < DashboardTable tableInputs={tableInputs}/>}
    </div>
  );
}

export default App;
