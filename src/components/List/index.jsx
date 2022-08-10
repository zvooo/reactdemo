import React, { Component } from 'react'
import propTypes from 'prop-types';
import Item from '../Item'
import './index.css'
export default class List extends Component {

  static propTypes = {
    todos: propTypes.array.isRequired,
    updateTodo:propTypes.func.isRequired,
    deleteTodo:propTypes.func.isRequired

  }

  render() {
    const { todos, updateTodo,deleteTodo } = this.props
    // console.log(this.props)
    return (
      <ul className="todo-main">

        {
          todos.map((todo) => {
            //以todo对象传递过去
            return <Item key={todo.id} todo={todo} updateTodo={updateTodo}  deleteTodo={deleteTodo}/>
            //单个参数传递 name={todo.name} id={todo.id} 简写
            // return  <Item key={todo.id} {...todo}/>
          })
        }
      </ul>
    )
  }
}
