class Solution:
#----여기에 코드를 입력하세요----#
    def permute(self, nums:list):
        results = []
        prev_elements = []

        def dfs(elements):
            #리프 노드일 때 결과 추가
            if len(elements) == 0:
                results.append(prev_elements[:])
            
            for e in elements:
                next_elements = elements[:]
                next_elements.remove(e)   # 특정 값을 검색해서 첫번째를 삭제
                prev_elements.append(e)   # 삭제한 값을 prev_elements에 추가
                dfs(next_elements)
                prev_elements.pop() #dfs가 끝나면 pop해서 거슬러 올라감
        
        dfs(nums)
        return results

print(Solution.permute(Solution(),[1,2,3]))