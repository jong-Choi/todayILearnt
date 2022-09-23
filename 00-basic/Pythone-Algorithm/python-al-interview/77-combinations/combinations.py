import itertools


n = 4
k = 2

class Solution:
    def combine(self, n:int, k:int):
        results = []

        def dfs(elements, start:int, k:int):
            if k == 0:
                results.append(elements[:])
                return

            for i in range(start, n+1):
                elements.append(i)
                dfs(elements, i + 1, k - 1)
                elements.pop()
        
        dfs([], 1, k)
        return results

print(Solution.combine(Solution(), n, k))
print(list(map(list, itertools.combinations(range(1, n+1), k))))