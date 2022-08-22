import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  //   Property initializer syntax
  handelChange = (e) => {
    this.state({
      // 이벤트에서 만들어지는 값을 가져옴
      message: e.target.value,
    });
  };

  handelClick = () => {
    // 확인 버튼을 클릭하면 값을 경고창으로 띄우고 state를 초기화함
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handelChange} //앞에서 선언된 함수 this 바인딩으로 불러오기
        />
        <button onClick={this.handelClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
