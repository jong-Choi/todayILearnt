from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response

from .serializers import RegisterSerializer, LoginSerializer

# Create your views here.

# generics를 이용하여 회원가입 post요청 실행
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        # .is_valid() 메소드는 부가적으로 raise_exception 플래그를 사용할 수 있는데, 이것을 사용하는 경우에 유효성 에러가 발생한다면,serilaizers.ValidationError exception을 발생 시킬 것이다
        # .is_valid를 통과한 데이터는 시리얼 라이저의 validated_data에 담긴다.
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data
        return Response({"token": token.key}, status=status.HTTP_200_OK)
