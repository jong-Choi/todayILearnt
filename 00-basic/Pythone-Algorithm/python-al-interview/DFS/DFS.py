# [시험범위]
# aps 기본 = 트리까지가 범위,
# 컴퓨팅 사고력... 인덱스 / 탐색 / 컴퓨팅 사고력... 
# (증명 같은거는 모르면 못푼다.)

# [입력]
# 첫 줄에 테스트 케이스 개수 T가 주어진다.  1≤T≤50
# 다음 줄부터 테스트 케이스의 첫 줄에 노드의 수 V와 경로의 수 E가 주어진다. 5≤V≤50, 4≤E≤1000
# 테스트케이스의 둘째 줄부터 E개의 줄에 걸쳐, 출발 도착 노드로 간선 정보가 주어진다.
# E개의 줄 이후에는 경로의 존재를 확인할 출발 노드 S와 도착노드 G가 주어진다.





# --------- dfs 예시 입력 ----------
# '시작노드 도착노드'로 입력 받음
import sys
sys.stdin = open("dfs_test_input.txt")
t = int(input())

for test_case in range(1, t+1):
    v, e = map(int, input().split())         # 노드 수 v, 경로 수 e
    graph = [[] for _ in range(v+1)]         # 노드 수 만큼 빈배열을 갖는 배열
    for _ in range(e):
        idx, nod = map(int, input().split()) # 시작점과 도착점을 받아서
        graph[idx].append(nod)               # 시작점의 인덱스로 도착점 노드를 append
    s, g = map(int, input().split())         #시작지점, 도착지점
# --------- dfs 예시 입력 ----------

# 재귀를 이용한 dfs의 구현
    def recursive_dfs(v, discovered=[]):
        discovered.append(v)
        for w in graph[v]:
            if w not in discovered:
                discovered = recursive_dfs(w, discovered)
        return discovered

# 스택을 이용한 dfs의 구현
# 노드 그래프의 뒷부분부터 pop해서 접근하기 때문에 왼쪽, 오른쪽이 달라짐에 유의
    def iterative_dfs(start_v):
        discovered = []
        stack = [start_v]
        while stack:
            v = stack.pop()
            if v not in discovered:
                discovered.append(v)
                for w in graph[v]:
                    for w in graph[v]:
                        stack.append(w)
        return discovered
    print(iterative_dfs(1))








