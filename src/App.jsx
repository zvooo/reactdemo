import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudent = () => {
    axios.get('http://localhost:5000/students').then(
      (res) => { console.log("ok", res) },
      (err) => { console.log("err", err) }
    )
  }
  render() {
    return (
      <div>
        app
        <button onClick={this.getStudent}>请求</button>
      </div>
    )
  }
}
