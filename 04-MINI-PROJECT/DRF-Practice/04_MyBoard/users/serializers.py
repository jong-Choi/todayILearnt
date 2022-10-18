from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator

from django.contrib.auth import authenticate

# 회원가입 기능 구현
## 파이썬의 User 모델에는 username, first_name, last_name, email, password 등의 필드가 있다.

# 모델의 Meta 클래스
## Meta 클래스는 Django의 모델에 취급하는 방법을 변경할 수 있습니다.

# 모델 시리얼 라이저
## 시리얼라이즈/디시리얼라이즈 되어야 하는 모델 필드들을 자동으로 정의해준다. 따라서 정의할 모델의 필드명만 명시해주면 그것들의 타입에 맞게 시리얼라이저의 필드들이 자동으로 정의가 된다.


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())],  # 이메일 중복 검증
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],  # 비밀번호 검증
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("username", "password", "password2", "email")

    def validate(self, data):  # 비밀먼호 일치 여부를 확인하는 메서드
        if data["password"] != data["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return data

    def create(self, validated_data):  # create메서드 오버라이딩
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
        )

        user.set_password(validated_data["password"])
        user.save()
        token = Token.objects.create(user=user)  # authtoken모델에서 create메서드 사용, 유저별 토큰 발급
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(
        required=True, write_only=True
    )  # write_only 옵션으로 클라이언트->서버의 역직렬화만 가능하도록 설정.

    def validate(self, data):
        user = authenticate(**data)
        if user:
            token = Token.objects.get(user=user)
            return token
        raise serializers.ValidationError(
            {"error": "Unable to log in with privided credentials"}
        )
