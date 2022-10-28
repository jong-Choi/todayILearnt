본 문서는 git을 사용법을 간략하게 요약해두었다.

- [Comman Line Interface의 개념](#comman-line-interface----)
  - [주요 커맨드](#------)
- [GIT](#git)
  - [Git의 주요 명령어](#git--------)
- [GitHub](#github)
  - [GitHub 주요 명령어](#github-------)
    - [충돌 발생 시 대처법](#-----------)
    - [GitHub 실전 예시](#github------)

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

1. '터미널'을 실행한다.

2. `ls` - 폴더목록 확인

3. `cd Documents` - '문서' 폴더로 이동 (대소문자 구분, 입력 중 Tab 사용시 자동완성됨)

4. `mkdir todayILearnt` - TIL 폴더 생성

5. `cd todayILearnt` - TIL 폴더로 이동

6. `git init` - TIL 폴더를 git으로 관리 시작

7. `touch .gitignore` - git으로 관리하지 않을 내용 작성. add 전에 할 것! ([해당 사이트 참조](https://www.toptal.com/developers/gitignore))

8. `touch README.md` - 마크다운 문서를 생성

9. `git add .` - 수정된 내역을 저장

10. `git commit -m '수정한 내용'` - 수정한 내용을 확정

11. `git push` - 수정한 내용을 깃허브에 업로드

이후 다른 컴퓨터에서 클론을 만들자.

1. `cd Documents`

2. `mkdir cloned_TIR`

3. `git clone 주소 .`

클론된 컴퓨터는 git pull로 최신 내용을 불러올 수 있다. 수정작업을 하기 전에 pull을 하면 충돌을 방지할 수 있다.

1. `cd Documents`

2. `mkdir cloned_TIR`

3. `git pull`

4. `git restore .`  
   워킹 디렉토리의 기존 수정상태를 모두 지우고 마지막 커밋으로 돌아감.

5. `git restore --staged b.py`
   스테이징 area에 add된 파일을 워킹 디렉토리로 내림.

6. `git rm --cached a.py`
   a.py를 git에서 빼버려. 깃 에서 관리하지 마.
   (.gitignore에 추가한 후에도 git rm --cached 파일명을 통해 untracked시키면 사라짐)
   (커밋이 없을 때에 사용할 수 있는 명령어)

7. `git commit -- ammend`
   마지막 커밋 수정하기
   해당 vim 에디터에서 'i'를 누르면 insert모드가 됨.

   ```
   add .gitignore

   수정내용 대충 남기기
   ```

   `esc` 수정화면 나가기
   `:wq` 저장하고 나가기
   `:q!` 저장 안하고 강제로 나가기

8. `git reset 옵션 커밋Id`
   --soft: 커밋 취소, 하지만 스테이징 상태로 유지.
   --mixed: 기본값. 커밋 취소 및 스테이징 취소, 내 로컬 변경 상태로 유지.
   --hard: 커밋 취소 및 스테이징 취소 및 로컬 변경 상태 취소

   git reset하기 전에 `git reflog`로 커밋 아이디 확인

9. `git revert [COMMIT_ID]`  
   특정 커밋 내용을 취소하면서 취소내용 남기기  
   `git revert --no-edit f665b8f`

   **특히 가운데에 있는** 커밋들을 취소할 때에 유용함.  
   (단, 리버트하려는 커밋이 이후의 커밋 내용에도 영향을 미친다면 리버트가 불가능함)  
   `git revert --abort` : 리버트 취소하기

   리버트를 리버트할 수도 있음!

   여러개의 커밋들을 리버트 할 때에는 시작ID..끝ID 로 지정 가능
   `git revert --no-edit f665..b38d`

#### 브랜치

커다란 브랜치는 여러가지가 있다.

1. 마스터
2. 핫픽스
3. 릴리즈 브랜치
4. 디벨롭
5. feature branches

그래서 develop 브랜치에서 마음대로 작성하고, 마스터에는 신중하게 머지할 것.

github-flow
git-flow와 달리 github-flow는 마스터로 푸쉬하면 자동으로 배포가 이루어지도록 함. pull

새로운 브랜치 만들기
`git branch new`

브랜치 목록 확인하기
`git branch`
`git branch -a` 모두 보기

브랜치 전환하기
`git switch new`
`git switch -c new` 새로운 브랜치를 만들면서 이동
`git switch -c new 커밋번호` 특정 커밋번호를 새로운 브랜치로 만들면서 이동

`git add .`
`git commit -m`

새로운 커밋은 new라는 브랜치에서만 사용되고 있고, master브랜치에서는 사용되지 않음.

`git switch master`를 해보면 new라는 브랜치에서 쓰던 파일은 사라졌다.

vs코드의 브런치 메뉴에서 (ctrl+shift+g) 이러한 커밋을 만들고 병합이 가능하다.

`git log --all`을 통해 다른 브랜치도 확인할 수 있다.
`git log --oneline --all --graph`
이러한 브랜치를 확인하려면 'git fork' 등의 소프트웨어를 사용하면 좋다.

`git switch master`
`git merge new`
git merge new 명령어를 통해 new 브랜치를 master에 병합했다.
`git branch -d new`
위 명령어를 통해 쓸모없는 브랜치를 지울 수 있다.
독립적인 유저, 아티클 등을 서로 분리해서 브랜치를 나누면 좋다.
머지가 안된 브랜치를 지울 때에는 `git branch -D new`

충돌 해결 법 : merge -> 충돌 -> 수정 -> add, commit

1.  vs code에서 충돌이 일어난 파일로 간다. (vs code파일 트리에 느낌표가 표시됨.)
2.  vs code에서 해당 파일을 저장한다.
3.  git add, commit를 진행한다.
    수정하지 않고 vs Code에서 저장만 해도 가능하다.

포크 : 오픈소스된 코드를 브랜치로 뽑아서 수정할 수 있음. 원작자가 이를 반영해줄 수 있음.
https://eunhee-programming.tistory.com/159

Shared repository model : 원격 저장소 소유권이 있는 경우.

https://github.com/edujun/pr-prac 에서 shared repo를 연습해보자.

1. 클론 받기
2. 브랜치 만들기 `git switch -c jony`
   텍스트 파일 아무거나 만들고,
   add, commit 하고
3. 푸쉬하기 `git push origin jony`
4. 푸쉬한 상태로 https://github.com/edujun/pr-prac 다시 접속하면
5. 초록색 pull request 가 뜬다.
6. 해당 버튼을 클릭한 후 커밋명, 코멘트 남기고
7. create pull request 버튼 누르면
8. confirm을 받아서 머지가 되거나, 혹은 마스터 브랜치와 충돌이 없으면 커밋이 이루어진다.
9. 충돌체그 끝나면 merge pull request 누르고, cornfirm merge 가능.
   (충돌이 일어나는 경우 github내에서 확인 후
   `>>>>>어떤 브런치`

`<<<<<<헤드` 같은 것들 저장할 수 있음. ) 10. 머지 되면 딜리트 브랜치 가능

`git stash` - 어떤 작업을 임시로 저장을 해두기. 커밋을 하지 않아서 git restore에 영향을 주지 않음.
`git stash pop`으로 git stash 결과를 빼낼 수 있음.
(댓글에 lgtm 달리면 look good to me 나쁘지 않네 라는 뜻. )
