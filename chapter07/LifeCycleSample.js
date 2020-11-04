import React, { Component } from 'react'

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  }

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color) {
      return { color: nextProps.color}
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextProps);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않음
    return nextState.number % 10 !== 4;
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color) {
      // ref를 통해 h1 tag의 글자색을 얻어냄
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
    if(snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      // 부모 component로부터 color를 받음
      color: this.props.color
    };

    return (
      <div>
        {this.props.missing.value}

        {/* 부모 component로부터 color를 받아 CSS style 적용, ref를 통해 적용된 color 정보를 얻어냄 */}
        <h1 style={style} ref={ref => this.myRef=ref}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
          더하기
        </button>    
      </div>
    );
  }
}

export default LifeCycleSample;

//        {/* 에러코드 임의로 발생*/}