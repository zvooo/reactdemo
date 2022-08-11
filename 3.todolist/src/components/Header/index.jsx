import React, { Component } from 'react'
import propTypes from 'prop-types';
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
  static propTypes={
    addTodo:propTypes.func.isRequired
    
  }


  handleKeyUp = (event) => {
    //解构赋值
    const { target, key } = event
    //判断是否赋值
    if (key !== "Enter" || target.value.trim() === '') return
    const { addTodo } = this.props
    const todoobje = { id: nanoid(), name: target.value, done: false }
    //回调传递给app
    addTodo(todoobje)
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
