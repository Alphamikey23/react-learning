import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';


// A userinterface is made of parts. Buttons, Lists, Headings. All of these parts, when put together, make up a user interface.

//Consider a recipe application with three different recipes, The data is different in each box, but the parts needed to create a recipe are the same

// In react we describe each of these parts as components. Components allow us to reuse the same structure, and then we can populate those structures with different sets of data

// function IngredientList() {
//   return createElement("ul",{className: "ingredients"},
//     createElement("li",null,"1 cup unsalted butter"),
//     createElement("li",null,"1 cup crunchy peanut butter"),
//     createElement("li",null,"1 cup brown sugar"),
//     createElement("li",null,"1 cup white sugar"),
//     createElement("li",null,"2 eggs"),
//     createElement("li",null,"2.5 cups all purpose flour"),
//     createElement("li",null,"1 teaspoon baking powder"),
//     createElement("li",null,"0.5 teaspoon salt")
//   );

// }

// const mylist = IngredientList();

const secretIngredients = ["1 cup unsalted butter",
  "1 cup crunchy peanut butter",
  "1 cup brown sugar",
  "1 cup white sugar",
  "2 eggs",
  "2.5 cups all purpose flour",
  "1 teaspoon baking powder",
  "0.5 teaspoon salt",
  "Hey you can add anything here"
];

function IngredientsList() {
  return createElement("ul",{className: "ingredients"},
    secretIngredients.map((ingredient,i) => createElement("li", {key: i}, ingredient))
  );
}

const mylist2 = IngredientsList();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* {mylist} */}

        {mylist2}


        
      </header>
    </div>
  );
}

export default App;
