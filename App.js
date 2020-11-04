import React, { Component } from 'react';
import './App.css';

// 5강
// import ValidationSample from './chapter05/ValidationSample';
// import ScrollBox from './chapter05/ScrollBox';

// 7강
// import LifeCycleSample from './chapter07/LifeCycleSample';
// import ErrorBoundary from './chapter07/ErrorBoundary';

// -> 7강 내맘대로 추가
// const fruits = [
//   {id: 0, fruitName: 'Choic fruit'},
//   {id: 1, fruitName: 'apple'},
//   {id: 2, fruitName: 'banana'},
//   {id: 3, fruitName: 'pineapple'}
// ];

// function getRandomFruit() {
//   const a = Math.floor(Math.random() * 3 + 1);
//   let filteredFruit = fruits.filter(fruit => fruit.id === a);
//   return filteredFruit[0].fruitName;
// }

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// <-

// 8강
// import CounterReducer from './chapter08/CounterReducer';
// import Info from './chapter08/Info';
// import Average from './chapter08/Average';

import SassComponent from './chapter09/SassComponent';



class App extends Component {
  // -> 7강
  // state = {
  //   color: '#000000',
  //   fruit: fruits[0].fruitName
  // }

  // handleClick = () => {
  //   const abc = getRandomColor();

  //   this.setState({
  //     color: abc,
  //     fruit: getRandomFruit()
  //   });
  //   console.log('<<버튼 클릭>>바뀐색상' + abc);
  // }
  // <-

  render() {

    return (
      <div className="App">
        {/* 5강 */}
        {/* <ValidationSample />
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}

        {/* 7강 */}
        {/* <button onClick = {this.handleClick}>랜덤 색상</button>
        <h1>{this.state.fruit}</h1>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary> */}

        {/* 8강 */}       
        {/* <CounterReducer />
        <Info />
        <Average /> */}

        <SassComponent />
      </div>
    );
  }
}

export default App;

