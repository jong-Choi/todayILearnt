import './TodoList.scss';
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

export default TodoList;
