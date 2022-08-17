참고 : 모두의 알고리즘 with 파이썬 (https://thebook.io/006935/part01/ch01/06/), 누구나 자료 구조와 알고리즘 (https://thebook.io/080274/)

# APS Algorithm Problem Solving

- 알고리즘의 정의  
알고리즘은 어떤 문제를 풀기 위한 절차나 방법입니다.   
사람과 달리 컴퓨터는 주어진 명령을 기계적으로 수행하는 장치이므로 기계가 알아들을 수 있는 명료하고 구체적인 알고리즘이 있어야만 문제를 풀 수 있습니다.  


1부터 n까지의 합을 가우스 덧셈을 이용하면 아래와 같다.  
```py
def sum_n(n):
    return n * (n + 1) // 2   # 슬래시 두 개(//)는 정수 나눗셈을 의미
```
n번의 덧셈 계산이 아닌 3번의 계산으로 풀이가 가능하다.  
APS에서 중요한 것은 '어느 것이 더 좋은 방법'인지 생각해내는 것이다.  

- 빅O 표기법
대문자 O 표기법은 알고리즘에서 필요한 계산 횟수를 정확한 숫자로 표현하는 것이 아니라 입력 크기와의 관계로 표현하기 때문입니다.  예를 들어 n이 10에서 20으로 ‘2배’가 될 때 2n 역시 20에서 40으로 ‘2배’가 됩니다. 이처럼 필요한 계산 횟수가 입력 크기 n과 ‘정비례’하면 모두 O(n)으로 표기합니다.  

가우스 덧셈 알고리즘은 입력 크기 n과 무관하게 사칙연산을 세 번해야 합니다. 이때 알고리즘의 계산 복잡도는 O(1)로 표현합니다. 입력 크기 n과 필요한 계산의 횟수가 무관하다면, 즉 입력 크기가 커져도 계산 시간이 더 늘어나지 않는다면 모두 O(1)로 표기합니다.  

입력 크기가 큰 문제를 풀 때는 보통 O(1)인 알고리즘이 훨씬 더 빠릅니다.  

## 배열
리스트(list)는 정보 여러 개를 하나로 묶어 저장하고 관리할 수 있는 기능입니다.   
배열 : 순서대로 번호가 붙은 원소들이 연속적인 형태로 구성된 구조를 뜻하며, 이때 각 원소에 붙은 번호를 흔히 첨자(인덱스, index)라고 부른다. 원소들이 연속적으로 배치되어 있기에, 임의의 첨자로 각 원소를 접근하는 데에 드는 시간복잡도는 O(1)이다.  

주어진 위치에 있는 원소를 알아본다. 원소를 찾는 데에 드는 시간은 O(1).  
주어진 위치에 새로운 원소를 대입한다. 마찬가지로 위치를 찾는 데에 걸리는 시간은 O(1).  
주어진 위치에 있는 원소를 삭제한다. 이때 배열의 길이가 하나 줄어들며 O(n)만큼의 시간이 걸린다.  
자료구조로서 배열은 인덱스를 가지며, 이 인덱스에 의해 접근이 가능한 순차적으로 구성된 자료구조를 뜻한다. 자료형으로서 배열은, 해당 프로그래밍 언어의 문법 수준에서 이러한 자료구조인 배열을 기본적인 자료형으로 지원하는 경우를 말한다.  


len(LIST)
LIST.append(x)
LIST.insert(i, x) 리스트의 i번 위치에 x를 추가합니다.
LIST.pop(i)
LIST.clear() 리스트의 모든 자료를 제거
x in LIST : x에 리스트가 있는지 여부를 불린으로 반환  


배열 연습문제 GRAVITY
```py


```

### 버블정렬
정렬 알고리즘은 컴퓨터 과학 분야에서 폭넓게 연구된 주제이며, 지난 수년간 수십 개의 정렬 알고리즘이 개발돼 왔다. 이러한 알고리즘 모두 다음의 문제를 해결한다.  

매우 기본적인 정렬 알고리즘인 버블 정렬(bubble sort)은 다음과 같은 단계를 따른다.

1. 배열 내에서 연속된 두 항목을 가리킨다(처음에는 배열의 첫 번째 원소부터 시작해서 처음 두 항목을 가리킨다).   
2. 왼쪽 값이 오른쪽 값보다 크면 교환(swap)한다
3. “포인터”를 오른쪽으로 한 셀씩 옮긴다.
4. 1-3단계를 반복하여 마지막 셀까지 진행한다. 이제 배열의 첫 패스스루(pass-through)가 끝났다.  
5. 교환이 일어나지 않는 패스스루가 생길 때까지 1-4단계의 패스스루를 반복한다.

일반적으로 매 패스쓰루마다 가장 큰 수(혹은 가장 큰 수와 두번째로 큰 수)가 정렬된다.  


```py
def bubble_sort(list): 
    unsorted_until_index = len(list) - 1  
    sorted = False 

    while not sorted:  
        sorted = True 
        for i in range(unsorted_until_index):  
            if list[i] > list[i+1]: 
                list[i], list[i+1] = list[i+1], list[i] 
                sorted = False  
        unsorted_until_index -= 1

    return list
```

버블 정렬 알고리즘은 두 가지 중요한 단계를 포함한다.

• 비교(comparison): 어느 쪽이 더 큰지 두 수를 비교한다.

• 교환(swap): 정렬하기 위해 두 수를 교환한다.

5,4,3,2,1 이 있을 때 4 + 3 + 2 + 1 = 10번의 비교다.
버블 정렬 알고리즘은 (N-1) + (n-2)...+1의 비교 연산을 수행하므로 데이터가 늘어날수록 O(N2)으로 단계 수가 매우 급격히 증가하고 있다.

루프 내에 다른 루프를 중첩하는 알고리즘이라면 대부분(항상은 아니다) O(N^2)이다. 따라서 중첩 루프가 보이면 O(N2) 알람이 머릿속에 울리기 시작해야 한다.




### 카운팅 정렬 Counting Sort
데이터의 개수가 N, 데이터(양수) 중 최댓값이 K일 때 최악의 경우에도 수행시간 O(N+K)를 보장한다.    
001122345567899   
각각의 데이터가 몇번씩 등장했는지 세는 방식으로 동작하는 정렬 알고리즘이다.  
```py
# 모든 원소의 값이 0보다 크거나 같다고 가정
array = [7,5,9,0,3,1,6,2,9,1,4,8,0,5,2]

# 모든 범위를 포함하는 리스트 선언(모든 값은 0으로 초기화)
count = [0]*(max(array)+1)

for i in range(len(array)):
	count[array[i]] += 1  # 각 데이터에 해당하는 인덱스의 값 증가

for i in range(len(count)):  # 리스트에 기록된 정렬 정보 확인
	for j in range(count[i]):
    	print(i, end=' ')  # 띄어쓰기를 구분으로 등장한 횟수만큼 인덱스 출력
```
이때 count 배열을 계수배열이라 부른다.


### 완전탐색 
순열, Baby-gin 게임  
순열과 조합  
https://velog.io/@jwisgenius/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9  
https://medium.com/@dltkddud4403/python-%EC%88%9C%EC%97%B4-%EC%A1%B0%ED%95%A9-%EA%B5%AC%ED%98%84-5e496e74621c

```py
#순열
def dfs_permutation(array, r):
    i_array = [(x, i) for i, x in enumerate(array)]
    stack = [[i] for _, i in i_array]
    return_list = []

    while len(stack) > 0:
        current = stack.pop()
        
        for i in range(len(i_array)):
            if i not in current:
                temp = current + [i_array[i][1]]
                if len(temp) == r:
                    elements = []
                    for idx in temp:
                        elements.append(i_array[idx][0])
                    return_list.extend([elements])
                else:
                    stack.append(temp)
    return return_list

print(dfs_permutation("ABCD", 2))

#순열의 재귀함수
def permutation(arr, r):
    arr = sorted(arr)
    used = [0 for _ in range(len(arr))]
    return_array = []
    def generate(chosen, used):
        # 내가 원하는 만큼 뽑았으면, return
        if len(chosen) == r:
            return_array.append(''.join(chosen))
            return

        for i in range(len(arr)):
            if not used[i]:
                chosen.append(arr[i])
                used[i] = 1
                generate(chosen, used)
                used[i] = 0
                chosen.pop()

    generate([], used)
    return return_array

#조합
def combination(array, r):
    chosen = []
    if r > len(array):
        return chosen

    if r == 1:
        for i in array:
            chosen.append(i)

    elif r > 1:
        # r 개 만큼 빼주는 이유 (순서가 고려사항이 아니기 때문에, r개는 고려하지 않아도 앞서서 정해진다)
        for i in range(len(array) - r + 1):
            for temp in combination(array[i + 1:], r - 1):
                chosen.append([array[i], temp])
    return chosen

print(combination("ABCD", 2))

```



### 그리디
탐욕 알고리즘 - 거스름돈


### 2차원 배열

2차원 배열
지그재그 순화하기
```js
for i in range(n):
    for j in ragne(m):
        Array[i][j + (m-1-2*j) * (i%2)]
```
위는 아래와 같이 단계화 할 수 있다.

```js
    만약에 i가 짝수면
        arr[i][j]로 탐색할래
    만약에 i가 홀수면
        arr[i][-1-j]로 탐색할래.
```
라는 의미이다.
짝수면 i%2가 0이기 때문에 array[i][j]형태가 되며
홀수면 i%2가 1이기 때문에 m-1-j이다. 이때 파이썬에서 m(마지막 위치)는 생략될 수 있다.



델타를 이용한 탐색

### 바이너리 서치 Binary Search

부분집합. {O|X, O|X, O|X, O|X} 의 모든 부분집합을 구하려면? 


- 비트 연산자
a = 60, b = 13 이라 가정한다.
a = 0011 1100
b = 0000 1101

`&`	AND 연산. 둘다 참일때만 만족	(a & b) = 12 → 0000 1100  
`|`	OR 연산. 둘 중 하나만 참이여도 만족	(a | b) = 61 → 0011 1101  
`^`	XOR 연산. 둘 중 하나만 참일 때 만족	(a ^ b) = 49 → 0011 0001  
`~`	보수 연산.	(~a) = -61 → 1100 0011  
`<<`	왼쪽 시프트 연산자. 변수의 값을 왼쪽으로 지정된 비트 수 만큼 이동(끝에 0이 하나 더 붙는 거임)	a << 2 = 240 → 1111 0000  
`>>`	오른쪽 시프트 연산자. 변수의 값을 오른쪽으로 지정된 비트 수 만큼 이동	a >> 2 = 15 → 0000 1111  

```py
이번에는 시프트(shift) 연산을 알아보겠습니다.

먼저 왼쪽 시프트(<<)입니다.

>>> bin(0b1 << 1)
'0b10'
>>> bin(0b1 << 2)
'0b100'
>>> bin(0b1 << 3)
'0b1000'
위에서 1이 점점 왼쪽으로 이동하는 것을 볼 수 있습니다.

다음은 오른쪽 시프트(>>)입니다.

>>> bin(0b1010 >> 1)
'0b101'
1이 오른쪽으로 한 자리씩 밀린 것을 볼 수 있습니다. 더 많이 시프트하면 어떻게 될까요?

>>> bin(0b1010 >> 2)
'0b10'
>>> bin(0b1010 >> 3)
'0b1'
>>> bin(0b1010 >> 4)
'0b0'

점점 밀려서 결국 0이 되었네요.


시프트 연산자로 왼쪽으로 한 칸 이동할 때 마다 2배가 되는 효과가 생긴다.
반대로 오른쪽으로 한 칸씩 이동하면 숫자가 줄어든다.
그럼 2를 곱하고 나누면 되지 않나?라고 생각할 수 있는데, 큰 수에서 비트단위로 코드를 짜야하는 경우가 생기는데, 이 때 시프트연산자를 사용하면 큰 생각없이 비트들을 정리할 수 있어서 편하다.
```
`1 << n` : 비트 원소가 n개일 때 부분집합의 갯수. 즉 2의 n승

`i&(1<<j)`: i가 10110일때 `1<<0, 1<<1, 1<<2, 1<<3, 1<<4, 1<<5` 는 1, 10, 100, 1000, 10000, 100000 (0이 늘어난다. 즉 2배씩 늘어난다.) 이고, 이를 &으로 대입하면 0, 10, 100, 0, 1000을 반환한다. 이를 불리언 값으로 대입하면 f, t, t, f, t가 나온다. 이를 활용해 '1이 특정 자릿수에 있는지'를 판단할 수 있게 된다. 



```py
print(bin(5)) # 0101
print(bin(14)) # 1110
print(bin(5 & 14)) # 0100 -> 4
```

비트연산으로 부분집합 구해보기


비트연산으로 부분집합 합 구해보기




### 셀렉션 알고리즘 Selection Algorithm


### 선택정렬 Selection Sort
선택 정렬(selection sort)이라는 또 다른 정렬 알고리즘을 자세히 알아보고 버블 정렬과 효율성을 비교해 보겠다.   

배열의 각 셀을 왼쪽부터 오른쪽 방향으로 확인하면서 어떤 값이 최솟값인지 결정한다. 

그 인덱스의 값과 패스스루를 처음 시작했을 때의 값을 교환한다. 패스스루를 시작했을 때 인덱스는 첫 패스스루에서는 인덱스 0일 것이고, 두 번째 패스스루에서는 인덱스 1일 것이다. 

매 패스스루는 1, 2단계로 이뤄진다. 배열 끝에서 시작하는 패스스루에 도달할 때까지 패스스루를 반복한다. 마지막 패스스루에서는 배열이 완벽히 정렬되어 있을 것이다.  


```python
## 이코테
array  [7,5,9,0,3,1,6,2,4,8]

for i in range(len(array)):
	min_index = i  # 가장 작은 원소의 인덱스
    for j in range(i+1, len(array)):
    	if array[min_index]>array[j]:
        	min_index = j
    array[i], array[min_index] = array[min_index], array[i]  # swap
print(array)
```
(N^2 +N+2)/2로 표현할 수 있는데, 빅오 표현법에 따라서 O(N^2)이라고 작성한다.

하지만 교환은 패스스루 당 한 번 일어난다. 따라서 빅오는 N^2으로 버블정렬과 선택정렬이 같으나(비교의 횟수는 같으나), 비교와 교환의 갯수를 모두 합친 숫자는 버블정렬의 절반 정도에 불과하다. 


빅 오의 본질에서 살펴봤듯이 빅 오 표기법은 단지 알고리즘에 필요한 단계 수만 의미하지 않는다. 데이터가 늘어날 때 알고리즘 단계 수가 장기적으로 어떤 궤적을 그리는지가 중요하다. O(N)은 직선 성장(straight growth)을 보여준다. 즉 단계 수가 데이터에 일정 비율로 비례해 직선을 그리며 증가한다. 이와 달리 O(N2)은 지수 성장(exponential growth)의 하나다.

지수 성장은 어떤 형태의 O(N)과도 비교되지 않는 완전히 다른 카테고리이다. O(N)에 어떤 수를 곱하든 데이터가 커지다 보면 언젠가 결국 O(N2)이 더 느려진다는 사실을 깨달으면 완벽히 이해가 간다.

다음의 그래프에서 볼 수 있듯이 N에 여러 상수를 곱해도 O(N2)이 느리다.

## 문자열 (String)

### 패턴 매칭



### 문자열 암호화


### 문자열 압축


## STACK
push 구현하기   
```py
size = 10
stack = [0] * size
top = -1 #top: 자료가 있는 마지막 인덱스

# 함수로 구현하기
def push(item, size):
    global top
    top += 1
    if top == size:
        print('overflow')
    else: stack[top] = item
push(10, size)
print(stack)

# 직접 구현하기
top += 1
stack[top] = 20
print(stack)
```
pop 구현하기
```
def push(item, size):
    global top
    top += 1
    if top == size:
        print('overflow')
    else: stack[top] = item

size = 10
stack = [0] * size
top = -1

push(10, size)
print(stack)
top += 1
stack[top] = 20
print(stack)


def pop() :
    global top
    if top == -1 :
        print('underflow')
        return 0
    else : 
        top -= 1
        return stack[top+1]
    
print(pop())

if top > -1 : #pop
    top -= 1
    print(stack[top])
```

