import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateTxt: ' this is the state txt'
    }
  }

  update(e) {
    this.setState({stateTxt: e.target.value})
  }

  render() {
    let txt = this.props.txt
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)} />
        <h1>{this.state.stateTxt}</h1>
        <div>{txt}</div>
      </div>
    )
  }
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