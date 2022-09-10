import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const name = '리액트';
  const li = 'qkqhd';
  return (
    <div>
      {
        name==='리액트'&&li==='qkqh' ? (
          <h1>리액트입니다.</h1>
        ) :( <h2>리액트가 아닙니다.</h2> )
      }
    </div>
  );
}

export default App;
