import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove333, onToggle }) => {
  const { id, text, checked } = todo; //Todo 객체에서 key가 text, checked인 프로퍼티를 받음

  return (
    <div className="TodoListItem">
      {/* classnames의 소괄호 변수 { }는 false이면 클래스명에서 제외, true이면 클래스 명에 적용
      삼항연산자를 통해 MdCheckBox를 교체
      props로 받은 todo의 text 프로퍼티를 text로 표시 */}
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove333(id)}>
        {/* 해당 버튼이 클릭되면 onRemove아이템을 아이템의 id와 함께 실행 */}
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
