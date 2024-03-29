from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from common.forms import UserForm


def signup(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username,
                                password=raw_password)  # 사용자 인증
            login(request, user)  # 로그인
            return redirect('index')

    else:
        form = UserForm()
    return render(request, 'common/signup.html', {'form': form})

    # 신규 사용자를 생성한 후에 자동 로그인 될 수 있도록 authenticate와 login함수가 사용되었다. authenticate와 login함수는 django.contrib.auth 모듈의 함수로 사용자 인증과 로그인을 담당한다.

    # django.contrib.auth.authenticate - 사용자 인증을 담당한다. (사용자명과 비밀번호가 정확한지 검증한다.)
    # django.contrib.auth.login - 로그인을 담당한다. (사용자 세션을 생성한다.)
