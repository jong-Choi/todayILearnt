import { useState } from 'react';

const IterationSample = () => {
  //id값을 state 객체의 키와 밸류 값으로 추가할 수 있다.
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
      //concatenate함수는 새로운 객체를 추가한 배열을 '반환'해줌. (push는 기존 배열에 새로운 값만 추가 )
    });
    //names객체를 업데이트한 이후 아래의 작업을 수행함
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  //filter를 이용하면 불변성을 유지하며 배열의 항목을 지울 수 있다.
  const onRemove = (id) => {
    //id는 onRemove에서 받아온 id
    const nextNames = names.filter((name) => name.id !== id); // name.id는 state의 id
    setNames(nextNames);
  };

  //추가된 값은 인수명.키 의 형태로 불러와서 사용된다.
  const nameList = names.map((name) => (
    // onDoubleClick시에 해당 객체를 onRemove 핸들러로 넘겨줌.
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.id} {name.text}
    </li>
  ));

  return (
    <>
      {/* inputText 스테이트에 onChange이벤트의 value값을 넘겨줌 */}
      <input value={inputText} onChange={onChange} />{' '}
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;

// export default function IterationSample() {
//   const names = ['눈사람', '얼음', '눈', '바람'];
//   const nameList = names.map((anyName, sdfa) => <li key={sdfa}>{anyName}</li>);
//   return <ul>{nameList}</ul>;
//   //콜백함수는 첫번째 인수로 리스트의 객체를, 두번째 인수로 인덱스를 받는다.(식별자명은 노상관)
//   //리스트 엘리먼트는 DOM의 업데이트를 체크하기 위해 항상 유일한 key값을 가져야 하며,
//   //이를 위해 주로 인덱스 값을 사용한다.
// }

// export default function IterationSample() {
//   return (
//     <ul>
//       <li>눈사람</li>
//       <li>얼음</li>
//       <li>눈</li>
//       <li>바람</li>
//     </ul>
//   );
// }
