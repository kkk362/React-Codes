import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import React,{useState} from 'react';
import NameList from './NameList';


function App() {
const[count,setCount]=useState(100);


  return (
    <div className="App">
      <h1>Hooks is  use if fun component {count}</h1>
      <button onClick={()=>{setCount(count-1)}}>Increment </button>
    <Profile></Profile>
    </div>
  );
}

export default App;
