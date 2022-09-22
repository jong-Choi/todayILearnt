// import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from '../../node_modules/axios/index';
// import NewsItem from './NewsItem';

// const NewsItemBlock = styled.div`
//   box-sizing: border-box;
//   padding-bottom: 3rem;
//   width: 768px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   @media screen and (max-width: 768px) {
//     width: 100%;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
// `;

// const NewsList = ({ category }) => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=00a04a8d9e9c4429aefb4798d3582e62`,
//         );
//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);

//   if (loading) {
//     return <NewsItemBlock> 대기중 </NewsItemBlock>;
//   }

//   if (!articles) {
//     return null;
//   }

import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const NewsList = ({category}) => {
  const [loading, response, error] = usePromise(()=>{
    const query = category === 'all'? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=00a04a8d9e9c4429aefb4798d3582e62`,
    );
  }, [category]);

  if (loading){
    return <NewsItemBlock>대기 중...</NewsItemBlock>;
  }

  if (!response) {
    return null;
  }

  if (error){
    return <NewsItemBlock>에러 발생</NewsItemBlock>
  }

  const {articles} = response.data;

  return (
    <NewsItemBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsItemBlock>
  );
};

export default NewsList;