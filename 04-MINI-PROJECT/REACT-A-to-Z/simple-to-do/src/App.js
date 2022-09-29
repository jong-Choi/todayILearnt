import './App.css';
import { Component } from 'react';

export default class App extends Component {
  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  listStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: 'none',
    };
  };

  state = {
    todoData: [
      {
        id: '1',
        title: '공부하기',
        completed: true,
      },
      {
        id: '2',
        title: '청소하기',
        completed: false,
      },
    ],
    value: '',
  };
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

  handleClick = (eventDataId) => {
    let newTodoData = this.state.todoData.filter(
      (data) => data.id !== eventDataId
    );
    // let newTodoData = this.todoData.filter((data) => data.id !== eventDataId);
    console.log('newTodoData', newTodoData);
    // 클릭하면
    // newTodoData [{…}]
    // 0:{id: '1', title: '공부하기', completed: true}
    // length:1
    // [[Prototype]]: Array(0)
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    // console.log('e', e);
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDeafult();
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    this.setState({ todoData: [...this.state.todoData, newTodo], value: '' });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {/* {this.todoData.map((data) => ( */}
          {this.state.todoData.map((data) => (
            <div style={this.listStyle()} key={data.id}>
              <p>
                <input type="checkbox" defaultChecked={false} /> {data.title}
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  x
                </button>
              </p>
            </div>
          ))}

          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
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
}
