import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateTxt: ' this is the state txt',
      val: 0,
      red: 0,
      green: 0,
      blue:0,
      increasing: false
    }
    this.update = this.update.bind(this)
    this.updateVal2 = this.updateVal2.bind(this)
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

  updateVal2() {
    ReactDOM.render(
      <App cat={2} val2={this.props.val2+1} />,
      document.getElementById("a")
    );
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  componentWillMount() {
    console.log("mounting");
    this.setState({m:2})
  }

  render() {
    console.log('rendering!');
    let txt = this.props.txt
    return (
      <div>
        <button onClick={this.updateVal2}>{this.props.val2}</button>
        <Button> I <Heart/> React</Button> {this.state.val*this.state.m}
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
    this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount() {
    console.log('bye');
    clearInterval(this.inc)
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps')
    this.setState({increasing: nextProps.val2 > this.props.val2})
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    // return true;
    return nextProps.val2 % 5 == 0;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate')
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)}
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt',
  val2: 0
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


let Mixin = InnerComponent => class extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {val:0}
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log("will mount")
  }
  render(){
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }
  componentDidMount(){
    console.log("mounted")
  }
}

const Button2 = (props) => <button
                             onClick={props.update}>
                             {props.txt} - {props.val}
                           </button>

const Label = (props) => <label
                             onMouseMove={props.update}>
                             {props.txt} - {props.val}
                           </label>

let ButtonMixed = Mixin(Button2)
let LabelMixed = Mixin(Label)

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
        <div>
          <ButtonMixed txt="Button"/>
          <LabelMixed txt="Label" />
        </div>
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