import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

    todoClear = ()=>{
        this.props.clearAllDone()
    }
    HandleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
        
    }
    render() {
        const { todos } = this.props
        const total = todos.length

        const doneCount=todos.reduce((pre,current)=>{return pre+(current.done ? 1:0)},0)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.HandleCheckAll} checked={total===doneCount && total} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / {total}
                </span>
                <button onClick={this.todoClear} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
