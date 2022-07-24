import { useState } from 'react';
import './App.css';
import Index from './components/Index';
import Home from './components/Home'

function App() {
  const [state, setState] = useState(true)

  function btnStart(){
    setState(!state)
  }
  

  return (
    <div className="App">
      {state ? <Index btnStart={btnStart}/> : <Home btnStart={btnStart}></Home>}
    </div>
  );
}

export default App;
