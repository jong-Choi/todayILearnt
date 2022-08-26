import sys
sys.stdin = open("input.txt")
n = int(input())
l_list = []
h_list = []


for _ in range(n):
    l, h = map(int, input().split())
    l_list.append(l)
    h_list.append(h)

max_w = max(l_list) + 2
pole_list = [0] * max_w
ans_list = [*pole_list]


for _ in range(n):
    idx = l_list.pop()
    height = h_list.pop()
    pole_list[idx] = height

max_h_left = 0
max_h_right = 0
for i in range(len(ans_list)):
    if pole_list[i] > max_h_left:
        max_h_left = pole_list[i]
    ans_list[i] = max_h_left

for i in range(len(ans_list)):
    if pole_list[-i] > max_h_right:
        max_h_right = pole_list[-i]
    ans_list[-i] = min(ans_list[-i], max_h_right)

print(sum(ans_list))

