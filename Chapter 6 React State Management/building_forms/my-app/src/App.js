import logo from './logo.svg';
import './App.css';
import AddColorForm from './Components/AddColorForm';
import React, { useState } from "react";
import colorData from './data/color-data.json'
import ColorList from './Components/ColorList';
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
    <AddColorForm onNewColor={(title, color) => {
      const newColors = [...colors, {
        id: v4(),
        rating: 0,
        title,
        color
      }];

      setColors(newColors);
    }} />
    
    <ColorList />
    </>


    
  );
}

export default App;
