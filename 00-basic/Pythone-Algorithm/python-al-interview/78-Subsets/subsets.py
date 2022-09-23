# 모든 부분집합을 반환하라.
nums = [1, 2, 3]

class Solution:
    def subsets(self, nums):
        result = []

        def dfs(index, path):
            # 결과를 매번 append
            result.append(path)

            # 경로를 만들면서 DFS
            for i in range(index, len(nums)):
                dfs(i + 1, path + [nums[i]])
    
        dfs(0, [])
        return result
    

print(Solution.subsets(Solution(), nums))

