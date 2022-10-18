from django.shortcuts import get_object_or_404
from .models import Book
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializers import BookSerializer


# 클래스형 컴포넌트 : 함수 내부에서 get, post를 따ㅁㄴㅇㅁㅈ로 정의하여 준다. 조건문과 데코레이터를 사용하지 않음.
class BooksAPI(APIView):
    # 요청이 get이면 시리얼라이저하여 JSON형식으로 데이터를 가져옴
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # 요청이 post이면 시리얼라이저로 JSON형식으로 데이터를 삽입함

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookAPI(APIView):
    # GET 요청에 대해 id를 조회하여 데이터를 가져옴
    def get(self, request, bid):
        book = get_object_or_404(Book, bid=bid)
        serializer = BookSerializer(book)
        return Response(serializer.data, status=status.HTTP_200_OK)

# # 함수형 컴포넌트에는 데코레이터를 상용.


# @api_view(['GET'])
# def HelloAPI(request):
#     return Response("hello world!")


# @api_view(['GET', 'POST'])
# def booksAPI(request):
#     if request.method == 'GET':
#         books = Book.objects.all()
#         serializer = BookSerializer(books, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         serializer = BookSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET'])
# def bookAPI(request, bid):
#     book = get_object_or_404(Book, bid=bid)
#     serializer = BookSerializer(book)
#     return Response(serializer.data, status=status.HTTP_200_OK)
