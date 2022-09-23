import collections
import heapq


n = 3
edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0
dst = 2
k = 0

class Solution:
    def findCheapstPrice(self, n, flights, src, dst, k):
        graph = collections.defaultdict(list)
        for u, v, w in flights:
            graph[u].append((v,w))
        
        q = [(0, src, k)]

        while q:
            price, node, k = heapq.heappop(q)
            if node == dst:
                return price
            if k >= 0:
                for v, w in graph[node]:
                    alt = price + w
                    heapq.heappush(q, (alt, v, k-1))
        return -1

print(Solution.findCheapstPrice(Solution, n, edges, src, dst, k))

