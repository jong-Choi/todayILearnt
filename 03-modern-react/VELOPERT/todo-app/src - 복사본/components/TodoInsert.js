import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  //함수의 내용이 바뀌지 않으므로 useCallback으로 고정
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value); //Submit을 누르면 App컴포넌트의 onInsert함수에 Value를 넘겨주고
      setValue(''); //State의 Value를 초기화
      e.preventDefault(); //Submit태그의 새로고침 기능을 prevent
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      {/* 해당 버튼을 클릭하거나 Form에서 엔터를 누르면 onSubmit 이벤트 실행됨 */}
      {/* onClick는 클릭했을 때에만 작동 */}
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
