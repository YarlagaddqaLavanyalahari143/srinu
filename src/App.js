import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './components/classBasedComponent'
import Hooks from'./components/hooksinc'

function App() {
  return (
    <div className="App">
      <h1>hello nec </h1>
      <Home/>
      <ClassBasedComponent name="lahari">nec  </ClassBasedComponent>
      <h1>Hooks Concept</h1>
      <Hooks/>
    </div>
  );
}

let Home=()=>{
  return(
    <h1>
    This is my first component</h1>
  );
}

export default App;
