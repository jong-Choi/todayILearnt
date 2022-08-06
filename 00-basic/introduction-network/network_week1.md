https://hcn1519.github.io/articles/2018-03/networkbasic1
클로바 노트 써서 녹취록 해 

# 컴퓨터 네트워크 (한양대학교 이석복 교수님)


## 1강 컴퓨터 네트워크 소개
### 1- 인터넷의 구성 요소
최초의 인터넷은 실험실에서 사용된 4개의 컴퓨터이다. 하지만 이제는 수많은 컴퓨터가 연결되어 있다.

![cheswick](../../src/isp-ss.gif)

**인터넷의 구성 요소  **
네트워크 엣지 : Applications and hosts. 위 그림의 가장자리에 위치하는 노드와 링크들, 랩탑, 데스크탑, 어플리케이션, 그리고 서버 등이다.  
네트워크 코어 : 라우터. 네트워크들을 위한 네트워크. 위 그림의 가운데에는 라우터들이 위치한다.   

**네트워크 엣지**
클라이언트는 자기가 원할 때 서버에 연결해서 정보를 가져오는 것. 웹 브라우저가 대표적인 클라이언트.  
서버는 24시간 작동하며 클라이언트의 요청을 받아준다.  
그 밖에 p2p 모델이 있다.  

**네트워크 엣지와 연결 지향 서비스(connection-oriented service)**  
클라이언트/서버 모델은 둘 간의 연결을 통해 데이터를 주고 받는 것을 의미한다.  
연결 : 데이터를 주고 받기 위해 준비하는 것. 데이터를 주고 받는 과정에서는 '요청request', '응답respond',' 커뮤니케이팅 주체 간의 네트워크 상태 정의set up state' 등이 발생한다.  
이를 위해 사용되는 프로토콜이 TCP(Transmission Control Protocol)이다. 

**TCP가 제공하는 서비스TCP service**
- reliable, in-order byte-stream data transfer : 유실되지 않고, 메시지를 발송한 순서를 지키며 도착지 서버로 도달
- flow control : reciver가 받아들일 수 있는 데이터 속도에 맞게금 sender의 발송 속도를 조절하는 것.
- congestion control(혼합 제어) : 회선이 받을 수 있는 만큼, 네트워크가 받을 수 있는 만큼 senders의 속도(sending rate)들을 Congested 상황에서 조절하는 것. 

**비연결 서비스(connetionless service)**




데이터 통신 프로토콜
TCP
UDP

TCP의 특징

UDP의 특징

네트워크 코어
패킷 스위칭
서킷 스위칭

cheswick.com/map/index.html