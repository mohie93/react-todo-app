import React, { Component } from 'react'
import TodoItem from './TodoItem'
class Todos extends Component {
    render() {
        return this.props.list.map((todo) => (
            <TodoItem key={todo.id} item={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
        ))
    }
}

export default Todos;