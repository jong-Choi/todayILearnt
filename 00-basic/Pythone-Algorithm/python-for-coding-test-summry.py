# ------거스름돈 문제----------
n = 1260
count = 0
coin_types = [500, 100, 50, 10] # 큰 단위부터 탐색

for coin in coin_types:
    count += n // coin # 큰 단위로 나눈 몫이 count
    n %= coin #나눈 나머지가 남은 돈

print(count)


# ------큰수의 법칙----
n, m, k = map(int, input().split()) #n개의 자연수를 m번 더하기. 단 k번연속 초과는 불가
data = list(map(int, input().split()))

data.sort() # 입력 받은 수들 정렬하기
first = data[n - 1] # 가장 큰 수
second = data[n - 2] # 두 번째로 큰 수

# k가 3일때 first + first + first + second로 더해진다는 규칙성.
# 가장 큰 수가 더해지는 횟수 계산
count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first # 가장 큰 수 더하기
result += (m - count) * second # 두 번째로 큰 수 더하기

print(result) # 최종 답안 출력

# --------숫자카드게임--------
n, m = map(int, input().split())

result = 0
for i in range(n):
    data = list(map(int, input().split()))
    min_value = min(data) #각 줄의 가장 작은 것
    result = max(result, min_value) #중에 가장 큰 것

print(result)


# --------1이 될 때까지----
n, k = map(int, input().split())

ans = 0
while n != 1 :
    if n % k == 0:
        n = n/k
        ans += 1
    else:
        n -= 1
        ans += 1

# while문의 판별식이 실행되지 않게 한 방에 판별하기 - 일단 k의 배수가 아니라면 계속 빼다가 한방에 나누기

# N, K공백을 기준으로 구분하여 입력 받기
n, k = map(int, input().split())

result = 0

while True:
    # N이 K로 나누어 떨어지는 수가 될 때까지만 1씩 빼기
    target = (n // k) * k
    result += (n - target)
    n = target
    # N이 K보다 작을 때 (더 이상 나눌 수 없을 때) 반복문 탈출
    if n < k:
        break
    # K로 나누기
    result += 1
    n //= k

# 마지막으로 남은 수에 대하여 1씩 빼기
result += (n - 1)
print(result)
# --------시각------
# 하루는 86400초. 
# H를 입력받기
h = int(input())

count = 0
for i in range(h + 1):
    for j in range(60):
        for k in range(60):
            # 매 시각 안에 '3'이 포함되어 있다면 카운트 증가
            if '3' in str(i) + str(j) + str(k):
                count += 1
# 3의 갯수가 아닌 3이 표함된 순간을 체크함에 유의
print(count)
