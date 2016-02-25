import React from 'react'
import ReactDOM from 'react-dom'

class LifeCycle extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'This is default Txt'
    }
    this.updateTxt = this.updateTxt.bind(this);
    this.updateVal = this.updateVal.bind(this);
  }

  updateTxt(e){
    this.setState({txt: e.target.value})
  }

  updateVal(){
    ReactDOM.render(
      <LifeCycle val={this.props.val+1} />,
      document.getElementById('a')
    )
  }

  componentWillMount(){
    console.log('will mount')
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps',nextProps)
    this.setState({txt: 'we may update val to ' + nextProps.val})
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);

    let isUpdate = nextProps.val % 2 == 0;
    console.log('isUpdate', isUpdate)

    return isUpdate;
  }

  render(){
    console.log('render')
    return (
      <div>
        <input type="text" onChange={this.updateTxt}/>
        <div> Change by style: {this.state.txt}</div>

        <div> <button onClick={this.updateVal}>update Val</button> Change by props: {this.props.val}</div>
      </div>
    )
  }

  componentDidMount(){console.log('mounted')}
  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
  }
  componentWillUnmount(){console.log('bye!')}

}

LifeCycle.defaultProps = {val: 0}
LifeCycle.propTypes = {val: React.PropTypes.number.isRequired}

export default LifeCycle