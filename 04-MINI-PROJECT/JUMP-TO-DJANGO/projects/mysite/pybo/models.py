from django.db import models
from django.contrib.auth.models import User

# QUSETION : 제목, 내용, 작성시간
# ANSWER : QUESTION, 내용, 작성시간


class Question(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    # 계정이 삭제되면 함께 글이 삭제됨
    subject = models.CharField(max_length=200)
    content = models.TextField()
    create_date = models.DateTimeField()
    modify_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.subject
    # 연결모델명_set을 이용해 해당 오브젝트을 foreignKey로 참조하는 오브젝트들을 불러올 수 있다. Question.answer_set.all()은 <QuerySet [<Answer: Answer object (1)>]> 와 같은 쿼리셋을 반환한다.


class Answer(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    # author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # qustion을 외부참조키로 연결함. CASCADE는 Question이 삭제되면 Answer도 종속되어 삭제되는 의미
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.TextField()
    create_date = models.DateTimeField()
    modify_date = models.DateTimeField(null=True, blank=True)
