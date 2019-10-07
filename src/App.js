import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/partials/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/partials/About";
import axios from "axios";

class App extends Component {
  state = { todos:[] };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    axios.delete(`${TodosUrl}/${id}`)
    .then(() => {
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      });
    })
    .catch(err => console.log(err));
  };

  addTodo = title => {
    axios.post(TodosUrl,{title: title})
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios.get(`${TodosUrl}?_${Limit}`)
      .then(res => this.setState({todos: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos list={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

const TodosUrl = "https://jsonplaceholder.typicode.com/todos";
const Limit = "limit=10"

export default App;
