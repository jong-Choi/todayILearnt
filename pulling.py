## 주어진 정보 
'''
공의 좌표 주어짐

흰공
balls[0][0]: 흰 공의 X 좌표
balls[0][1]: 흰 공의 Y 좌표

balls[1] : 1번공
balls[2] : 2번공
balls[3] : 3번공
balls[4] : 4번공
balls[5] : 8번공


angle(float) : 0~360 샷을 할 방향을 지정하는 각도
power(float) : 1~100 샷의 세기

'''

### 흰 공의 목표 위치 구하기
'''
구멍 위치, 목적구 위치, 
해당 각도 목적구 위치 + 목적구의 지름 + 흰공의 지름
'''

### 흰 공의 목표 각도 구하기
'''
흰공 - 목표위치
x좌표, y좌표
atan 쓰기
'''

### 경로 사이에 있는 공 구하기
'''
경로로부터 지름 +-만큼 탐색하기...
'''
