import React from 'react';
import ReactDOM from 'react-dom'
import LifeCycle from './components/LifeCycle'
import ChildrentRender from './components/ChildrentRender'

class App extends React.Component {
  constructor(){
    super();
    this.renderLifeCycle = this.renderLifeCycle.bind(this)
    this.renderChildrentRender = this.renderChildrentRender.bind(this)
    this.destroyDOMNode = this.destroyDOMNode.bind(this)
  }

  renderLifeCycle(){
    ReactDOM.render(
      <LifeCycle val={0} />,
      document.getElementById('a')
    );
  }

  renderChildrentRender(){
    ReactDOM.render(
      <ChildrentRender />,
      document.getElementById('a')
    )
  }

  destroyDOMNode(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){

    return (
      <div>
        Hello Uyen!
        <ul>
          <li><button onClick={this.renderLifeCycle}>Render "LifeCycle"</button><i>   enable Debug Mode to see result</i></li>
          <li><button onClick={this.renderChildrentRender}>Render "ChildrentRender"</button></li>
          <br />
          <li><button onClick={this.destroyDOMNode}>Destroy DOM Node</button></li>
        </ul>
        <hr />
        <div id="a" />
      </div>
    )
  }

}

export default App