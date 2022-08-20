import './App.css';
import DashboardTable from './components/GenerateTable';

function App() {
  const tableInputs = { 
    tableheaders: ["Name", "Weight", "Age", "Height"],
    rows: ["Natan" , 80, 22, 1.79]
  }
  return (
    <div className="App">
      <DashboardTable tableInputs={tableInputs}/>
    </div>
  );
}

export default App;
