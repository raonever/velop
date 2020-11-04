import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange =(e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.focus();
  }

  handleKeyPress =(e) => {
    if((e.which === 65 && e.shiftKey) || e.key === 'Enter') {   // shift + A or Enter
      this.input2.focus();
      console.log("keypress 1");
    }
  }

  handleKeyPress2 =(e) => {
    if(e.key === 'Enter') {
      this.input.focus();
      console.log("keypress 2");
    }
  }

  render() {
    return (
      <div>
        <input
          ref={(ref) => this.input=ref}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <input
          ref={(ref) => this.input2=ref}
          type="text"
          onKeyPress={this.handleKeyPress2}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;