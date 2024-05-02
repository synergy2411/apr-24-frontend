import { Component } from "react";

class ClassBasedComp extends Component {
  state = {
    counter: 0,
    todos: [],
  };

  constructor() {
    super();
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => this.setState({ todos }))
      .catch(console.error);
  }

  shouldComponentUpdate() {
    console.log("Should Component Update");
    return true;
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    console.log("Render");
    return (
      <div className="container">
        <h1>Class Based Component Loaded</h1>
        <hr />
        <button className="btn btn-primary" onClick={this.increaseCounter}>
          {" "}
          {this.state.counter}
        </button>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassBasedComp;
