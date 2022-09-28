### 장고를 배우는 목표

1. 장고는 빠르게 개발할 수 있으며 보안 기능이 훌륭하다.
2. 따라서 이를 통해 리액트 등 FE에 집중할 수 있게 한다.
3. 2의 목표를 달성하기 위해 REST API를 통해 RESPONSE를 반환하는 것에 주목한다.
4. 3의 목표의 세부사항으로는 GET / POST / DB의 처리 / 로그인 인증 / FORM의 유효성 검사 등이다.

# 장고를 실행하기

1. 가상환경 설정
   git bash나 zsh에서 아래와 같이 입력한다.

`cd projects`
`python -m venv venv`

`source venv/Scripts/activate`

맥에서는 
`python3 -m venv ./venv`
`source venv/bin/activate`

진입한 가상환경을 벗어나려면 deactivate를 입력하면 된다.

`deactivate`

새로운 폴더를 해당 가상환겨엥서 실행하ㄱ

2. 장고의 설치

`pip install django==3.2.13`
`pip freeze > requirements.txt`

freeze된 requirements는
`pip install -r requirements.txt`
를 통해 설치한다.

VSCode extensions에서 Django를 설치하면 Django HTML이 인식된다.  
VSCode 설정에서 emmet의 키와 밸류로 django-html, html 을 입력 후 재실행하면 Django HTML에서도 emmet이 실행 가능하다.  
.prettierignore에서 *.html을 추가해주면 prettier의 작동을 중단시킬 수 있다.  

3. 프로젝트 루트 디렉토리 생성
   projects라는 폴더를 생성한다.  
   projects 폴더가 다른 가상환경에 있어도 아래와 같이 가상환경에 연결시킬 수 있다.

`C:\projects> C:\venvs\mysite\Scripts\activate`
`source ../venv/Scripts/activate`

4. 프로젝트 생성
   프로젝트에 사용할 폴더를 하나 만들고 아래와 같이 명령어를 입력하자  
   `C:\projects\mysite> django-admin startproject config .`  
   혹은  
   `C:\projects> django-admin startproject config mysite`

5. 프로젝트 실행
   `C:\projects\mysite>python manage.py runserver`

`C:\projects\mysite>python manage.py runserver 포트번호`

6. 앱 생성
   `C:\projects\mysite> django-admin startapp pybo`

- config url 수정

```py
from django.contrib import admin
from django.urls import path

from pybo import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('pybo/', views.index),
]
```


https://wikidocs.net/71445


`python manage.py makemigrations`
`python manage.py migrate`
