import logo from "./logo.svg";
import "./App.css";
import { useCallback, useRef, useState } from "react";
import produce from "immer";

// import produce from "immer";
// 스프레드 연산자 대신 produce를 setState 함수 안에 작성함.
// produce는 첫번째 인자로 기존 state를 받으며, 두번째 인자는 state에 접근하여 이를 수정하는 함수를 받음.
// 만일 첫번째 인자가 함수이면 '함수형 업데이트'를 이용하여 state를 업데이트함

//       setForm({
//         ...form,
//         [name]: [value],
//       });

//       setForm(
//         produce(form, (draft) => {
//           draft[name] = value;
//         })
//       );

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 태그의 onChange 렌더링
  //produce의 첫번째 인자가 함수이면 함수형업데이트를 사용함
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);
  // const onChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target;
  //     setForm(
  //       produce(form, (draft) => {
  //         draft[name] = value;
  //       })
  //     );
  //   },
  //   [form]
  // );
  // const onChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: [value],
  //     });
  //   },
  //   [form]
  // );

  //form 태그의 submit 이벤트핸들러
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // form태그의 name에 따라 데이터를 입력받음
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // data스테이트를 업데이트
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );
      // setData(
      //   produce(data, (draft) => {
      //     draft.array.push(info);
      //   })
      // );
      // setData({
      //   ...data,
      //   array: data.array.concat(info),
      // });

      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    // [data, form.name, form.username]
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    // setData({
    //   ...data,
    //   array: data.array.filter((info) => info.id !== id),
    // });
    setData(
      // produce(data, (draft) => {
      //   draft.array.splice(
      //     draft.array.findIndex((info) => info.id === id),
      //     1
      //   );
      // })
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
