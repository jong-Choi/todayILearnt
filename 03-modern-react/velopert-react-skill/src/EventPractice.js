import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  handelChange = (e) => {
    this.state({
      // 기존코드 : message: e.target.value,
      [e.target.name]: e.target.value, //객체의 프로퍼티를 []로 감싸 state의 key로 사용함.
    });
  };

  handelClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handelChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나입력해보세요"
          value={this.state.message}
          onChange={this.handelChange}
        />
        <button onClick={this.handelClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
