import React, { Component } from "react"
import ReactDOM from "react-dom"

import Form from "./Form"
import Card from "./Card"

import "./styles.scss"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title-container">
          <h1>CARDS</h1>
          <h2>Users cards generator !</h2>
        </div>

        <Form />

        <Card />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
