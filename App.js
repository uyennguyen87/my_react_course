import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateTxt: ' this is the state txt',
      red: 0,
      green: 0,
      blue:0
    }
    this.updateTxt = this.updateTxt.bind(this)
    this.updateSlider = this.updateSlider.bind(this)
  }

  updateSlider(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  updateTxt(e) {
    this.setState({
      stateTxt: e.target.value
    })
  }

  componentWillMount() {
    console.log("mounting");
  }

  render() {
    console.log('rendering!');
    let txt = this.props.txt
    return (
      <div>
        <Button> I <Heart/> React</Button>
        <Slider ref="red" updateSlider={this.updateSlider}/>
        {this.state.red}
        <br />
        <Slider ref="green" updateSlider={this.updateSlider}/>
        {this.state.green}
        <br />
        <Slider ref="blue" updateSlider={this.updateSlider}/>
        {this.state.blue}
        <br />
        <hr />
        <Widget stateTxt={this.state.stateTxt} updateTxt={this.updateTxt} />
        <div>{txt}</div>
      </div>
    )
  }

  componentDidMount(){
    console.log("mounted")
  }

  componentWillUnmount() {
    console.log('bye');
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}



class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range"
          min="0"
          max="255"
          onChange={this.props.updateSlider} />
      </div>
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.updateTxt} />
      <h1>{props.stateTxt}</h1>
    </div>
  )
}

// const App = () => <h1>Hello Uyen</h1>

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

class Wrapper extends React.Component {
  constructor(){
    super();
  }

  mount() {
    ReactDOM.render(
      <App cat={5} />,
       document.getElementById('a')
    );
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}


// ReactDOM.render(
//   <App cat={5} />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Wrapper/>,
  document.getElementById("app")
);