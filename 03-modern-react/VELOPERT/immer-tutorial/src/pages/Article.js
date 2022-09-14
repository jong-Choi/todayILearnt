import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  //<Route path="/articles/:id" element={<Article />} />
  //위 루트를 통해서 받은 id의 value를 {id} = useParams로 조회함
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

export default Article;
