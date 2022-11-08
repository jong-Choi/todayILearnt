from rest_framework import permissions


class CustomReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
            # SAFE_METHOD : 데이터에 영향을 미치지 않은 메서드 혹은 요청유저와 객체의 유저가 같은 경우
        return obj.user == request.user
