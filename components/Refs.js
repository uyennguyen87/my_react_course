import React from 'react'
import ReactDOM from 'react-dom'

class Refs extends React.Component {

  render(){
    return(
      <div>
        <ColorSlider name="red" />
        <ColorSlider name="green" />
        <ColorSlider name="blue" />
      </div>
    )
  }
}

class ColorSlider extends React.Component {
  constructor(){
    super()
    this.state = {val:0}
    this.update = this.update.bind(this)
  }

  update(){
    this.setState({val:ReactDOM.findDOMNode(this.refs[this.props.name]).value})
  }

  render(){
    return (
      <div>
        <input
          onChange={this.update}
          ref={this.props.name}
          type="range" min={0} max={255}/>
         {this.props.name}:{this.state.val}
      </div>
    )
  }

  componentDidMount(){
    this.update()
  }
}

export default Refs

