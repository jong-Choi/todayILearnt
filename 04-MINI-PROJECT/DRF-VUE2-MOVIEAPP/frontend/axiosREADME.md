# User

## 회원가입 구현하기

장고 users앱에 회원가입, 로그인 등이 구현되어 있는 점 참고.

### 백엔드

```
메서드: POST
URL: users/register/
fields: ("username", "password", "password2", "email")
```

### axios

```js
//state
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };

//axios
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
        this.props.history.push("/login");
      });
  }
```

## 로그인 구현하기

### axios

```
메서드: POST
URL : users/login
fields: ("username", "password")
반환값: {"token": token.key}
```

### 리액트

```js
//리액트 src\pages\Login.js
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users/login/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        if (response.status < 300) {
          localStorage.setItem("token", response.data["token"]);
          localStorage.setItem("username", this.state.username);
          console.log(response.data);
          this.props.history.push("/");
        }
      });
  }
```

## 프로필

### 백엔드

```
메서드: PUT, GET
URL : users/profile/
fields: ("nickname", "position", "subjects", "image")
```

### 리액트

#### PATCH

```js
  updateProfile() {
    const token = localStorage.getItem("token");
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
```

#### GET

```js
getProfile() {
  const token = localStorage.getItem("token");
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
```

# 게시판

장고 뷰셋을 사용하였음.

```
전체 조회 :
axios.get("http://localhost:8000/posts/")

개별 조회 :
axios.get("http://localhost:8000/posts/:pk/")

생성 :
axios.post("http://localhost:8000/posts/", {
        title,
        category,
        body,
        image
      },{
        headers: {
          "content-type": "multipart/form-data",
          "Authorization": `Token ${token}`,
        },
      }).then((response) => {
        if (response.status < 300) {
          pk = response.data.pk.toString()
          this.props.history.push(`/${pk}`);
        }
      });
  }


수정 :
axios.patch("http://localhost:8000/posts/:pk/", {
      title,
      category,
      body,
      image
    }, {
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

삭제 :
axios.delete("http://localhost:8000/:pk/", {
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
```

## 작성

### 백엔드

```py
class PostCreateSerializer(serializers.ModelSerializer):
        model = Post
        fields = ("title", "category", "body", "image")
```

### 리액트

```js
this.state = {
  title: "",
  category: "",
  body: "",
  image: null,
  imageName: "",
};
```

```js
  postClick() {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("category", this.state.category);
    formData.append("content", this.state.body);
    formData.append("image", this.state.image);
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

## Read

### 백엔드

```py
class PostSerializer(serializers.ModelSerializer):
        model = Post
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
```

### 리액트

```js
//main.js
  getPosts() {
    console.log("[*] getPosts");
    axios.get("http://localhost:8080/api/posts/").then((response) => {
      if (response.status < 300) {
        console.log(response.data.result);
        this.setState({
          posts: response.data.result,
        });
      }
    });
  }
  render() {
    console.log("[*] Main render");
    return (
      <div>
        <Grid posts={this.state.posts} />
      </div>
    );
  }
```

## Retrive

### 리액트

```js
//grid.js
<div className="columns is-multiline">
  {this.props.posts.map((post, index) => {
    return <Card post={post} key={index} />;
  })}
</div>
```

```js
//card.js
const post = this.props.post;
```

## Put

## Delete

#### 엑시오스

import axios from "axios";
const apiTMDB = axis.crete()
const apiDJANGO = axiosc.reate
export default {apiTMDB, apiDJANGO}

#### 게시글 res.data.results 확인

```
{
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "pk": 2,
            "profile": {
                "nickname": "",
                "position": "",
                "subjects": "",
                "image": "http://localhost:8000/media/default.png"
            },
            "title": "hello3",
            "body": "1201zzzz3",
            "image": "http://localhost:8000/media/default.png",
            "published_date": "2022-11-10T14:35:38.795359+09:00",
            "likes": [],
            "comments": []
        },
        {
            "pk": 3,
            "profile": {
                "nickname": "",
                "position": "",
                "subjects": "",
                "image": "http://localhost:8000/media/default.png"
            },
            "title": "hello3",
            "body": "1201zzzz3",
            "image": "http://localhost:8000/media/default.png",
            "published_date": "2022-11-10T15:46:29.596159+09:00",
            "likes": [],
            "comments": []
        }
    ]
```
