

// const Star = ({selected = false}) => (
//     <FaStar color={ selected ? "red" : "grey"} />
// );

// export default function StarRating() {
//     return [
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="red" />,
//         <FaStar color="grey" />,
//         <FaStar color="grey" />
//     ];
// }


import { FaStar } from "react-icons/fa";


const createArray = length => [...Array(length)];

const Star = ( { selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={ onSelect } />
)

export default function StarRating({ totalStars = 5 , selectedStars = 0}) {
  
  return (
    <>
    {createArray(totalStars).map((n,i) => (
        <Star
        key={i}
        selected={selectedStars > i}
        />
    ))}
    <p>
        {selectedStars} of {totalStars} stars
    </p>
    
    </>
    // <div style={{ padding: "5px", ...style}} >
    // {createArray(totalStars).map((n, i) => (
    //   <Star 
    //   key={i}
    //   selected = {selectedStars > i}
    //   onSelect = {() => setSelectedStars(i+1)} />
      
    // ))}
    // <p>
    //   {selectedStars} of {totalStars} stars
    // </p>
    // </div>
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
    
  

    //Hooks contain reusable code logic that is separate from the component tree

}

