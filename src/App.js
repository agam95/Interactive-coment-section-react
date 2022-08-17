import './App.css';
import Mainperson from "./mainperson.js";
import person from "./data.json";

function App() {

  console.log(person)

  return (
    <div className="App">
      <Mainperson/>
    </div>
  );
}

export default App;
