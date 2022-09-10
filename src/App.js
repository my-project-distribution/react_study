import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '44px',
  };
  const name = '리액트';
  return <div style={style}>{name}</div>;
}

export default App;
