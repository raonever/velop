import React, { Component } from 'react'

class ScrollBox extends Component {

  scrollToBottom = () => {
    console.log(this.box.attributes);
    console.log(this.box.scrollHeight);
    console.log(this.box.clientHeight);
    console.log(this.box.scrollLeft);
    console.log(this.box.scrollWidth);
    console.log(this.box.scrollTop);
    console.log(this.box);

    this.box.style.setProperty('width', '100px');
    this.box.style.setProperty('background-color', 'red');

    this.box2.style.setProperty('width','50px');
    this.box2.style.setProperty('background','');
    this.box2.style.setProperty('background-color', 'blue');
     
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle ={
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      <div
        style={style}
        ref={(ref) => {this.box=ref}}>
        <div style={innerStyle} ref={(ref) => {this.box2=ref}} />
      </div>
    )
  }
}

export default ScrollBox;

// import React, { Component } from 'react';
// class ScrollBox extends Component {
//   scrollToBottom = () => {
//     const { scrollHeight, clientHeight } = this.box;
//     /* 앞 코드에는 비구조화 할당 문법을 사용했습니다.
//     다음 코드와 같은 의미입니다.
//     const scrollHeight = this.box.scrollHeight;
//     const clientHeight = this.box.cliengHeight;
//     */
//     this.box.scrollTop = scrollHeight - clientHeight;
//   };

//   render() {
//     const style = {
//       border: '1px solid black',
//       height: '300px',
//       width: '300px',
//       overflow: 'auto',
//       position: 'relative'
//     };
//     const innerStyle = {
//       width: '100%',
//       height: '650px',
//       background: 'linear-gradient(white, black)'
//     };
//     return (
//       <div
//         style={style}
//         ref={ref => {
//           this.box = ref;
//         }}
//       >
//         <div style={innerStyle} />
//       </div>
//     );
//   }
// }
// export default ScrollBox;

