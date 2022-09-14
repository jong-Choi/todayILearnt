// import produce from "immer";
// const nextState = produce(originalState, draft =>{
//     // 바꾸고 싶은 값 바꾸기
//     draft.somewhere.deep.inside = 5;
// })

// produce의 인자 2개
// originalState : 수정하고 싶은 상태
// f(): 상태를 어떻게 업데이트할지

// 바꾸고 싶은 상태를 콜백함수의 인자로 넘겨주면,
// 불변성을 유지하면서 해당 값을 자유롭게 접근하여 바꿀 수 있다.

import produce from "immer";

const originalState = [
  {
    id: 1,
    todo: `전개 연산자와 배열 내장 함수로 불변성 유지하기`,
    checked: true,
  },
  {
    id: 2,
    todo: `immer로 불변성 유지하기`,
    checked: false,
  },
];

const nextState = produce((originalState, draft) => {
  // id가 2인 항목의 checked 값을 true로 설정
  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       // id가 다르면 그대로 두고, 같으면 todo 객체에서 checked를 토글하여 반환
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }, []);
  const todo = draft.find((t) => t.id === 2); // id로 항목 찾기
  todo.checked = true;
  // 혹은 draft[1].checked = true

  // 배열에 새로운 데이터 추가
  //   const [todos, setTodos] = useState(createBulkTodos);
  //   const nextId = useRef(2501);
  //   const onInsert = useCallback((text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos((todos) => todos.concat(todo));
  //     nextId.current += 1;
  //   }, []);
  draft.push({
    id: 3,
    todo: `일정 관리 앱에 immer 적용하기`,
    checked: false,
  });

  // id = 1인 항목을 제거하기
  // const onRemove = useCallback((id) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // }, []);
  draft.splice(
    draft.findIndex((t) => t.id === 1),
    1
  );
});
