import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  //鼠标移入状态
  state={mouse:false}
  HandleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
      // console.log(flag)
    }
  }
  HandleCheck = (id) =>{
    return (event)=>{
      const {target}=event
      this.props.updateTodo(id,target.checked)
      // console.log(target.checked,id)
    }
  }
  HandleDelete = (id)=>{
    // console.log(this.props)
      this.props.deleteTodo(id)
  }
  
  render() {
    //接受一个对象获取
    // const { id, name, done } = this.props.todo
    let todo = this.props.todo
    const {mouse}=this.state
    //接受以单个参数获取, 
    // const { id,name,done } = this.props
    return (
      <li key={todo.id} style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.HandleMouse(true)} onMouseLeave={this.HandleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={todo.done}  onChange={this.HandleCheck(todo.id)}/>
          <span>{todo.name}</span>
        </label>
        <button onClick={(id)=>{this.HandleDelete(id)}} className="btn btn-danger" style={{ display: mouse?'block':'none' }}>删除</button>
      </li>
    )
  }
}
