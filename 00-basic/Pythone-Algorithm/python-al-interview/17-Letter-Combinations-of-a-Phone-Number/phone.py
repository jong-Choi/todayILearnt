class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        #콜론은 타입 힌팅이며, 화살표는 리턴값에 대한 티커이다
        def dfs(index, path):
            # 끝까지 탐색하면 백트래킹
            if len(path) == len(digits):
                result.append(path)
                return
            
            # 입력값 자릿수 단위 반복
            for i in range(index, len(digits)):
                # 숫자에 해당하는 모든 문자열 반복
                for j in dic[digits[i]]:
                    dfs(i + 1, path + j)
        
        if not digits:
            return []

        dic = {'2': 'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8': 'tuv', '9':'wxyz'}

        result = []
        dfs(0, '')

        return result
        
# solution = Solution()
# print(solution.letterCombinations('23'))
print(Solution.letterCombinations(Solution(),'23'))