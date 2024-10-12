import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';
import { FaStar } from "react-icons/fa";
import React, { useState } from "react";

export default function App() {
  return (
    <StarRating style={{ backgroundColor: "lightblue"}}
    onDoubleClick={e => alert("double click")}
    />
  )
}