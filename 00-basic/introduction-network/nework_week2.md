# 컴퓨터 네트워크 (한양대학교 이석복 교수님)


## 5강 전송계층 1

### RDT3.0 모델의 효율문제
전체 시간 중에 네트웍을 사용하는 시간이 클 수록 네트워크의 효율이 좋다.  

![ㅁㄴㅇ](,,/../../../src/network3-39.PNG)
패킷을 하나 전송하고 하나 피드백 하나를 받는 모델의 경우, 패킷을 보내고 기다리는 시간이 길다. 
U(Utilization)을 구해보면, (패킷의 길이/패킷을 전송하는데 걸리는 속도) / 패킷을 하나 보내고 나서 대기하는 속도+(패킷의 길이/패킷을 전송하는데 걸리는 속도)  = 0.027 수준.  
  
### 네트워크 효율 개선방안 : 파이프라인 전송
패킷을 한 번에 여러개 보내면 Utilization이 증가한다. 

**파이프 라인 전송의 접근법 : GBn, SR**
- 파이프라인 두가지 일반적인 접근방법 - go-Back-N, selective repeat.

### go-Back-N 방식
- 한 번에 많은 패킷을 발송한다.   
- 패킷의 갯수를 정하는 기준 - window size.  
가령 winodow size가 4라면 0,1,2,3를 보낸다.    
ACK는 cumulative ACK이다. ACK #11은 11번까지 받았다는 의미.  
- Sender는 각 패킷에 대한 타이머를 가진다.  
1번 패킷이 Time Out되면 1, 2, 3을 모두 재전송한다.  

**GBN 모델에서의 Sender의 행동 FSM**
![ㅁㄴㅇ](,,/../../../src/network3-44.PNG)  
- Window Size 설정,
- **전송**: Window Size만큼 #base, #base+1, ... , #base+windowSize-1 만큼 전송, 타이머 작동. 
- **추가전송**: 전송이 끝나면 #base+windowSize부터 추가로 전송, 타이머 작동 <br>
- **Time Out** : #base를 Time Out이 발생한 시퀀스 번호로 하여 windowSize만큼 재전송  

**GBN 모델에서의 RECEIVER의 행동 FSM**
RECEIVER의 행동은 상대적으로 단순하다.   

- ACK#i에 대해, 
1) `도착한 패킷# == i` => `i++`
2) `도착한 패킷# != i` => 패킷 폐기

ACK #0 이면 #1패킷을 기다리고, 먼저 도착한 #2, #3은 버린다.   

**GBN 모델 예시**
![ㅁㄴㅇ](,,/../../../src/network3-45.PNG)

- Time Out이 발생한 #N로 window를 되돌려서 go-back-N
- window 안에 있는 애들은 아직 cumulative ACK를 받지 않았기 때문에 재전송을 대비해 buffer에 저장해야 한다.  

**장점**  
구조가 단순  
Reciver는 데이터를 폐기하기 때문에 버퍼가 필요 없음.  

**문제점**  
현실에서는 windowSize가 거대하다.  
손상/분실된 프레임 이후의 프레임을 모두 재전송하는 GBn ARQ는 windowSize만큼의 패킷 재전송이 빈번하게 일어난다.  


### Sective Repeat
문제가 발생한 패킷만 재전송한다.   
이를 위해서 버퍼가 필요하며, 각 패킷에 타이머가 있다.   
Receiver는 받은 패킷에 대한 ACK를 전송한다.    


**SR 모델 예시**
![ㅁㄴㅇ](,,/../../../src/network3-49.PNG)
패킷 2번이 Loss 나는 경우, 2~5에서 대기.   
0~5번 모두 ACK를 받고, 2번 패킷만 TimeOut 나는 경우,   
2번 재전송하고, 6,7,8,9 전송  

**장점**  
네트워크 부하가 적음  

**단점**
Receiver의 구조가 복잡해짐.  


**SR 모델의 딜레마 : Sequence 넘버를 몇으로 설정할 것인가?**  
RDT 3.0에서는 시퀀스 넘버가 0~1이었다.  
SR모델은 버퍼를 사용하기 때문에 (windowSize+1)보다 큰 시퀀스 넘버가 필요하다.   

얼마가 필요한가? 대~충..두 배 언저리?  

# 6강 전송계층 2
## TCP 개론
- Point-to-point : 1 sender - 1 receiver 소켓 한 쌍 끼리의 통신.
- reliable, in-order byte stream : 순서대로, 유실 없이. / message boundary 방식이 아닌 byte단위의 순서대로.
- pipelined : TCP congestion and flow control set window size
- send & receive buffers : 각 소켓은 버퍼를 가진다. (윈도우 크기만큼의 버퍼 - 센더는 재전송을 위해, 리시버는 SR을 위해 - 즉 각 소켓은 sender이자 receiver, 전송과 수신을 위한 버퍼를 가진다.)
- full duplex data : 양방향 통신(각 소켓은 센더이자 리시버이다.) 
- connection-oriented : 데이터교환 전 handshaking(exchange of control messages)를 통한 연결
- flow controlled : sender는 receiver의 버퍼 능력에 맞게 보낸다.
- congestion controlled: 네트워크의 상황에 맞는 영량 만큼.

### TCP 세그먼트 구조

**레이어 별 전송 단위**  
APP - 메시지  
TCP - 세그먼트 (헤더와 데이터(메시지를 포함한))  
네트워크 레이어 - 패킷 (헤더와 데이터(세크먼트를 포함한))  
링크 레이어 - 프레임 (헤더와 데이터(패킷을 포함한))  

전송에서 중요한 부분은 헤더이다.  

**TCP 세그먼트 헤더**
![ㅁㄴㅇ](,,/../../../src/network3-53.PNG)  
포트 번호 : 각 각 16비트  
(한 컴퓨터에서 2의 16승만큼(6만5천...)의 응용프로그램을 동시에 작동시킬 수 있다.)  
시퀀스 넘버 :    
ACK 넘버 :    
checksum : 에러 감지    
Receive Window : 버퍼에 남아 있는 공간을 알려주기 위한.   
등등..

### TCP의 동작 원리
![ㅁㄴㅇ](,,/../../../src/network3-54.PNG)  
에코서버(클라이언트의 요청에 따라 클라이언트의 요청을 리스폰스로 에코하는 서버)  
Seq# : 각 세그먼트의 데이터(앱의 메시지) 별 가장 앞에 있는 바이트의 번호.(메시지를 10바이트씩 쪼갰다면 0, 10, 20순으로 Seq# 진행)   
cumulative ACKs : 현재 기다리고 있는 메시지의 번호 (ACK#10 = 10번 못 받았다.(9번까지 받았음))    
(위 모델은 자신의 데이터와 함께 자신의 ACK를 보내는 상황.
자신이 보낼 데이터가 없이 ACK만 해야하는 경우는 추후에 다룸. (Timing))

### 타임아웃의 설정
**Round Trip Time과 타임아웃 관계**
- RTT가 각 세그먼트별로 다르다. (각 세그먼트별로 경로가 다르고, 큐잉 딜레이가 변화하기 때문에)
- EstimatedRTT = (1-a) * EstimatedRTT + a * SampleRTT
a = 0.125  
현재의 네트워크 값을 일부 반영하여 보정하는 RTT  
타임 아웃의 기준값이 된다.  
**해당 기준값에 일부 마진을 더한다.**  
TimeoutInterval = EstimatedRTT + 4 * DevRTT
이때 DevRTT 는 "Safety Margin"이다. 
DevRTT = (1-b) * DevRTT + b*(SampleRTT - EstimatedRTT)  
b = 0.25  

### TCP Realiable Data Transfer
- 파이프 라인 방식
- Cumulative Acks
- 하나의 retransmission Timer
(GBn과 마찬가지로 타임아웃은 하나지만 SR과 마찬가지로 누락된 것만 재전송.)

**TCP 재전송 시나리오**
63페이지
![ㅁㄴㅇ](,,/../../../src/network3-63.PNG) 
![ㅁㄴㅇ](,,/../../../src/network3-64.PNG) 
세번째 시나리오가 ACK를 늦게 보내도 되는 이유. **TCP에서는 Delayed ACK를 권장한다.**   

한편, Timer 시간이 길다. Timer가 초과되기 전에 유실된 번호를 알 수 있다. 0, 10, 20, 30, 40, 50, 60, 70, 80, 90 세그먼트를 보냈는데 Timer가 expired되기 전에 AKC10, ACK10이 계속해서 들어온다면 10번 패킷이 유실되었을 것이라 예상할 수 있다.  
**TCP에서는 중복된 ACK이 3개 연속 들어온다면(즉, 4번째 ack10을 받을 때에) 재전송을 권고하고 있다.(fast retransmit)**





