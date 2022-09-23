# 중복조합
# 이때 0은 candidates에 추가될 수 없음.
candidates = [2, 3, 6, 7]
target = 7

candidates = [2, 3, 5]
target = 8

class Solution:
    def combinationSum(self, candidates, target):
        result = []

        def dfs(csum, index, path):
            if csum < 0:
                return
            if csum == 0:
                result.append(path)
                return 
            for i in range(index, len(candidates)):
                dfs(csum-candidates[i], i, path + [candidates[i]])

        dfs(target, 0, [])
        return result

print(Solution.combinationSum(Solution(), candidates, target))

