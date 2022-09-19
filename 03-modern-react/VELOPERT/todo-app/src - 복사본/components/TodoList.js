import './TodoList.scss';
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove222, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove222}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove222, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList); //리액트에 추가적으로 리스트요소 스테이트가 추가될 경우를 대비하여 memo. 사용.
