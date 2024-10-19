import logo from './logo.svg';
import './App.css';
import AddColorForm from './Components/AddColorForm';
import React, { useState } from "react";

import ColorList from './Components/ColorList';


function App() {
  
  return (
    <>
    <AddColorForm />
    <ColorList />
    </>


    
  );
}

export default App;
