import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import colorData from "./data/color-data.json";
import ColorList from './components/ColoList';

// export default function App() {
//   return (
//     <StarRating style={{ backgroundColor: "lightblue"}}
//     onDoubleClick={e => alert("double click")}
//     />
//   )
// }

export default function App() {
  const [colors] = useState(colorData);
  return (
    <ColorList
    colors={colors}
    onRemoveColor = {id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
    }}
    />
  );
}


