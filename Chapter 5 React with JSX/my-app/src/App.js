import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';
import * as ReactDOM from 'react-dom';

// import Recipe from '../src/Recipes';


// // JSX Combines the JS from Javascript and X from XML
// // It's a javascript code that allows us to define react elements using tag-based syntax directly within our javascript code

// //JSX is another way of creating react elements

// //How to use JSX to create react application

// // It was released to create DOM trees with attributes

// // Syntax createElement(IngredientsList,{list:[...]}); is equal to <IngredientsList list={[...]}/>

// const list = ["1 lb salmon","1 cup Pine nuts","2 cups Butter Lettuce","1 Yellow Squash","1/2 cup Olive oil","3 Cloves of Garlic"]

// function IngredientsList() {
//   return createElement("ol",{className: "ingredients"},
//     list.map((list,i) => createElement("li", {key: i}, list))
//   );
// }

// const title = "Squad 70 are bunch of Intelluctuals,Hard Working & Smart Folks";

// function App() {
//   return (
//     <div className="App">
//       {/* <ul>
//         <li>1 lb Salmon</li>
//         <li>1 cup Pine Nuts</li>
//         <li>2 cups Butter Lettuce</li>
//         <li>1 Yellow Squash</li>
//         <li>1/2 cup Olive oil</li>
//         <li>3 Cloves of Garlic</li>
//       </ul> */}
//       {/* <h1 className="fancy">Baked Salmon</h1>
//       <h1>{title}</h1>
//       <IngredientsList /> */}
//       {/* Input Checkbox in react*/}
//       {/* <input type="checkbox" defaultChecked={false} />
//       <h1> {"Hello " + title}</h1>
//       <h1>{title.toLowerCase()}</h1> */}

//       {/* Mapping Arrays with JSX */}
//       {/* <ul>
//         {list.ingredients.map((ingredient,i) => (
//           <li key="{i}">{ingredient}</li>
//         ))}
//       </ul> */}

//       <Recipe />

      

//     </div>
//   );
// }


const data = [{
  name: "Baked Salmon",
  ingredients: [
      { name: "Salmon", amount: 1, measurement: "1 lb"},
      { name: "Pine Nuts", amount: 1, measurement: "cup"},
      { name: "Butter Lettuce", amount: 2, measurement: "cups"},
      { name: "Yellow Squash", amount: 1, measurement: "med"},
      { name: "Olive Oil", amount: 0.5, measurement: "cup"},
      { name: "Garlic", amount: 3,measurement: "cloves"}
  ],
  steps: [
          "Preheat the oven to 350 degress.",
          "Spred the olive oil around a glass baking disk.",
          "Add the yellow squash and place in the oven for 30 mins.",
          "Add the salmon, garlic, and pine nuts to the dish.",
          "Bake for 15 minutes.",
          "Remove from oven. Add the lettuce and serve."
          ]
},
           {
  name: "Fish Tacos",
  ingredients: [
      { name: "Whitefish", amount: 1, measurement: "1 lb"},
      { name: "Cheese", amount: 1, measurement: "cup"},
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups"},
      { name: "Tomatoes", amount: 2, measurement: "large"},
      { name: "Tortillas", amount: 3, measurement: "med"}
  ],
  steps: [
          "Cook the fish on the grill until cooked through.",
          "Place the fish on the 3 tortillas",
          "Top them with lettuce, tomatoes, and cheese.",
          ]

}
];



function Menu({title,recipes}) {
  return (
      <article>
          <header>
              <h1>{title}</h1>
          </header>
          <div className="recipes"> 
              {recipes.map((recipe,i) => (
                  <Recipe key={i} {...recipe} />
              ))}
              </div>
      </article>

             
  );
}



function Recipe({name, ingredients, steps}) {
  return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
          <h1> {name} </h1>
          <ul className="ingredients">
              {ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient.name}</li>
              ))}
          </ul>

      <section className="instructions">
          <h2> Cooking Instructions</h2>
          {steps.map((step, i) => (
              <p key={i}>{step}</p>
          ))}
      </section>
      </section>
  );
}





function App() {
  return (
      <Menu recipes={data} title="Delicious Recipes" />
  );
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);



export default App;
