https://hcn1519.github.io/articles/2018-03/networkbasic1
클로바 노트 써서 녹취록 해 

# 컴퓨터 네트워크 (한양대학교 이석복 교수님)


## 1강 컴퓨터 네트워크 소개
### 1- 인터넷의 구성 요소
최초의 인터넷은 실험실에서 사용된 4개의 컴퓨터이다. 하지만 이제는 수많은 컴퓨터가 연결되어 있다.

![cheswick](../../src/isp-ss.gif)
  
**인터넷의 구성 요소**  
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
'연결'이라는 과정 없이 사용되는 서비스를 비연결 서비스라고 하며, UDP(User Datagram Protocal)라는 프로토콜이 사용된다.

**UDP의 특징**  
- conntionless
- unreliable data transfer
- no flow control
- no congestion control
  

**TCP와 UDP의 비교**  
TCP를 사용하는 App : HTTP(Web), FTP(file transfer), Telnet(remote login), SMTP(email) / 인터넷의 대부분  
UDP를 사용하는 APP : Streaming media, Teleconferencing, DNS, Internet telephony  

인터넷은 TCP라고 볼 수 있다.  HTTP 등 대부분의 웹과 파일 전송 시스템, 이메일 등에서 사용된다.   

UDP는 아무런 기능이 없어 보이지만, '커넥션'이 없다라는 점에서 Sender가 전송속도를 제한하지 않아도 된다는 장점이 있다.(물론 전부 유실된다.) UDP가 실용적으로 사용되는 분야는 인터넷 전화와 스트리밍이다. 이러한 매체는 패킷이 유실되어도 사람이 쉽게 감지하지 못한다.    

한편 TCP 방식은 '비용'이 든다. 여기서 비용은 컴퓨팅 리소스, 네트워크 리소스를 의미한다.  

**프로토콜의 이해**  
전화를 한다고 생각해보자. '여보세요?' '여보세요?' 이처럼 서로 인사말을 주고 받는다.    
외국어로 하면 못알아 듣는다. 인사 안하고 용건만 바로 말해도 받아들이기 힘들다.   

발신자: 여보세요?  
수신자: 여보세요??
발신자: 내일 무슨 요일이지?? 
수신자: 내일은 목요일!  


데이터를 주고 받을 때에도 이와 같은 암묵적인 약속이 존재한다.  
  
All communication in internet - coordinted by protocols    
1) Client: TCP Conntion request  
2) Server: TCP Conntion response  
3) Cliend: Get https://api.themoviedb.org/3/credit/기생충?/  
4) Server: <file>  
  
통신을 위해서는 프로토콜이 서로 일치해야 한다. UDP는 UPD끼리, TCP는 TCP끼리 연결이 된다. 마찬가지로 HTTP도 데이터를 주고 받는 방식이다. 결국 '프로토콜'은 '방식'이라고 정의할 수 있다.  

**Circuit switching과 Packet-switching**
라우터: 데이터 패킷을 전송하는 네트워크 장치  
  
데이터를 주고 받을 때 '라우터'를 거친다. 그렇다면 '라우터'는 어떻게 데이터를 주고 받는가?  

**서킷 스위칭**  
```
link bandwidth, switch capacity  
dedicated resources: no sharing  
circuit-like (guaranteed) performance  
call setup required  
링크 대역폭, 스위치 용량
전용 리소스: 공유 안 함
회로 수준 (보장된) 성능
통화 설정 필요
```
특정 사용자와 특정 사용자 사이의 망을 지정하여 연결하는 것. 이러한 망을 '회로(서킷)'이라 볼 수 있다. 초기의 유선 전화망이 이러한 회로 방식이었으며, 회로를 지정하고 연결해주는 call setup 과정이 사전에 발생한다.  

**패킷 스위칭**  
고정된 패턴이 없음.  
패킷을 전달받으면 수요에 따라 도착지로 패킷을 전달한다.  
(statistical multiplexing - 통계적으로 다중화)  

**인터넷과 패킷 스위칭**  
1Mb/s의 링크가 필요한 유저가 있다고 가정하자.  
10Mbps를 수용할 수 있는 라우터는   
서킷스위칭으로 10명을 수용할 수 있다.  
패킷스위칭으로는? 사용자의 통계적인 사용 패턴에 따라 무한히 많은 사용자를 수용할 수 있다.  
  
인터넷은 데이터를 요청하고, 데이터를 받는 과정이 끝나면, 그 이후엔 연결이 필요하지 않다. 때문에 패킷 스위칭을 이용해 라우터를 효율적으로 사용할 수 있다.  
반면 서킷 스위칭을 사용하는 유선 전화라면 라우터를 통해 수용할 수 있는 인원은 제한적일 것이다.  

**라우터와 패킷 스위칭**
패킷이 발송되면 패킷이 라우터 내부까지 들어오고 처리된다. Nodal Processing  
다음 라우터로 발송되기 전 패킷 내부에 있는 임시 버퍼, 즉 Queue에서 대기한다. Queueing  
대기를 라우터에서 발송된다. Transmission  
다음 라우터까지 Link를 통해 이동한다. Propagation(전파, 번식, 퍼짐)  

**패킷 딜레이의 4가지 원인**
1. Nodal Processing: 라우터(각 노드)에서 작업을 처리하는 시간을 의미한다.  bit error(비트 오류 - 비트가 일치하지 않는 것)를 체크하는 시간, 목적지에 따라 Output link를 결정하는 시간.
2. **Queueing**: 각 노드의 작업Queue에서 대기하면서 걸리는 시간.
3. Transmission Delay: Queue를 끝내고 발송을 할 때에, 패킷의 첫번째 비트에서 마지막 비트까지 통과하는 시간. (패킷 길이bits / 링크 밴드위스bps). 링크의 밴드위스를 늘리면 해결되는 딜레이이다. (광케이블을 다 깔아버리면 된다.)  
4. Propagation: 패킷의 마지막 비트까지 Link에 올라온 후, 패킷의 마지막 비트까지 도착지 Router로 전달되는 시간. Link의 전송속도는 빛의 속도에 가깝게 고정되므로 링크의 물리적 길이에 비례한다.  

나머지 딜레이는 라우터의 성능에 의해서 결정되거나(Nodal Processing Delay) 물리적인 법칙에 의해 결정된다(Transmission Delay, Propagation Delay).  
  
네트워크 딜레이의 핵심이 되는 부분은 Queueing Delay이다.  
패킷의 발생은 불규칙적이다. 또한 Queue의 수용량을 넘어서는 경우 해당 패킷은 Queue에 수용하지 못하고 유실된다.  
(TCP는 유실된 패킷을 Sender측에서 재전송하는 방식으로 Reliability를 유지한다.)  


**수업 요약**
Router는 Dumbcore이다. 즉 아무런 기능이 없다.(패킷을 전달하는 데에만 집중한다.)
네트워크 엣지의 Server와 Client에서 기능을 구현한다. 네트워크와 인터넷에 대해 이해한다는 것은 네트워크 엣지에서의 기능구현을 통해 Router를 거쳐 패킷을 주고 받는 것을 이해하는 것이다.  


## 2강 컴퓨터 네트워크 소개
### 1- 인터넷의 구성 요소



