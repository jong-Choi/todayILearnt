import React from 'react';
import ScrollBox from './ScrollBox';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* 컴포넌트에 ref 설정하여 접근함 */}
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        {/* 컴포넌트의 내부의 메서드를 호출할 때에는 화살표 함수로 초기화를 시켜 실행하는 것이 좋음 */}
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );
  }
}

export default App;
