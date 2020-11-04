import React, { useReducer } from 'react'

function reducer(state, action) {
  // 변화된 내용을 리턴함
  return {
    ...state,   // 기존 state
    [action.name]: action.value // dispatch를 통해 선택된 타겟에 의해 변화된 값
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    myname: '',
    nickname: ''
  });

  const { myname, nickname } = state;
  
  const onChange = e => {
    // dispatch에서 해당 target name의 value가 변경된다.
    dispatch(e.target);   // 입력을 한 traget (어떤 input name인가?)
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  }

  return (
    <div>
      <div>
        <input name="myname" value={myname} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />   
      </div>
      <div>
        <b>이름:</b> {myname}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Info;

