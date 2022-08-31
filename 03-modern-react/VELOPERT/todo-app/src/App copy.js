import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useState, useRef } from 'react';

/*
TodoList만들기
리액트
1. Todos를 State로 선언. 
Todos는 각각 id와 text, checked를 가진 객체가 State로 부여된다.

2. nextId는 useRef로 선언.
useRef가 적용된 변수는 리렌더링시에 초기화되지 않는 자바스크립트의 값이 된다.

3. onInsert 이벤트핸들러.
TodoInsert 컴포넌트의 onSubmit 이벤트에서 사용된다.
onSubmit이 발생하면 input태그의 value를 onInsert태그에 넘겨주고 value를 초기화한다.
onInsert태그는 해당 value를 setTodos의 text로 넘겨 {id: nextId, text:value, ckecked: false}인 값을 Todos State에 추가하고, nextId에 nextId.current += 1; 한다.

4. onRemove 이벤트 핸들러:
TodoListItem 컴포넌트의 "remove" 클래스의 onClick이벤트에서 사용한다. 
TodoListItem컴포넌트는 TodoList 컴포넌트에서 todos.map((요소)=>{})를 통해 todos 스테이트의 각 요소와 연결된다.
"remove"클래스는 onClick 이벤트가 발생하면 id를 onRemove에 넘겨주고, onRemove함수는 이벤트가 발행한 id를 제외한 요소들만 filter하여 setTodo한다.

5. onToggle 이벤트 핸들러:
TodoListItem 컴포넌트의 "checkbox" 클래스의 onClick이벤트에서 사용한다. 
TodoListItem 컴포넌트의 "checkbox" 클래스는 onClick이벤트가 발생하면 id를 onToggle에 넘겨주고, onToggle함수는 이벤트가 발생한 id와 todos의 요소의 id가 불일치하면 기존 요소를, 일치하면 기존 요소의 checked값을 토글하여 setTodos를 실행한다. 
TodoListItem 컴포넌트의 checkbox클래스는 todos 스테이트의 checked가 True이면 클래스 이름을 className={'checkbox', checked}로 바꾼다.

*/

/*
컴포넌트 성능 최적화
1. useMemo
TodoItemList.js
improt React from 'react';

export default React.memo(TodoListItem);

이제 해당 컴포넌트는 자신의 props(todo, onRemove, onToggle)가 바뀌지 않으면 리렌더링을 하지 않는다.

2. 함수형 업데이트
onToggle과 onRemove는 Todos가 업데이트될 때마다 계속 선언된다.
setTodos를 사용할 때, useCallback의 두번째 인수로 빈 배열을 넘겨주고 [] 배열에 담겨있던 todos를 setTodos(todos -> todos.map(todo => todo.id))와 같은 형식으로 인수로 빼준다. 

함수들은 큐에서 순차적으로 실행되며,
업데이트된 state를 인수로 다시 받기 때문에 최신의 state를 유지할 수 있다. 


*/

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  //todos의 리스트에 id를 부여하는 state를 만들어 TodoList컴포넌트에 Props로 전달함
  const [todos, setTodos] = useState(createBulkTodos);

  //렌더링에 필요 없는 값은 useRef를 사용하면 바닐라 자바스크립트 전역객체로 사용 가능하다.
  //함수를 선언할 때에는 useCallback을 사용하여 성능을 최적화 한다.
  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove111 = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        // id가 다르면 그대로 두고, 같으면 todo 객체에서 checked를 토글하여 반환
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      {/* onInsert라는 이벤트 핸들러를 만들어 props로 전달 */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove222={onRemove111} onToggle={onToggle} />
    </TodoTemplate>
  );

  // TotoTemplate : 화면을 가운데에 정렬시켜주며, 앱 타이틀을 보여줍니다. children으로 내부 jsx를 props로 받아와서 랜더링해줍니다.
  // TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트 입니다. state를 통해 인풋의 상태를 관리합니다.
  // TodoListItem : 각 할 일 항목에 대한 정보를 보여주는 컴포넌트 입니다. todo객체로 props를 받아와서 상태에 따라 다른 스타일의 ui를 보여줍니다.
  // TodoList : Todos배열을 props로 받아온 후 이를 배열 내장 함수 map을 사용해서 여러개의 totoListItem컴포넌트로 변환하여 보여줍니다.
};
export default App;
