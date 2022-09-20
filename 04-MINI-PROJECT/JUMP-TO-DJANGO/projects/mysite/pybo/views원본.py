# from django.http import HttpResponse
from django.contrib import messages
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone

# answerform에 사용될 모듈
# from django.http import HttpResponseNotAllowed
from .forms import QuestionForm, AnswerForm

from .models import Question, Answer
from django.core.paginator import Paginator

from django.contrib.auth.decorators import login_required


def index(request):
    page = request.GET.get('page', '1')
    # 마이너스를 붙여 역순으로 정렬
    question_list = Question.objects.order_by('-pk')
    paginator = Paginator(question_list, 10)
    page_obj = paginator.get_page(page)
    context = {'question_list': page_obj}
    # context = {'question_list': question_list}
    return render(request, 'pybo/question_list.html', context)


def detail(request, question_id):
    # question = Question.objects.get(id=question_id)
    question = get_object_or_404(Question, id=question_id)
    context = {'question': question}
    return render(request, 'pybo/question_detail.html', context)


@login_required(login_url='common:login')
def answer_create(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    # question.answer_set.create(content=request.POST.get('content'),
    #                            create_date=timezone.now())
    # answer = Answer(question=question, content=request.POST.get('content'),
    #                 create_date=timezone.now())
    # answer.save()
    # return redirect('pybo:detail', question_id=question.id)
    if request.method == "POST":
        form = AnswerForm(request.POST)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.author = request.user
            answer.create_date = timezone.now()
            answer.question = question
            answer.save()
            return redirect('pybo:detail', question_id=question.id)
    else:
        # return HttpResponseNotAllowed("Only POST is allowed.")
        form = AnswerForm()
    context = {"question": question, 'form': form}
    return render(request, 'pybo/question_detail.html', context)


@login_required(login_url='common:login')
def question_create(request):
    if request.method == "POST":
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            # form이 유효하다면 if form.is_valid(): 이후의 문장이 수행되어 질문 데이터가 생성된다. question = form.save(commit=False)는 form에 저장된 데이터로 Question 데이터를 저장하기 위한 코드이다. QuestionForm이 Question 모델과 연결된 모델 폼이기 때문에 이와 같이 사용할 수 있다. 여기서 commit=False는 임시 저장을 의미한다.
            question.author = request.user
            question.create_date = timezone.now()
            question.save()
            return redirect('pybo:index')
    else:
        form = QuestionForm
    # 메서드가 POST가 아니거나 FORM이 유효하지 않을 때 아래구문 실행
    context = {'form': form}
    return render(request, 'pybo/question_form.html', context)


@login_required(login_url='common:login')
def question_modify(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    if request.user != question.author:
        messages.error(request, '수정권한이 없습니다')
        return redirect('pybo:detail', question_id=question.id)
    if request.method == "POST":
        form = QuestionForm(request.POST, instance=question)
        if form.is_valid():
            question = form.save(commit=False)
            question.modify_date = timezone.now()
            question.save()
            return redirect('pybo:detail', question_id=question.id)
    else:
        form = QuestionForm(instance=question)
    context = {'form': form}
    return render(request, 'pybo/question_form.html', context)

@login_required(login_url='common:login')
def question_delete(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    if request.user != question.author:
        messages.error(request, '삭제권한이 없습니다')
        return redirect('pybo:detail', question_id=question.id)
    question.delete()
    return redirect('pybo:index')

@login_required(login_url='common:login')
def answer_modify(request, answer_id):
    answer = get_object_or_404(Answer, pk=answer_id)
    if request.user != answer.author:
        messages.error(request, '수정권한이 없습니다')
        return redirect('pybo:detail', question_id=answer.question.id)
    if request.method == "POST":
        form = AnswerForm(request.POST, instance=answer)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.modify_date = timezone.now()
            answer.save()
            return redirect('pybo:detail', question_id=answer.question.id)
    else:
        form = AnswerForm(instance=answer)
    context = {'answer': answer, 'form': form}
    return render(request, 'pybo/answer_form.html', context)

@login_required(login_url='common:login')
def answer_delete(request, answer_id):
    answer = get_object_or_404(Answer, pk=answer_id)
    if request.user != answer.author:
        messages.error(request, '삭제권한이 없습니다.')
    else:
        answer.delete()
    return redirect('pybo:detail', question_id=answer.question.id)
