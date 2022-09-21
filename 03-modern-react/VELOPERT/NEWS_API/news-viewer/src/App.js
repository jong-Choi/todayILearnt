import { useCallback, useState } from 'react';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};
export default App;

// import Categories from './components/Categories';
// import NewsList from './components/NewsList';

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };

// export default App;

/*
import { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data, setData] = useState(null);
  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=00a04a8d9e9c4429aefb4798d3582e62',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;

// api키 : 00a04a8d9e9c4429aefb4798d3582e62
// API설정 : https://newsapi.org/s/south-korea-business-news-api
//Top headlines from South Korea
//https://newsapi.org/v2/top-headlines?country=kr&apiKey=00a04a8d9e9c4429aefb4798d3582e62
// Top business headlines from South Korea
// https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=00a04a8d9e9c4429aefb4798d3582e62
*/

//// 비동기 프로그래밍
// https://velog.io/@cyranocoding/2019-08-02-1808-%EC%9E%91%EC%84%B1%EB%90%A8-5hjytwqpqj
// https://www.sungikchoi.com/blog/call-stack-callback-queue-event-loop/
// 특정 작업을 실행한다.
// 특정 작업의 로딩 시간이 0.5초일 때, 0.5초간 대기? 하면 동기적 처리이고,
// 해당 작업을 요청해두고 await를 통해 1초 후 다시 실행하면 비동기적 처리이다.

/// 간단한 용어설명
// call stack : 함수가 호출된 후 쌓이는 스택 / 실행중인 함수는 pop되지 않는다. / 실행중인 함수를 다시 call하는 것이 call back
// CallBack Queue : 처리를 기다리는 함수들이 선입선출 방식으로 관리되는 공간. 순차적으로 CallBack된다.
// EventLoop : 이벤트가 처리되는지를 기다리는 While문. 해당 while문의 처리에 따라서 CallBack Queue가 관리된다.

//// Styled Component
// SCSS에서의 &은 상위요소를 의미한다.
/*
```scss
.hello {
  & .child{

  }
}
```
&은 .hello를 의미한다.
아래와 같이 앰퍼센드를 생략할 수도 있다.
```scss
.hello {
  .child{

  }
}
```
위 구문은 css에서 아래와 같이 컴파일 된다.
```css
.parent .child {}
```
// 스타일드 컴포넌트에서 &은 자기자신을 의미한다.(그야 부모요소가 없으니께..)
// &+&은 해당 선택자가 반복되어 호출될때를 의미한다. 


// SCSS 문법
/* 
.hello {
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    
    &:hover {
        color: #495057;
    }

    & + & {
        margin-left: 1rem;
  }
}
*/
// 스타일드 컴포넌트 문법 :
/*
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
*/
