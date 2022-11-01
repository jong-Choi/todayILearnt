import './App.css';
import React, { useState } from 'react';
import List from './components/List';

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: '1',
      title: '공부하기',
      completed: false,
    },
    {
      id: '2',
      title: '청소하기',
      completed: false,
    },
  ]);
  const [value, setValue] = useState('');

  // listStyle = () => {
  //   return {
  //     padding: '10px',
  //     borderBottom: '1px #ccc dotted',
  //     textDecoration: 'none',
  //   };
  // };

  // todoData = [
  //   {
  //     id: '1',
  //     title: '공부하기',
  //     completed: true,
  //   },
  //   {
  //     id: '2',
  //     title: '청소하기',
  //     completed: false,
  //   },
  // ];

  const handleChange = (e) => {
    // console.log('e', e);
    setValue(e.target.value);
    // setState({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    console.log([...todoData, newTodo]);
    // setState({ todoData: [...todoData, newTodo], value: '' });
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />

        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>
      </div>
    </div>
  );
}
