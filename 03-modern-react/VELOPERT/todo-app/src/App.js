import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );

  // TotoTemplate : 화면을 가운데에 정렬시켜주며, 앱 타이틀을 보여줍니다. children으로 내부 jsx를 props로 받아와서 랜더링해줍니다.
  // TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트 입니다. state를 통해 인풋의 상태를 관리합니다.
  // TodoListItem : 각 할 일 항목에 대한 정보를 보여주는 컴포넌트 입니다. todo객체로 props를 받아와서 상태에 따라 다른 스타일의 ui를 보여줍니다.
  // TodoList : Todos배열을 props로 받아온 후 이를 배열 내장 함수 map을 사용해서 여러개의 totoListItem컴포넌트로 변환하여 보여줍니다.
};
export default App;
