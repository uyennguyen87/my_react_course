import React from 'react'
import ReactDOM from 'react-dom'

export default class ChildrentRender extends React.Component {
  render(){
    return(
      <div>
        <Button> I <Heart /> React </Button>
      </div>
    )
  }
}

const Heart = () => <span> LOVE </span>

const Button = (props) => <button>{props.children}</button>
