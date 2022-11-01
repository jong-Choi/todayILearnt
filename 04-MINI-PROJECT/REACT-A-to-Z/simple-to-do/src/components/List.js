import React from 'react';
export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };
  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    // setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };
  const handleClick = (eventDataId) => {
    let newTodoData = todoData.filter((data) => data.id !== eventDataId);
    // let newTodoData = todoData.filter((data) => data.id !== eventDataId);
    console.log('newTodoData', newTodoData);
    // 클릭하면
    // newTodoData [{…}]
    // 0:{id: '1', title: '공부하기', completed: true}
    // length:1
    // [[Prototype]]: Array(0)
    // setState({ todoData: newTodoData });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <p>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(data.id)}
            />{' '}
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              x
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
