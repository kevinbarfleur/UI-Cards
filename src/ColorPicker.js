import React from "react"
import { TwitterPicker } from "react-color"

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  render() {
    const popover = {
      position: "absolute",
      zIndex: "2",
      top: "20px",
      left: "Opx"
    }
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    }
    return (
      <div className="pickerButton">
        <button onClick={this.handleClick}>Pick Color</button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <TwitterPicker />
          </div>
        ) : null}
      </div>
    )
  }
}

export default ColorPicker
