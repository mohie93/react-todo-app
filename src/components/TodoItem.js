import React, { Component } from 'react'

class TodoItem extends Component {
    setItemStyle = () =>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted',
            textDecoration: this.props.item.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.item;
        return(
            <div style={this.setItemStyle()}>
                <input type="checkbox" name={this.props.item.id} id={this.props.item.id} onChange={this.props.markComplete.bind(this, id)} /> {' '}
                <strong className="" >{ title }</strong>
                <button className="" style={deleteButtonStyle} onClick={this.props.deleteTodo.bind(this, id)} > X </button>
            </div>
        )
    }
}

const deleteButtonStyle = {
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%',
    background:"red",
    color:'white'
}

export default TodoItem;