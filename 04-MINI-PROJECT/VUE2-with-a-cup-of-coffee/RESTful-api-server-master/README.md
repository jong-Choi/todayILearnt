Board example Restful API 샘플
==================================
> node v8.12.0 버전을 사용해주세요! 최신 노드제이에스 버전을 사용할 경우 프로젝트가 구동되지않습니다!

CanDoVueJS(가제)의 클라이언트 어플리케이션 제작을 위해 만들어진 Restful API 서버 입니다.

시작하기
---------------

1. 원하는 작업 디렉토리로 이동 후 프로젝트를 클론받으세요
```sh
$ cd my-workspace
$ git clone https://github.com/CanDoVueJS/RESTful-api-server.git
```

2. 클론받은 프로젝트의 디렉토리로 이동하세요
```sh
cd RESTful-api-server
```

3. 프로젝트에서 사용할 패키지를 설치하세요
```sh
npm install
# 또는
npm i
```

4. Sequelize CLI를 전역으로 설치하세요
```sh
npm install -g sequelize-cli
```

4. 서버를 실행하세요
```sh
PORT=8000 npm run dev
```


맥에서 node-pre-gyp 설치가 안되는 이슈가 있음.
`npm --build-from-source install bcrypt` 를 통해 우회할 것 (해당 모듈의 설치 서버가 닫힌 경우 등에서 발생할 수 있는 오류)
I managed to solve this by running the command:
sudo apt-get install -y build-essential python and then yarn add bcrypt.

You can find the instructions here:
https://github.com/kelektiv/node.bcrypt.js/wiki/Installation-Instructions
https://github.com/kelektiv/node.bcrypt.js