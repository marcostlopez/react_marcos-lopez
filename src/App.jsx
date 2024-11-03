import { useState } from 'react';
import './App.css';
import Navbar from './NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>CODER-APP-MARCOS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App