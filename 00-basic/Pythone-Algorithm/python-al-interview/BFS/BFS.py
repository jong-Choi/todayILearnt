# [입력]
# 첫 줄에 테스트 케이스 개수 T가 주어진다.  1≤T≤50
# 다음 줄부터 테스트 케이스의 첫 줄에 노드의 수 V와 경로의 수 E가 주어진다. 5≤V≤50, 4≤E≤1000
# 테스트케이스의 둘째 줄부터 E개의 줄에 걸쳐, 출발 도착 노드로 간선 정보가 주어진다.
# E개의 줄 이후에는 경로의 존재를 확인할 출발 노드 S와 도착노드 G가 주어진다.

# --------- bfs 예시 입력 ----------
# '시작노드 도착노드'로 입력 받음
import sys
sys.stdin = open("bfs_test_input.txt")
t = int(input())

for test_case in range(1, t+1):
    v, e = map(int, input().split())         # 노드 수 v, 경로 수 e
    graph = [[] for _ in range(v+1)]         # 노드 수 만큼 빈배열을 갖는 배열
    for _ in range(e):
        idx, nod = map(int, input().split()) # 시작점과 도착점을 받아서
        graph[idx].append(nod)               # 시작점의 인덱스로 도착점 노드를 append
    s, g = map(int, input().split())         #시작지점, 도착지점
# --------- dfs 예시 입력 ----------

# 큐를 이용한 bfs의 구현
# bfs는 재귀로 구현이 불가능하다. 
    def iterative_bfs(start_v):
        discovered = [start_v]
        queue = [start_v] 
        while queue:
            v = queue.pop(0) #혹은 deque.popleft()
            for w in graph[v]:
                if w not in discovered:
                    discovered.append(w)
                    queue.append(w)
        return discovered

    print(iterative_bfs(1))








