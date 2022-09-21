import NewsList from './components/NewsList';

const App = () => {
  return <NewsList />;
};

export default App;

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
