import React, { useState, useMemo, useCallback, useRef } from 'react'

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const [errortext, setErrortext] = useState('');
  const inputEl = useRef();

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  },[]);

  const onInsert = useCallback(e => {
    setErrortext('');
    if (number === '') {
      setErrortext('숫자를 입력하세요!');
    } else if (isNaN(number)) {
      setErrortext('숫자가 아닙니다!');
    } else {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
    }
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <h3>{errortext}</h3>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* <b>평균값:</b> {getAverage(list)} */}
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
