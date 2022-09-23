import collections
import heapq
from pprint import pprint

# 모든 노드가 신호를 받는 최소 시간을 구하라
times = [[2,1,1],[2,3,1],[3,4,1]]
n = 4 #노드의 갯수
k = 2 #시작 노드

class Solution:
    def networkDelayTime(self, times, n:int, k:int):
        graph = collections.defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))
        
        q = [(0, k)]
        dist = collections.defaultdict(int)

        while q:
            time, node = heapq.heappop(q)
            if node not in dist :
                dist[node] = time
                for v, w in graph[node]:
                    alt = time + w
                    heapq.heappush(q, (alt, v))
        
        if len(dist) == n :
            return max(dist.values())
        return -1 

print(Solution.networkDelayTime(Solution(), times, n, k))


        


