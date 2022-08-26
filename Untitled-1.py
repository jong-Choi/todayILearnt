from optparse import Values
lst3 = [4, 4, 6, 6, 6, 6, 10, 8, 8, 8, 8, 8, 8, 8]
print(sum(lst3))
# class Stack:

#     def __init__(self, size):
#         self.size = size
#         self.data = [None] * size
#         # 자료가 들어가는 위치를 통해 데이터가 몇개 들어있는지, 비었는지, 가득 찼는지
#         # 등을 확인함. 이를 위해 마지막 인덱스를 의미하는 top를 선언함.
#         self.top = -1

#     def __str__(self):  # 반환하는 방식
#         return f'{self.data}'

#     def push(self, value):  # top가 가리키는 인덱스에 value 넣기
#         # if self.size == self.top+1:
#         if self.is_full():
#             print('overflow')

#         else:
#             self.top += 1
#             self.data[self.top] = value

#     def pop(self):
#         if self.is_empty():
#             print('underflow')

#         else:
#             value = self.data[self.top]  # 마지막 정보 저장해뒀다가 리턴해주기
#             self.data[self.top] = None
#             self.top -= 1
#             return value

#     def is_full(self):
#         return (self.top + 1 == self.size)
#         # if self.size == self.top+1:
#         #     return True
#         # else:
#         #     return False
#         # --------
#         # return True if self.size == self.top + 1 else False
#         # ---------

#     def is_empty(self):
#         return (self.top == -1)


# stack = Stack(3)
# stack.push(3)
# stack.push(2)
# stack.push(1)
# stack.push(0)
