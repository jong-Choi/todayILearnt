import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      {/* <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} /> */}
      <Route path="/articles" element={<Articles/>}>
        <Route path=":id" element={<Article/>} />
      </Route>
    </Routes>
  );
};

export default App;

/*
리액트 라우터 사용법
1. index.js의 컴포넌트를 BrowserRouter로 감싸기
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

2. App.js에 Routes를 만들고
  <Route path='주소규칙' element={<로드할 컴포넌트/>} /> 추가하기
  const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    );
  };

3. 각 컴포넌트에서 링크를 걸 때에는 Link 태그를 사용하기 (Link 태그는 a태그와 달리 새로고침을 하지 않고 경로만 변경함)
const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/about">소개</Link>
    </div>
  );


URL 파라미터 : 페이지 주소를 유동적으로 정의할 때 사용
/profile/velopert
쿼리스트링 : 주소의 뒷부분 ? 문자열 이후 KEY=VALUE&KEY=VALUE 형태로 요청을 전달
/articles?page=1?keyword=react

4. useParams URL파라미터
import { useParams } from "react-router-dom";을 통해 useParams를 import할 수 있다.

const params = useParams()로 useParams()를 받아준다.

Route path에 파라미터가 들어갈 곳은 /:topic_id라고 변수를 지정해준다. (:는 해당 부분이 Parameter임을 명시한다.)

해당 변수를 통해 값이 들어오면 prams = {topic_id : '5'} 와 같은 형식으로 받아진다.


1) Profile.js
const params = useParams();
const profile = data[params.username];

2) App.js
<Route path="/profiles/:username" element={<profile />} />

3)
만일 profile/gildong 으로 접속할 시
prams는 { username: 'gildong' }의 객체가 되고
이를 params.username 으로 조회한다.


5. useLocation 쿼리스트링
import { useLocation } from "react-router-dom";

const location = useLocation();

location객체의 값
location.search : ?문자를 포함한 쿼리스트링 값
location.state: 페이지로 이동할 때 임의로 넣을 수 있는 값 https://velog.io/@dnjstd/React-useLocation-%EC%82%AC%EC%9A%A9

location.search로 얻은 ?쿼리스트링 문자열은 따로 파싱해야 한다.

6. useSearchParams 쿼리스트링
리액트 라우터 v6부터 지원하기 시작한 훅

const [searchParams, setSearchParms] = useSearchParms();
const detail = searchParams.get('detail');
const mode = searchParams.get('mode');

setSearchParams({ mode : 2, detail: true }) 와 같은 형식으로 url주소를 변경할 수 있음
(http://localhost:3000/about?mode=2&detail=null)

searchParams.get('mode'), searchParams.get('detail')과 같은 형식으로 url주소로부터 값을 받아올 수 있음.




*/
