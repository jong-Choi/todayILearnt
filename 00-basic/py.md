# 1 나도코딩 파이썬 기본편
본 강의는 [나도코딩 파이썬 기본편](https://nadocoding.tistory.com/category/%ED%8C%8C%EC%9D%B4%EC%8D%AC%20%EA%B0%95%EC%9D%98/%EA%B8%B0%EB%B3%B8%ED%8E%B8?page=6) 의 내용을 요약한 것이다.    
파이썬 문법에 대한 심적표상 형성을 목표로 한다.  


## 2
### 2-1~3. 숫자, 문자열, boolean 자료형


- Boolean에서 'not'을 쓸 수 있다.
```py
print(not True) # False 출력 
print(not False) # True 출력 
print(not (5 > 10)) # True 출력 
```

### 2-4. 변수
- 변수에 Boolean을 할당할 수 있다.
```py
age = 4
is_adult = age >= 3 # True가 저장됨
```

- 문자열과 문자 자료형 변수를 +로 Concanation 할 수 있다.
```py
print("우리집 " + animal + "의 이름은 연탄이에요")
```

- 숫자 자료형 변수와 Boolean 변수는 concanation이 불가능 하다.
```py
print(name + "는 " + age + "살") #TypeError: can only concatenate str (not "int") to str
print(name + "는 " + str(age) + "살") #해피는 4살
```

- ,를 사용하면 공백이 포함되어 출력된다.
```py
print(name, "는 ", age, "살") #해피 는 4 살
```

### 2-5. 주석
```py
#으로 주석을 처리할 수 있다.

'''
따옴표 3개로 묶어
여러줄을 주석처리 할 수 있다.
'''

# ctrl + / 단축키를 이용하여
# 한 번에 여러줄을 주석처리하거나
# 주석 해제 할 수 있다.
```

### 3-1~2. 연산자
사칙연산
|연산자 | 의미 | 예제
|---|---|---|
| + | 더하기 | 1+1 = 2|
| - | 빼기 | 3 - 2 = 1|
| * | 곱하기 | 3 * 2 = 6|
| / | 나누기 | 3 / 2 = 1.5|
| // | 몫 | 3 // 2 = 1 |
| % | 나머지 | 3 % 2 = 0.5 |
| ** | 제곱 | 3 ** 2 = 9 |

비교연산
|연산자 | 의미 | 예제
|---|---|---|
| >, >=, <, <= | | |
| == | | |
| != | | |

논리 연산
|연산자 | 의미 | 예제
|---|---|---|
| and | | (3 > 0) and (3 > 5) |
| or | | (3 > 0) or (3 > 5) |
| not | | not(1 != 3) |

아래와 같이 연속적인 수식에서도 가능하다.
```py
print(5 > 4 > 3) # (5 > 4) 도 참이며 (4 > 3) 도 참이므로 True
print(5 > 4 > 7) # (5 > 4) 는 참이지만 (4 > 7) 은 거짓이므로 False
```

아래와 같이 계산할 수 있다.
```py
number *= 2 # number = number * 2 와 동일
print(number) # 36

number /= 2 # number = number / 2 와 동일
print(number) # 18

number -= 2 # number = number - 2 와 동일
print(number) # 16

number %= 2 # number = number % 2 와 동일
print(number) # 0
```

### 3-3. 숫자처리함수
```py
print(abs(-5)) # -5 의 절대값 = 5
print(pow(4, 2)) # 4의 2제곱 = 4 * 4 = 16
print(max(5, 12)) # 5 와 12 중 큰 값 = 12
print(min(5, 12)) # 5 와 12 중 작은 값 = 5
print(round(3.14)) # 3.14 의 반올림 = 3
print(round(4.99)) # 4.99 의 반올림 = 5
```

Math 모듈의 함수
```py
import math

print(math.floor(4.99)) # math. 과 함께 사용
print(math.ceil(3.14))
print(math.sqrt(16))
```

```py
from math import *
print(floor(4.99)) # 4.99 의 내림 = 4
print(ceil(3.14)) # 3.14 의 올림 = 4
print(sqrt(16)) # 16 의 제곱근 = 4
```

### 3-4. 랜덤 모듈 함수
```py
from random import * # random 모듈에서 모든 것들을 가져다 쓰겠다는 의미

print(random()) # 0.0 이상 1.0 미만의 임의의 값 생성
print(int(random() * 10)) # 0 이상 10 미만의 임의의 정수 값 생성
print(int(random() * 10) + 1) # 1 이상 10 이하 (11 미만) 의 임의의 정수 값 생성
print(int(random() * 45) + 1) # 1 이상 46 미만의 임의의 정수 값 생성
```
```py
print(randrange(1, 46)) # 1 이상 46 미만의 임의의 정수 값 생성
print(randint(1, 45)) # 1 이상 45 이하(45를 포함해요!!)의 임의의 정수 값 생성
```


### 4-1. 문자열
문자열은 작은 따옴표, 혹은 큰 따옴표로 감싼다.  
3개씩 사용하면 여러줄도 묶을 수 있다.  
```py
sentence3 = """
나는 소년이고,
파이썬은 쉬워요
"""
print(sentence3) # 큰 따옴표 대신 작은 따옴표 3개씩으로 감싸도 돼요
```

### 4-2. 슬라이싱
```py
print("생년월일 : " + jumin[:6]) # 처음부터 6 직전까지 -> jumin[0:6] 과 동일
print("뒤 7자리 : " + jumin[7:]) # 7 부터 끝까지 -> jumin[7:14] 와 동일
print("뒤 7자리 (뒤에부터) : " + jumin[-7:]) # 맨 뒤에서 7번째 위치로부터 끝까지
```

### 4-3. 문자열 메서드
|함수이름|의미|
|---|---|
|lower	|소문자로 변환|
|upper	|대문자로 변환|
|isupper|	대문자인지 확인|
|islower	|소문자인지 확인|
|replace|	문자열 바꾸기|
|index|	찾으려는 문자열의 인덱스 (없으면 에러)|
|find|	찾으려는 문자열의 인덱스 (없으면 -1)|
|count|	문자열이 나온 횟수|

### 4-4. 문자열 포맷팅
이미 선언된 변수라면 f-string을 쓰는 것이 간편하다.
```py
# (파이썬 버전 3.6 부터 가능)

age = 20
color = "빨간"
print(f"나는 {age}살이며, {color}색을 좋아해요.") # 나는 20살이며, 빨간색을 좋아해요.
```

첫 번째 방법으로는 % 가 있습니다. 따옴표로 둘러싸인 문자열 중간에 %d, %c, %s 등을 넣어두고 문자열 뒤에 % 를 적은 후 어떤 값을 적으면 그 값이 문자열 중간에 있는 %d, %c, %s 위치에 들어가게 되지요.

```py
print("문자열 %d 문자열" % 정수)
print("문자열 %c 문자열" % 문자)
print("문자열 %s 문자열" % 문자열)
```

```py
print("나는 %d살입니다." % 20) # 나는 20살입니다
print("나는 %s을 좋아합니다." % "파이썬") # 나는 파이썬을 좋아합니다.
print("Apple 은 %c로 시작해요." % "A") # Apple 은 A로 시작해요.

print("나는 %s살입니다." % 20) # 나는 20살입니다 (%s 로도 정수값 표현 가능)
```

```py
print("나는 %s색과 %s색을 좋아해요." % ("파란", "빨간")) # 나는 파란색과 빨간색을 좋아해요.
```

자료형에 관계없이 .format을 이용할 수 있다.

인덱스를 이용한 .format
```py
print("나는 {}살입니다.".format(20)) # 나는 20살입니다.
print("나는 {}색과 {}색을 좋아해요.".format("파란", "빨간")) # 나는 파란색과 빨간색을 좋아해요
print("나는 {0}색과 {1}색을 좋아해요.".format("파란", "빨간")) # 나는 파란색과 빨간색을 좋아해요
print("나는 {1}색과 {0}색을 좋아해요.".format("파란", "빨간")) # 나는 빨간색과 파란색을 좋아해요
```

이름을 이용한 .format.
```py
print("나는 {age}살이며, {color}색을 좋아해요.".format(age=20, color="빨간"))
# 나는 20살이며, 빨간색을 좋아해요

print("나는 {age}살이며, {color}색을 좋아해요.".format(color="빨간", age=20))
# 나는 20살이며, 빨간색을 좋아해요 (.format 뒤에 순서를 변경해도 괜찮아요)
```

### 4-5. 탈출문자
\n : 줄바꿈
\' \" : 문자열에 쓰이는 기호를 출력할 때
\\ : 파일경로에 쓰이는 역슬래시도 \\로 입력
\r : 커서를 맨 앞으로 입력
\b : 백스페이쓰, 한글자 삭제
\t : 탭

### 5-1 리스트
```py
subway = ["유재석", "조세호", "박명수"]

# 조세호씨가 몇 번째 칸에 타고 있는가?
subway.index("조세호") # 1 (인덱스는 0부터 시작한다는 것, 기억나시죠?)

subway.append("하하")# ['유재석', '조세호', '박명수', '하하']

subway.insert(1, "정형돈") # 인덱스 1 위치에 삽입 # ['유재석', '정형돈', '조세호', '박명수', '하하']

# 지하철에 있는 사람을 한 명씩 뒤에서 꺼냄
subway.pop() # 하하 내림# ['유재석', '정형돈', '조세호', '박명수']
subway.pop() # 박명수 내림 # ['유재석', '정형돈', '조세호']

# 같은 이름의 사람이 몇 명 있는지 확인
subway.append("유재석") # 설명을 위해 유재석씨를 맨 뒤에 태울게요
subway.count("유재석") # 유재석씨가 2명이 있네요!
```
```py
num_list = [5, 2, 4, 3, 1]
num_list.sort() # 정렬# [1, 2, 3, 4, 5]
num_list.reverse() # 순서 뒤집기 # [5, 4, 3, 2, 1]
num_list.clear() # []

mix_list = ["조세호", 20, True]
num_list.extend(mix_list) # [5, 4, 3, 2, 1, '조세호', 20, True]
```

### 5-2 딕셔너리
```py
cabinet = {3: "유재석", 100: "김태호"}
cabinet[3]
cabinet.get(3) # 유재석 -> key 3 에 해당하는 value

cabinet.get(5) # key 가 5 인 값이 없을 땐 None 반환 후 계속 진행 (hi 출력됨)
print("hi")

cabinet[5] # key 가 5 인 값이 없을 땐 에러 발생 후 프로그램 종료 (hi 출력 안됨)
print("hi")
```

get()은 기본값도 지정이 가능하다.
```py
print(cabinet.get(5, "사용 가능")) # key 에 해당하는 값이 없는 경우 기본 값을 사용
```

key 값이 정의되어 있는지를 in 으로 확인한다.
```py
# 사전 자료형에 값이 있는지 여부 확인
print(3 in cabinet)  # True
print(5 in cabinet)  # False
```

```py
# 업데이트 또는 추가
print(cabinet) # {'A-3': '유재석', 'B-100': '김태호'}
cabinet["A-3"] = "김종국" # key 에 해당하는 값이 있는 경우 업데이트
cabinet["C-20"] = "조세호" # key 에 해당하는 값이 없는 경우 신규 추가
print(cabinet) # {'A-3': '김종국', 'B-100': '김태호', 'C-20': '조세호'}

# 삭제
del cabinet["A-3"] # key "A-3" 에 해당하는 데이터 삭제
print(cabinet) # {'B-100': '김태호', 'C-20': '조세호'}

# key 들만 출력
print(cabinet.keys()) # dict_keys(['B-100', 'C-20'])

# value 들만 출력
print(cabinet.values()) # dict_values(['김태호', '조세호'])

# key, value 쌍으로 출력
print(cabinet.items()) # dict_items([('B-100', '김태호'), ('C-20', '조세호')])

# 전체 삭제
cabinet.clear()
print(cabinet) # {}
```

