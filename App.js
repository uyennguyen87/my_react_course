import React from 'react';
import ReactDOM from 'react-dom'
import LifeCycle from './components/LifeCycle'
import ChildrentRender from './components/ChildrentRender'
import Refs from './components/Refs'
import MixinComponent from './components/MixinComponent'
import ComposableComponent from './components/ComposableComponent'
import DynamicallyGeneratedComponents from './components/DynamicallyGeneratedComponents'
import JSXLiveCompiler from './components/JSXLiveCompiler'

class App extends React.Component {
  constructor(){
    super();
    this.renderLifeCycle = this.renderLifeCycle.bind(this)
    this.renderChildrentRender = this.renderChildrentRender.bind(this)
    this.renderRefs = this.renderRefs.bind(this)
    this.renderMixinComponent = this.renderMixinComponent.bind(this)
    this.renderComposableComponent = this.renderComposableComponent.bind(this)
    this.renderDynamicallyGeneratedComponents = this.renderDynamicallyGeneratedComponents.bind(this)
    this.renderJSXLiveCompiler = this.renderJSXLiveCompiler.bind(this)

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

  renderRefs(){
    ReactDOM.render(
      <Refs />,
      document.getElementById('a')
    )
  }

  renderMixinComponent(){
    ReactDOM.render(
      <MixinComponent />,
      document.getElementById('a')
    )
  }

  renderComposableComponent(){
    ReactDOM.render(
      <ComposableComponent />,
      document.getElementById('a')
    )
  }

  renderDynamicallyGeneratedComponents(){
    ReactDOM.render(
      <DynamicallyGeneratedComponents />,
      document.getElementById('a')
    )
  }

  renderJSXLiveCompiler(){
    ReactDOM.render(
      <JSXLiveCompiler />,
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
          <li><button onClick={this.renderRefs}>Render "Refs"</button></li>
          <li><button onClick={this.renderMixinComponent}>Render "MixinComponent"</button></li>
          <li><button onClick={this.renderComposableComponent}>Render "ComposableComponent"</button></li>
          <li><button onClick={this.renderDynamicallyGeneratedComponents}>Render "DynamicallyGenereatedComponents"</button></li>
          <li><button onClick={this.renderJSXLiveCompiler}>Render "JSXLiveCompiler"</button></li>
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