import React, { Component } from 'react';


class LightAdder extends Component {
  constructor(props){
    super(props)
    this.state = {
      lightArray :[<Light />]
    }
  }

  addLight(){
    let {lightArray} = this.state
    boxArray.push(<Light/>)}
    this.setState({lightArray: lightArray})
  }

  removeLight(){
    let {lightArray} = this.state
    if (lightArray.length > 1){
    lightArray.pop()}
    this.setState({lightArray: lightArray})
  }

  render(){


    return (
      <div>
      <div className="counterApp">
      {this.state.boxArray}
      </div>
      <div className="btnToolbar Buttons" id="Buts">
      <Button color="primary" onClick={this.addBox.bind(this)}>+</Button>{' '}
      <Button color="danger"  onClick={this.removeBox.bind(this)}>-</Button>{' '}
      </div>
      </div>
      )
    }

}
export default BoxAdder
