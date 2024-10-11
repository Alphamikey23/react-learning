import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';




// function Cat({name}) {
//   return (
//     <React.Fragment>
//       <h1>The cat's name is {name}</h1>
//       <p>He's good</p>

//     </React.Fragment>
//   )
// }


function Cat({name}) {
  return (
    <>
    <h1>The cat's name is {name}</h1>
    <p>He's good</p>
    
    </>
  )
}




function App() {

 

  return (
    <div className="App">
      <Cat name="Billy" />
      

    </div>
  );
}



export default App;
