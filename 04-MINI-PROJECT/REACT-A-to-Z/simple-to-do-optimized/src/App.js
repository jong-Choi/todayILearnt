import "./App.css";
import { useState } from "react";
import Lists from "./components/Lists";
import Form from "./components/Form";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// **테일윈드 css 적용**
// https://tailwindcss.com/docs/guides/create-react-app
// 1. 익스텐션에서 Tailwind CSS IntelliSense 설치
// 2.
// ```
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// ```
// 위 문구를 이용해 테일윈드 css를 개발자용으로 설치

// 3. tailwind.config.js 에서 src 폴더 주소 추가
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// 4. src폴더의 index.css 혹은 App.css 파일에 하기의 문구 추가
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// **드래그 앤 드롭 적용하기**
// npm install react-beautiful-dnd --save

// const handleEnd = (result) => {
//   // 드래그로 인해 반환되는 내용(result)에서 목표한 순서(destination)를 참조하여 splice 처리
//   // ** Array.prototype.splice **
//   // Arr.splice(3,1) 3번 인덱스부터 하나를 제거
//   // Arr.splice(3,0,'HelloWorld') 3번 인덱스에 HelloWorld를 추가
//   // ** result 객체 **
//   // result.source.index: 기존에 있던 위치
//   // result.destination.index : 목표로 하는 위치
//
//   if (!result.destination) return;
//   const newTodoData = todoData;
//   const [reorderedItem] = newTodoData.splice(result.source.index, 1);
//   newTodoData.splice(result.destination.index, 0, reorderedItem);
//   setTodoData(newTodoData);
// }
//
// <DragDropContext onDragEnd={handleEnd}>
//   <Droppable droppableId="lists">
//     {(provided) => (
//       <div {...provided.droppableProps} ref={provided.innerRef}>
//         {todoData.map((data, index) => (
//           <Draggable
//             key={data.id}
//             draggableId={data.id.toString()}
//             index={index}
//           >
//             {(provided, snapshot) => (
//               <div
//                 key={data.id}
//                 {...provided.draggableProps}
//                 ref={provided.innerRef}
//                 {...provided.dragHandleProps}
//                 className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"}}
//               ></div>
//             )}
//           </Draggable>
//         ))}
//         {provided.placeholder}
//       </div>
//     )}
//   </Droppable>
// </DragDropContext>
//
// ** React.memo **
// props가 업데이트되지 않았다면 리렌더링 되지 않는다. (메모이제이션을 사용한다.)
// 함수형 컴포넌트를 React.memo로 감싸주거나
// export default React.memo(List);
//
// ** useCallback **
// 리렌더링시에 함수를 다시 만든다.
// 특히, 함수를 다시 만들면서 해당 함수를 props로 받는 자식 컴포넌트도 리렌더링 된다.
// useCallback를 이용하여 의존자가 업데이트 되지 않았다면 리렌더링되지 않도록 할 수 있다.
// const functionName = (params) => {}
// const functionName = useCallback((params)=>{}, [anyState])
//
// ** useMemo **
// 리렌더링시에 함수를 다시 호출한다.
// 호출시 넘겨주는 파라미터가 같으면 다시 연산을 할 필요가 없다.
// useMemo에 파라미터들을 의존자로 넣어주면 연산을 방지할 수 있다,
// useMemo(콜백함수, [파라미터들])
// const result = addNumbers(a, b)
// const result = useMemo(()=> {
//                return compute(a,b)
//                }, [a, b])
//
// ** 리액트 확장 프로그램으로 리렌더링 확인하기 **
// 개발자 도구 - Components - Components창 내부의 톱니바퀴(View settting) - 'Highlight updates...'에 체크
//
// ** editing **
// 1. isEditing, setIsEditing 스테이트 만들기
// 2. onClick시 setIsEditing(!isEditing)
// 3. isEditing이 true이면 Form태그 호출
// 4. onClick시에 onChange의 데이터를 가져와서
//    todoData.map((data) => {
//    if (data.id === id) {
//        data.title = editedTitle;
//    }
//
// ** localStorage **
// localStorage를 사용하면 개발자 도구의 Application 탭의 localStorage에 저장됨을 확인할 수 있다.
// localStorage.setItem('키 이름', value)의 형태로 저장할 수 있다.
// 이때 리스트나 json파일은 .stringify를 하여 저장하여야 한다.
// 1. setTodoData를 할 때에
// localStorage.setItem("todoData", JSON.stringify(newTodoData));
// 를 추가하여 localStorage에 저장한다.
// 2. const data = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")):[]
// 위와 같이 localStorage가 있다면 todoData의 JSON파일을 parse로 가져오도록 한다.

const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

function App() {
  const [todoData, setTodoData] = useState(initialTodoData);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));

    // 입력란에 있던 글씨 지워주기
    setValue("");
  };

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
