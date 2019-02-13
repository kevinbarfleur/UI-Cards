import React from "react"

import ColorPicker from "./ColorPicker"

function Form() {
  return (
    <div className="form-container">
      <input type="text" placeholder="user" />
      <input type="text" placeholder="age" />
      <input type="text" placeholder="presentation" />
      <button>Generate</button>

      {/*<ColorPicker />*/}
    </div>
  )
}

export default Form
