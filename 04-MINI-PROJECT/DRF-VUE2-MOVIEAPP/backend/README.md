## 회원가입

### RegisterSerializer (users/serializer.py)

```py
#users/serializer.py
class RegisterSerializer(serializers.ModelSerializer): #회원가입 시리얼 라이저
```

모델 시리얼라이저를 사용하기 때문에 models.py에 따로 정의하지 않음.

해당 시리얼 라이저를 이용해

```
username : id로 사용
email
password
password2 : 검증용
```

위의 네 가지 필드를 받음.

추가적인 필드에 대한 정보는 [3.2 공식문서 django.contrib.auth](https://docs.djangoproject.com/en/3.2/ref/contrib/auth/) 참조할 것

### RegisterView (users/views.py)

```py
class RegisterView(generics.CreateAPIView):
```

createAPIView를 이용해 post요청으로 회원 정보를 생성을 요청.
RegisterSerializer의 create메서드를 통해 유저 토큰이 생성됨.

### 'register/' (users/urls.py)

```py
#myboard/urls.py
urlpatterns = [
    ...
    path("users/", include("users.urls")),
]
```

```py
#users/urls.py
urlpatterns = [
    path("register/", RegisterView.as_view()),
]
```

'users/register/'로 접속하여 회원가입 하도록 urls를 등록함.

## 로그인

### LoginSerializer (users/serializers.py)

```py
#users/serializers.py
class LoginSerializer(serializers.Serializer):
```

write_only를 이용해 클라이언트->서버로 역직렬화

user가 contrib.auth의 authenticate를 통과하면  
user에서 토큰을 반환.

### LoginView (users/views.py)

```py
#users/views.py
class LoginView(generics.GenericAPIView):
```

serializer를 통해 데이터를 전달하고,
리스폰스로 해당 토큰을 전달함.

### 'login/' (users/urls.py)

```py
#users/urls.py
urlpatterns = [
    ...
    path("login/", LoginView.as_view()),
]
```

'users/login/'으로 접속할 수 있도록 url 등록.

## 프로필 (유저 모델 확징)

커스텀 유저 모델을 사용하지 않고,  
유저 모델을 1:1 참조하는 프로필 모델을 만들어서 유저 모델을 확장함.

### Profile (users/models.py)

```py
#users/models.py
class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True
    )
    ...
```

유저 모델을 1:1로 상속받고,  
아래의 필드를 추가함

```
nickname 별명
position 직책
subjects 관심사
image 프로필이미지
```

```py
#users/models.py
@receiver(post_save, sender=User)
def create_user_profile() :
```

@receiver 데코레이터가 프로필 생성 이벤트를 감지하여 생성된 사용자와 연결된 프로파일을 만들어줌

### Pillow를 이용한 이미지 주소 등록

`pip install Pillow` (여기셔 PIL는 python image li)

```py
#myboard/settings.py
STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOD = os.path.join(BASE_DIR, 'media')
```

```py
#myboard/urls.py
urlpatterns = [
...
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

### ProfileSerializer (users/serializers.py)

```py
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("nickname", "position", "subjects", "image")
```

모델 시리얼라이저로 4개의 필드를 받아온다. `'__all__'`이 아닌 필드명으로 시리얼라이징 하고 있다.

## 프로필 조회와 수정

### 'profile/`<int:pk>`/'

```py
#users/urls.py
urlpatterns = [
    ...
    path("profile/<int:pk>/", ProfileView.as_view()),
]
```

### ProfileView (users/views.py)

```py
class ProfileView(generics.RetrieveUpdateAPIView):
```

RetrieveUpdate로 조회와 수정이 가능하게 한다.  
이때, 수정은 자기 자신의 프로필만 가능해야 한다.

### CustomReadOnly (users/psermissions.py)

```py
#users/psermissions.py
from rest_framework import permissions
class CustomReadOnly(permissions.BasePermission):
```

rest_framework에서 permissions를 불러온다.  
안전한 메서드로, 요청 유저와 객체의 유저가 같은 경우에 true를 준다. true일 때에만 update가 가능하게 한다.

### users/admin.py

stackedInline과  
admin.site.register(User, UserAdmin)을 통하여  
admin에서 한 줄로 user를 확인할 수 있게 된다.

```py
#users/admin.py
class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete: bool = False
    verbose_name_plural: Optional[str] = "profile"


class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
```

# 리액트와 연동하기

## CORS 이슈

Cross-Origin Resource Sharing.  
동일한 포트 번호에만 자원을 공유하는 것이 아닌, 리액트의 3000번 포트와 장고의 8000번 포트 사이에 cross-origin으로 데이터를 주고 받을 수 있게 하기.

`pip install django-cors-headers`

이후 myboard/settings.py에서 installed_apps, middleware 수정하기 (책 180페이지 참조)

## 프론트 엔드에서 폼 전송

```js
//리액트 /src/pages/register.js
...
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
...
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users/register/", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      })
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/login");
      });
  }
```

state에 username, email, password, password2를 포함하고 있으며,  
submit 이벤트 발생 시 axios로 post요청을 보낸다.

state가 ''로 초기화 되어 있으며,
form은 state를 변경한다.

onSubmit이벤트를 통해 axios로 state를 서버에 전달한다.

```js
// 리액트 /src/pages/register.js
<form onSubmit={this.handleSubmit} className="box">
  <div className="field">
    <label className="label">아이디</label>
    <div className="control has-icons-left">
      <input
        type="text"
        placeholder="아이디를 입력하세요."
        className="input"
        name="username"
        value={this.state.username}
        onChange={this.handleChange}
        required
      />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
    </div>
  </div>
  <div className="field">
    <label className="label">이메일</label>
    <div className="control has-icons-left">
      <input
        type="email"
        placeholder="이메일을 입력하세요."
        className="input"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        required
      />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
    </div>
  </div>
  <div className="field">
    <label className="label">비밀번호</label>
    <div className="control has-icons-left">
      <input
        type="password"
        placeholder="*******"
        className="input"
        name="password"
        value={this.state.password}
        onChange={this.handleChange}
        required
      />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faLock} />
      </span>
    </div>
  </div>
  <div className="field">
    <label className="label">비밀번호 확인</label>
    <div className="control has-icons-left">
      <input
        type="password"
        placeholder="*******"
        className="input"
        name="password2"
        value={this.state.password2}
        onChange={this.handleChange}
        required
      />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faLock} />
      </span>
    </div>
  </div>
  <div className="field">
    <button className="button is-primary is-fullwidth" type="submit">
      회원가입
    </button>
  </div>
</form>
```

### 프론트 엔드에서 로그인 (토큰 저장)

마찬가지로 state에 username, password를 ''로 초기화 한 후, 아래와 같이 폼을 컨트롤한다.

```js
//리액트 src\pages\Login.js
  handleSubmit(event) {
    event.preventDefault();
    console.log("[Login.js] handleSubmit");
    axios
      .post("http://localhost:8000/users/login/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        if (response.status < 300) {
          console.log("[Login.js] Call props.doLogin");
          this.props.doLogin();
          localStorage.setItem("token", response.data["token"]);
          localStorage.setItem("userId", response.data["UserID"]);
          localStorage.setItem("username", this.state.username);
          console.log(response.data);
          this.props.history.push("/");
        }
      });
  }
```

setItem으로 토큰을 로컬 스토리지에 저장한다.

이후 토큰이 null인지 아닌지에 따라 아래와 같이 로그인 여부를 확인한다.

```js
// 리액트 shared/App.js
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
    const token = localStorage.getItem("token");
    this.state = {
      // eslint-disable-next-line
      isLogin: token != "null",
    };
    console.log("[App.js] token: ", token);
    console.log("[App.js] isLogin: ", this.state.isLogin);
    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
```

추후 메인 페이지도 isLogin 상태를 기반으로 수정한다.

```js
<div className="centered">
  <Route path="/detail/:pk" render={(post) => <Detail post={post} />} />
  <Route path="/new" render={() => <New isLogin={this.state.isLogin} />} />
  <Route
    path="/profile"
    render={() => <Profile isLogin={this.state.isLogin} />}
  />
</div>
```

```js
// profile.js
if (isLogin === false) {
  return <Redirect to="/login" />;
}
if (isUpdate === false) {
} else {
}
```

isLogin이 아니라면 로그인 화면으로 이동시키도록 하는 예시.

# 게시글 만들기

게시글은 아래의 기능을 포함한다.

```
CRUD
좋아요
필터링(나의 좋아요 글, 내가 작성한 글)
기능 별 권한 설정
```

### Post(models.Model) (/posts/models.py)

`저자, 저자 프로필, 제목, 카테고리, 본문, 이미지, 좋아요 누른 사람, 글이 올라간 시간`

```py
# posts/models.py
class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, blank=True)
    title = models.CharField(max_length=128)
    category = models.CharField(max_length=128)
    body = models.TextField()
    image = models.ImageField(upload_to="post/", default="default.png")
    likes = models.ManyToManyField(User, related_name="like_posts", blank=True)
    published_date = models.DateTimeField(default=timezone.now)
```

이때 post는 User모델을 외래키로 참조한다. User모델은 post를 알지 못한다. 이에 따라 `related_name="posts"`옵션을 통해서 User가 posts 전체를 참조할 수 있도록 한다.

### Serializer

시리얼라이저는 '글을 작성할 때' 쓰는 시리얼라이저를 따로 만든다. PostCreateSerializer는 글을 작성할 때 호출되어 데이터를 검증하는 시리얼 라이저이다. 일반적인 용도에서는 PostSerializer가 호출된다.

```py
# posts/serializer.py
class PostSerializer(serializers.ModelSerializer):
...
        fields = (
            "pk",
            "profile",
            "title",
            "body",
            "image",
            "published_date",
            "likes",
            "comments",
        )

# 글을 작성할 때 사용되는 시리얼라이저
class PostCreateSerializer(serializers.ModelSerializer):
...
        fields = ("title", "category", "body", "image")
```

### 권한 인증

```py
# posts/permissions.py
class CustomReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):

    def has_object_permission(self, request, view, obj):
```

BasePermission에서,  
has_permission 메서드를 정의한다. 해당 메서드에서 메서드가 'GET'이면 True를 반환해 글 조회를 가능하도록 한다.

has_object_permission을 통해 생성과 편집에 대해서 정의한다.

### CRUD + 필터링

필터링에는 `django-filter`를 사용하였다.  
?로 시작해 `키=값&키=값`의 쿼리를 넣어 필터를 할 수 있다.  
`posts/?author=4`로 접속하면 유저의 pk가 4인 값이 필터링되어 나온다.

```py
# posts/views.py
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [CustomReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["author", "likes"]

    def get_serializer_class(self):
        if self.action == "list" or "retrieve":
            return PostSerializer
        return PostCreateSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(author=self.request.user, profile=profile)
```

만들어진 permission_classes를 ModelViewSet에 포함시킨다.

ModelViewSet은 list, create, retrieve, update, partial_update, destroy의 6가지 액션을 가지고 있다.

추가로 장고 필터를 통해 '좋아요'와 '글쓴이'를 기준으로 필터기능을 추가한다.

### URLS

posts에는 simpleRouter를 이용하여 url을 등록해준다.

```py
# posts/urls.py
router = routers.SimpleRouter()
router.register("posts", PostViewSet)
router.register("comments", CommentViewSet)
urlpatterns = router.urls + [path("like/<int:pk>/", like_post, name="like_post")]
```

이때 posts라는 경로가 등록되었기 때문에 프로젝트의 urls에는 비어있는 경로를 넣어준다.

```py
# myboard/urls.py
urlpatterns = [
...
    path("", include("posts.urls")),
]
```

### Pagination (중요)

```py
# myboard/settings.py
REST_FRAMEWORK = {
    ...
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 3,
}
```

위와 같이 장고 프레임 워크에 PageNumberPagination 클래스가 추가되었다.

PageNumberPagination을 사용할 시 반환되는 결과에 'next'와 'previous', 'count'라는 키가 함께 추가된다.  
따라서 프론트엔드 작업시에 이를 참조하여 'PAGE_SIZE' 등울 수정하거나 프론트엔드에서 Pagination을 구현하여야 한다.

### 좋아요

Post 클래스에 likes는 ManyToMany 필드로 설정되어 있다. 이를 이용해서 특정 pk의 포스트를 가져와 likes 필드에 유저의 정보를 add 혹은 remove한다.  
이때 데코레이터를 이용해 메서드와 permission_class를 설정해준다.

```py

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def like_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.user in post.likes.all():
        post.likes.remove(request.user)
    else:
        post.likes.add(request.user)

    return Response({"status": "ok"})
```

좋아요 기능의 url은 urlpatterns에 추가해준다. (함수형으로 작성했으므로 .as_view나 routers.SimpleRouter().register()를 사용하지 않음.)

```py
# posts/urls.py
urlpatterns = router.urls + [
    path("like/<int:pk>/", like_post, name="like_post")
    ]
```

## 댓글 기능

```
CRUD
게시글 로드 시 댓글로 로드
```

### models.py

```py
# posts/models.py
class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    text = models.TextField()
```

해당 Comments모델을 Posts의 모델시리얼라이저에 추가하면 된다.

```py
# posts/serializers.py
class PostSerializer(serializers.ModelSerializer):
...
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = (
...
            "comments",
        )
```

댓글의 CRUP권한도 게시글과 같은 방식으로 정의한다.

```py
# posts/views.py
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [CustomReadOnly]

    def get_serializer_class(self):
        if self.action == "list" or "retrieve":
            return CommentSerializer
        return CommentCreateSerializer

    def perform_create(self, serializer):
        profile = Profile.objects.get(user=self.request.user)
        serializer.save(author=self.request.user, profile=profile)
```

이를 urls에 등록한다.

```py
# posts/urls.py
...
router.register("comments", CommentViewSet)
...
```

# 리액트와 연동하기 2

## Profile 기능

```js
// pages/Profile.js

  getProfile() {
    const token = localStorage.getItem("token");
    console.log("[*] getProfile");
    axios
      .get("http://localhost:8000/users/profile/", {
        headers: {
          "Authorization": `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status < 300) {
          this.setState({
            nickname: response.data["nickname"],
            position: response.data["position"],
            subjects: response.data["subjects"],
            image: response.data["image"],
          });
        }
      });
  }

    updateProfile() {
    const token = localStorage.getItem("token");
    console.log("[*] updateProfile");
    const formData = new FormData();
    formData.append("image", this.state.new_image);
    formData.append("nickname", this.state.nickname);
    formData.append("position", this.state.position);
    formData.append("subjects", this.state.subjects);
    console.log(formData.entries());
    axios
      .patch("http://localhost:8000/users/profile/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          "Authorization": `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status < 300) {
          this.props.history.push("/");
        }
      });
  }
    updateClick(event) {
    event.preventDefault();
    if (this.state.isUpdate === true) {
      this.updateProfile();
    } else {
      this.setState((prevState) => ({ isUpdate: !prevState.isUpdate }));
    }
  }

```

## 게시글

### 게시글 작성하기

```js
// shared/App.js
<Route path="/new" render={() => <New isLogin={this.state.isLogin} />} />
```

```js
// pages/New.js
  render() {
    const isLogin = this.props.isLogin;
    if (isLogin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container is-half">
        <Form />
        <br />
      </div>
    );
  }
```

```js
// components/Form.js
  postClick() {
    const token = localStorage.getItem("token");
    console.log("[*] createPost");
    const formData = new FormData();
    formData.append("Title", this.state.title);
    // formData.append("category", this.state.category);
    formData.append("Content", this.state.body);
    // formData.append("image", this.state.image);
    console.log(formData.entries());
    axios
      .post("http://localhost:8080/api/posts/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          "Authorization": `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status < 300) {
          this.props.history.push("/");
        }
      });
  }
```

### 게시글 및 댓글 조회하기

```js
// shared/App.js
<Route path="/detail/:pk" render={(post) => <Detail post={post} />} />
```

```js
// pages/New.js
  render() {
    const post = this.props.post;
    console.log(this.props.params);
    return (
      <div>
        <Post post={post} />
        <hr />
        <Comment />
        <br />
      </div>
    );
  }
```

```js
// components/Post.js
<section>
  <h1 className="title">{props.Title}</h1>
  <div className="content is-medium">
    <p>{props.Content}</p>
  </div>
</section>
```

```js
<section>
  <div className="comment">
    <div className="field">
      <label className="label">댓글</label>
      <div className="control">
        <textarea
          className="textarea is-warning"
          placeholder="댓글을 입력하세요."
          rows="5"
        ></textarea>
      </div>
    </div>
    <button className="button is-primary">입력</button>
  </div>
</section>
```

Post.js에서 '좋아요' 기능, '댓글 조회' 기능 등 추가하기.

댓글 달기 기능은 다른 컴포넌트로 분리하기.

그 밖에 좋아요 기능 분리하기.

### TMDB api 사용하기

1. 장고에서 TMDB를 통해 영화 리스트를 받아오기
2. 장고에서 해당 영화리스트를 이용해 ManyToMany 모델 구축하기
3. 프론트 단에서 해당 영화 리스트의 pk값을 이용하기
4. 디테일 등 상세 정보가 필요한 경우 프론트 단에서 axios를 이용해 TMDB로 바로 호출하기.

혹은

1. 프론트단에서 axios를 통해 tmdb api 사용하기
2. 이를 통해 '본 영화', '볼 영화' 등의 데이터를 장고로 post
3. 유저별로 본 영화, 볼 영화 등을 저장.

# 넷플릭스 클론 코딩

## api

```js
// api/axios.js
import axios from "axios";

// 같은 요청을 여러번 반복하기 위해 baseURL, Prams, Fetch(requests.js)를 나누어 저장

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
```

```js
//requests.js
//https://developers.themoviedb.org/
const requests = {
  fetchNowPlaying: "movie/now_playing",
  fetchNetflixOriginals: "/discover/tv?with_networks=213",
  fetchTrending: "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMovies: "/discover/movie?with_genres=28",
  fetchComedyMovies: "/discover/movie?with_genres=35",
  fetchHorrorMovies: "/discover/movie?with_genres=27",
  fetchRomanceMovies: "/discover/movie?with_genres=10749",
  fetchDocumentaries: "/discover/movie?with_genres=99",
};

export default requests;
```

## 메인 페이지

```js
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
```

```js
// components/Row.js
const [movies, setMovies] = useState([]);
useEffect(() => {
  fetchMovieData();
});
const [modalOpen, setModalOpen] = useState(false);
const [movieSelected, setMovieSelected] = useState({});

const fetchMovieData = async () => {
  const request = await axios.get(fetchUrl);
  setMovies(request.data.results);
};
```

## App.js

```js
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}
```

## Vue로 일기앱 만들기

https://dreamcoding.tistory.com/4
