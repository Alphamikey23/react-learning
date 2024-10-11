function cat({name}) {
    return <h1>The cat's name is {name}</h1> ;
}

ReactDOM.render(<Cat name="Jungle" />, document.getElementById("root"));