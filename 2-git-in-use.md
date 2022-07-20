본 문서는 git을 사용법을 간략하게 요약해두었다.

- [Comman Line Interface의 개념](#comman-line-interface----)
  * [주요 커맨드](#------)
- [GIT](#git)
  * [Git의 주요 명령어](#git--------)
- [GitHub](#github)
  * [GitHub 주요 명령어](#github-------)
    + [충돌 발생 시 대처법](#-----------)
    + [GitHub 실전 예시](#github------)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Comman Line Interface의 개념

커맨드 라인 인터페이스는 GUI와 달리 커맨드를 입력하면서 사용하는 인터페이스이다. 윈도우에서는 git bash, 맥에서는 terminal을 사용한다. 맥에는 기본적으로 git이 설치되어 있다. CLI를 이용하기 위해서는 경로와 파일명에 공백이나 한글이 없는 것이 좋다.

### 주요 커맨드

ls : 해당 폴더에 있는 폴더와 자료를 확인한다.

    ls -1 : 숨겨진 폴더와 자료도 표시한다.

cd 폴더명 : 해당 폴더로 이동한다

mkdir 폴더명 : 새로운 폴더를 만든다.

touch 파일명.txt : 새로운 텍스트 파일을 만든다.

cd .. : 상위 폴더로 이동한다.

. : 현재 폴더를 의미한다.

open 파일명 : 해당 파일을 실행한다. (윈도우에서는 start 파일명)

rm 파일명 : 해당 파일을 삭제한다.

## GIT

git은 버전관리 프로그램이다. 버전의 변경사항을 지속적으로 관리하게 된다. GitHub 등을 이용하여 여러개의 분산된 데이터베이스에서 push와 pull을 이용해 분산적인 버전관리가 가능하다.



### Git의 주요 명령어

git config --global user.name 사용자명 : 사용자명을 설정한다. 주로 GitHub의 닉네임을 사용한다.

git config --global user.email 이메일@주소 : 이메일을 설정한다. GitHub에 등록된 아이디를 사용해야 커밋내역 잔디심기가 가능해진다.



git init : 해당 폴더를 워킹디렉토리로 만든다.

git status : 해당 디렉토리의 상태를 확인한다.

    git status --oneline : 해당 디렉토리의 상태를 간략히 확인한다.

    git status --oneline --graph : 해당 디렉토리의 상태와 함께 그래프를 표시한다. (충돌 발생 시 유용)

git add . : 해당 디렉토리의 파일을 모두 스테이징 아레아로 전달한다.

git commit -m '커밋메시지' : 커밋을 진행한다. 커밋메시지는 구체적으로 남기는 것이 좋다.

    git commit : 커밋 iv 창을 띄운다. i 를 통해 수정모드로 접근할 수 있으며 esc를 통해 수정모드를 종료할 수 있다. ':wq'를 통해 커밋을 종료한다.

git log : 해당 디렉토리의 커밋 내역을 확인한다.



## GitHub

GitHub는 git의 디렉토리를 온라인에 저장(push)하고 컴퓨터에 불러오기(pull)할 수 있는 git의 서버이다. 컴퓨터의 디렉토리를 최초로 GitHub로 푸쉬할 때 사용자명(주로 GitHub의 이메일)과 비밀번호를 필요로 하는데, 비밀번호로 [엑세스 토큰](https://hyeo-noo.tistory.com/184)을 사용하자.

### GitHub 주요 명령어

git push : 커밋된 내용을 GitHub에 저장한다.

    git push -u origin master : 최초로 깃허브의 푸쉬를 시작할때 사용한다. origin을 GitHub의 마스터(혹은 메인)으로 푸쉬하며, --set-upstream 옵션(-u)로 이를 기본값으로 설정한다. 이후에는 git push를 사용할 수 있다.

git clone https://github.com/레포지토리주소 : 해당 레포지토리를 현재 디렉토리의 하위로 클론한다.

    git clone URL . : 마지막에 .을 붙이면 하위 디렉토리가 아닌 현재 디렉토리를 그대로 활용한다.

    git clone URL 폴더명 : 마지막에 폴더명을 따로 지정하여 하위 디렉토리의 폴더명을 변경할 수 있다.

git pull : 레포지토리의 마지막 버전을 현재 디렉토리에 적용한다. 작업 전에 항상 git pull을 통해 업데이트하자.



#### 충돌 발생 시 대처법

git push를 실행했을 때 오류가 발생하곤 한다.

**삼각오류 발생 시(즉 서로 다른 컴퓨터에서 서로 다른 파일을 만들었을 시)**

    git pull을 진행하면 자동으로 병합되며, commit 후 git status --oneline --graph로 병합된 내용을 확인할 수 있다.



**편집충돌 발생 시(즉 서로 다른 컴퓨터에서 하나의 파일을 수정했을 시)**

        git pull을 진행하면 충돌된 내용이 파일 내에 표기된다. 이를 VSCode로 실행하면 병합 방식을 지정해 병합할 수 있다. 병합이 끝나면 commit을 하자.



#### GitHub 실전 예시

1) '터미널'을 실행한다.

2) `ls` - 폴더목록 확인

3) `cd Documents` - '문서' 폴더로 이동 (대소문자 구분, 입력 중 Tab 사용시 자동완성됨)

4) `mkdir todayILearnt` - TIL 폴더 생성

5) `cd todayILearnt` - TIL 폴더로 이동

6) `git init` - TIL 폴더를 git으로 관리 시작

7) `touch .gitignore` - git으로 관리하지 않을 내용 작성. add 전에 할 것! ([해당 사이트 참조](https://www.toptal.com/developers/gitignore))

8) `touch README.md` - 마크다운 문서를 생성

9) `git add .` - 수정된 내역을 저장

10) `git commit -m '수정한 내용'` - 수정한 내용을 확정

11) `git push` - 수정한 내용을 깃허브에 업로드



이후 다른 컴퓨터에서 클론을 만들자.

1. `cd Documents`

2. `mkdir cloned_TIR`

3. `git clone 주소 .`



클론된 컴퓨터는 git pull로 최신 내용을 불러올 수 있다. 수정작업을 하기 전에 pull을 하면 충돌을 방지할 수 있다.

1. `cd Documents`

2. `mkdir cloned_TIR`

3. `git pull`










