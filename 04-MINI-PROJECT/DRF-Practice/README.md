# DRF를 이용한 게시판 구축하기
## 실습 환경 구축 
1. `python -m venv venv`
2. `source venv/Scripts/activate`
3. 장고 설치
   1. `pip install -r requirements.txt`
   2. 혹은 `pip install django~=3.2 djangorestframework~=3.13`
   장고 3.2버전부터 외부참조가 가능한 점 참고.
   `~=`는 해당 버전 중 최신 마이너 업그레이드를 적용하겠다는 의미.
4. `pip freeze > requirements.txt`

## 프로젝트 시작
1. `django-admin startproject mypjt .`
2. `django-admin startapp myapp`
```py
#mypjt/settings.py
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "myapp",
]
```
임포트에 에러가 발생하는 경우 `ctrl+shift+p`를 입력한 후 `Python: Select Interpreter`에서 인터프리터 설정을 변경한다.  


## 모델 설정
데이터 베이스가 될 json파일을 잘 확인하여 진행할 것.  
장고 3.2버전 부터는 id가 자동으로 설정되며, 해당 id가 pk로 지정된다.
### 장고의 참조 필드
```py
#myapp/models.py
from django.db import models
from django.utils import timezone

class Actor(models.Model):
    name = models.CharField(max_length=100)


class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.DateTimeField(default=timezone.now)
    poster_path = models.TextField()
    actors = models.ManyToManyField(Actor, blank=True)


class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
```
1. `models.ForeignKey(참조할모델, on_delete=models.CASCADE)`
    외부 참조키를 설정한다. 참조할 모델의 PK를 자동으로 참조하며, on_delete=models.CASCADE를 통해 pk 삭제시 자동으로 삭제되게 만들 수 있다.

2. `models.ManyToManyField(Actor, blank=True)`
   여러 개의 필드가 여러 개의 필드를 상호참조할 수 있음을 의미한다. 한 명의 유저가 여러 유저에게 친구를 추가하는 등. blank=True를 통해 해당 필드에 비어있는 값을 넣을 수 있으며, null=True를 통해 해당 필드가 null 값으로 어떠한 경우에도 비어있을 수 있다.

3. `models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)`
   OneToOneField는 특정 필드를 1:1로 참고함을 의미한다. primary_key=True를 이용해 특정 필드의 pk를 나의 pk로 지정할 수 있다. 가령 유저모델을 참조하여 해당 유저의 프로필 정보를 저장하는 것.

### 마이그레이션
모델을 작성 후 `python manage.py makemigrations`, `python manage.py migrate` 를 진행한다.

### 어드민 등록
```py
#myapp/admin.py
from django.contrib import admin

# Register your models here.
from .models import Actor, Movie, Review

admin.site.register(Actor)
admin.site.register(Movie)
admin.site.register(Review)
```
admin.site.regester(모델명)을 통해 모델을 어드민 사이트에 등록하여 확인할 수 있다.

### json파일 로드하기
`python manage.py loaddata articles.json`
loaddata 명령어로 데이터를 등록할 수 있다. 이때 json파일의 주소에 유의한다.

## 시리얼라이저 설정
각 모델명을 이용해서 모델 시리얼라이저 설정
```py
#myapp/serializers.py
from rest_framework import serializers
from .models import Actor, Movie, Review

class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = "__all__"

#특정 필드 하나만 가져올 때에는 쉼표를 넣어준다.
class MovieNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ("title",)

#many=True 속성으로 json파일의 출력 양식을 변경할 수 있다.
#read_only=True 속성으로 일방향 참조를 할 수 있다.
class ReviewSerializer(serializers.ModelSerializer):
    movie = MovieNameSerializer(many=True, read_only=True)

    class Meta:
        model = Review
        # fields = ["id", "movie", "title", "content"]
        fields = "__all__"
```


### 모델에서 보여지는 이름 (__str__ 메서드)
무비 모델을 아래와 같이 수정하여 보여지는 이름을 수정할 수 있다.

```py
#myapp/models.py
class Movie(models.Model):
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.DateTimeField(default=timezone.now)
    poster_path = models.TextField()
    actors = models.ManyToManyField(Actor, blank=True)
    def __str__(self):
        return self.title
```

## view와 generics
`from rest_framework import generics`   
generics에는 다음의 종류가 있다.  
CreateAPIView (생성)  
ListAPIView (전체조회)  
RetrieveAPIView (1개 조회)  
DestroyAPIView (1개 삭제)  
UpdateAPIView (1개 수정)  
ListCreateAPIView (전체 + 1개 생성)  
RetrieveUpdateAPIView (1개 조회 + 수정)   
RetrieveDestroyAPIView (1개 조회 + 삭제)  
RetrieveUpdateDestroyAPIView (1개 조회 + 수정 + 삭제)  

인수로 queryset, serializer_calss를 넘겨주며, 1개를 CRUD할 때에는 lookup_field를 보내준다.  
```py
class Actor_list(generics.ListAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer

class Actor_detail(generics.RetrieveAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer
    lookup_field = "id"
```

## view와 `@api_view(["POST"])`

```py
from rest_framework.decorators import api_view
@api_view(["POST"])
def create_review(request, pk):
    # movie = get_object_or_404(Movie, id=pk)
    movie = Movie.objects.get(pk=pk)
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
```

## urls 등록하기
pjt의 urls는 아래와 같이 include("앱 이름.urls")를 진행한다.
```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls), 
    path("api/v1/", include("movies.urls"))
]
```

아래는 app의 url 예시이다.
클래스를 등록할 때에는 `클래스명.as_view()`로 입력한다.
router를 사용하는 경우 `router.register("패턴", 클래스명)`을 입력할 수 있다.
```py
from django.urls import path
from .views import *

from rest_framework import routers

router = routers.SimpleRouter()
router.register("reviews", ReviewViewSet)
urlpatterns = router.urls + [
    path("actors/", Actor_list.as_view()),
    path("actors/<int:id>/", Actor_detail.as_view()),
    path("movies/", Movie_list.as_view()),
    path("movies/<int:id>/", Movie_detail.as_view()),
    path("movies/<int:pk>/reviews/", create_review),
]
```