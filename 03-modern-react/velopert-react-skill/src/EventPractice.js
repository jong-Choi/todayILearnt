import React, { useState } from 'react';

const EventPractice = () => {
  // form상태에 객체로 넘겨줌
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;

  // form 객체를 깊은 복사한 후,
  // 이벤트가 발생한 객체의 name으로 키를 조회한 후, 값을 변경
  // nextForm으로 변경된 객체를 저장
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
