from distutils.command.upload import upload
from django.db import models

# # Create your models here.

from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True
    )  # 유저모델을 1:1로 상속받음. 부모가 삭제되면 자식도 삭제.
    nickname = models.CharField(max_length=128)
    position = models.CharField(max_length=128)
    subjects = models.CharField(max_length=128)
    image = models.ImageField(upload_to="profile/", default="default.png")  # 기본값 설정하기


@receiver(post_save, sender=User)  # @receiver로 프로필 생성 코드 감지
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
