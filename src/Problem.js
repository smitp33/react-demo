import React, { Component } from 'react';
import axios from 'axios'

class Parent extends Component {
  state = {counter: 0}

  onClick = () => {
    console.log("Button clicked")
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  onClickAsync = () => {
    console.log("Async Button clicked")
    return (
		axios.get(`https://api.github.com/users/smitp33`)
		  .then(resp => {
			  this.setState(prevState => ({
				counter: prevState.counter + 1
			  }))
			}
	  )
	)
  }

  render() {
    return (
      <div>
        <Child onClick={this.onClick} action="Click"/>
      </div>
    );
  }
}

class Child extends Component {

  render() {
    return (
      <button onClick={this.props.onClick} >{this.props.action}</button>
    )
  }
}

export default Parent


