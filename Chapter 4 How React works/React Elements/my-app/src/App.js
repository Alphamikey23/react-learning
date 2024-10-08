import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';


function App() {
  // Syntax createElement(type, props, ...children)
  const myelement = createElement('h1', {id: "recipe-0"}, "Baked Salmon");

  //ReactDOM
  const dish = createElement("h1",null,"Katla Fish");

  const dessert = createElement("h2",null,"Coconut Cream Pie");

  //Children 
  // {
  //   $$typeof: Symbol(React.element),
  //   "type": "h1",
  //   "key": null,
  //   "ref": null,
  //   "props": {id: "recipe-0",children: "Baked Salmon"},
  //   "_owner": null,
  //   "_store": {}
  // }

  //Element Tree: The tree has one root element from which many branches grow
  
  // Let's consider the unordered list that contains ingredients

  // <ul>
  //   <li>1 lb Salmon</li>
  //   <li>5 sprigs fresh rosemary</li>
  //   <li>2 tablespoons olive oil</li>
  //   <li>2 small lemons</li>
  //   <li>1 teaspoon kosher salt</li>
  //   <li>4 cloves of chopped garlic</li>

  // </ul>
  

  // const list = createElement("ul",null,createElement("li",null,"1 lb Salmon"),
  // createElement("li",null,"5 sprigs fresh rosemary"),
  // createElement("li",null,"2 tablespoons olive oil"),
  // createElement("li",null,"2 small lemons"),
  // createElement("li",null,"1 teaspoon kosher salt"),
  // createElement("li",null,"4 cloves of chopped garlic"));

  // console.log(list);


  // To create this using React, we'll use a series of createElement calls:

  // const mylist = createElement("section",{id: "baked-salmon"},
  //   createElement("h1",null,"Baked Salmon"),
  //   createElement("ul",{className: "ingredients"},
  //     createElement("li",null,"2 lb salmon"),
  //     createElement("li",null,"5 sprigs fresh rosemary"),
  //     createElement("li",null,"2 tablespoons olive oil"),
  //     createElement("li",null,"2 small lemons"),
  //     createElement("li",null,"1 teaspoon kosher salt"),
  //     createElement("li",null,"4 cloves of chopped garlic")
  //   ),
  //   createElement("section",{className: "instructions"},
  //     createElement("h2",null,"Cooking Instructions"),
  //     createElement("p",null,"Preheat the oven to 375 degrees"),
  //     createElement("p",null,"Lightly coat aluminum foil with oil"),
  //     createElement("p",null,"Place salmon on foil"),
  //     createElement("p",null,"cover with rosemary, sliced lemons, chopped garlic.")
  //   ),
  //   createElement("p",null,"Bake for 15-20 minutes until cooked through."),
  //   createElement("p",null,"Remove from oven.")
  // );

  // Constructing elements with data : The major advantage of using react is its ability to separate data from UI elements.
  // Since React is just javascript, we can add JavaScript logic to help us build the react tree component tree

  //For example ingredients can be stored in an array, and we can map that array to the react elements

  const items = ["2 lb salmon",
    "5 sprigs fresh resemary",
    "2 tablespoons olive oil",
    "2 small lemons",
    "1 teaspoon kosher salt",
    "4 cloves of chopped garlic"
  ];

  //we can map over the array and create list items for as many ingredients as there are:

  // const list_with_key = createElement("ul",{className: "ingredients"},
  //   items.map((ingredient,i) => createElement("li",{key: i },ingredient))
  // );


  return (
    <div className="App">
      <header className="App-header">
        
        {/* {myelement}
        {dish}
        {dessert} 
        {list} */}
        {/* {mylist} */}
        {/* {list_with_key} */}
        
        
      </header>
    </div>
  );
}

export default App;
