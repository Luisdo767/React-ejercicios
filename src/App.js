import './App.css';
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0)
  const maxLimit = () => {
    if (counter<10){
      setCounter (counter +1)
    }
  }
  const minLimit = () => {
    if (counter>0){
      setCounter (counter -1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {counter}
        <button onClick={maxLimit}>Aumentar</button>
        <button onClick={minLimit}>Disminuir</button>
      </header>
    </div>
  );
}

export default App;
