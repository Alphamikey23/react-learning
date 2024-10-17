import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from './components/ColorList';

// export default function App() {
//   return (
//     <StarRating style={{ backgroundColor: "lightblue"}}
//     onDoubleClick={e => alert("double click")}
//     />
//   )
// }

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
    colors={colors}
    onRateColor = {(id,rating) => {
      const newColors = colors.map(color => color.id === id? { ...color,rating } : color  );
      setColors(newColors);
    }}
    onRemoveColor = {id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
    }}
    />
  );
}


