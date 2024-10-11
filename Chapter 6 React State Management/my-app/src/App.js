import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

const createArray = length => [...Array(length)];

const Star = ( { selected = false}) => (
  <FaStar color={selected ? "red" : "grey"} />
)

function App({ totalStars = 5}) {
  const [selectedStars] = useState(2);
  return (
    <>
    {createArray(totalStars).map((n, i) => (
      <Star key={i} selected={selectedStars > i} />
    ))}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
    </>
  );
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <StarRating />
    // </div>
    
  
}

export default App;
