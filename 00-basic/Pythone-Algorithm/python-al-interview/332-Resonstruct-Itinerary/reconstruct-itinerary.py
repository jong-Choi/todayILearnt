tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]

class Solution:
    def findItinerary(self, tickets):
        graph = co