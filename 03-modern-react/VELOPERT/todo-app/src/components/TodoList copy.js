import './TodoList.scss';
import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove222, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove333={onRemove222}
          onToggle={onToggle}
        />
        // App의 todos 스테이트를 인수로 받아 Map을 이용하여 반환
        // TodoListItem에 todo를 그대로 props로 전달
      ))}
    </div>
  );
};

export default React.memo(TodoList); //리액트에 추가적으로 리스트요소 스테이트가 추가될 경우를 대비하여 memo. 사용.
