import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const name = '리액트';
  const li = 'qkqhd';
  return (
    <div>
      {
        name==='리액트' && <h1>리액트</h1>
      }
    </div>
  );
}

export default App;
