import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title:''
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = e => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
            placeholder="Add Todo...."
          />
          <input
            type="submit"
            style={{ flex: "1", color: 'white', background:'#333' }}
            value="submit"
          ></input>
        </form>
      </div>
    );
  }
}
