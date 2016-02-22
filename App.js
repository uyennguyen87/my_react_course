import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateTxt: ' this is the state txt'
    }
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({stateTxt: e.target.value})
  }

  render() {
    let txt = this.props.txt
    return (
      <div>
        <Widget stateTxt={this.state.stateTxt} update={this.update} />
        <Widget stateTxt={this.state.stateTxt} update={this.update} />
        <Widget stateTxt={this.state.stateTxt} update={this.update} />
        <div>{txt}</div>
      </div>
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>{props.stateTxt}</h1>
    </div>
  )
}

// const App = () => <h1>Hello Uyen</h1>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);