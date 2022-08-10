import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {
  //1.初始化状态
  state = {
    todos: [
      { id: "1", name: "吃饭", done: true },
      { id: "2", name: "睡觉", done: true },
      { id: "3", name: "学习", done: false },
      { id: "4", name: "学习1", done: false },
    ]
  }
  //接受一个todo对象
  addTodo = (todoobj) => {
    //获取原来的state
    const { todos } = this.state
    //产生新的 
    const newTodos = [todoobj, ...todos]
    //更新state
    this.setState({ todos: newTodos })

  }
  updateTodo = (id,done) =>{
     //获取原来的state
     const { todos } = this.state
     const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id) return {...todoObj,done}
      else return todoObj
     })
     this.setState({todos:newTodos})

  }
  deleteTodo = (id)=>{
    const { todos } = this.state
    const newTodos=todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todos:newTodos})
  }

  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
