from django.core.paginator import Paginator
from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from ..models import Question


def index(request):
    page = request.GET.get('page', '1')
    kw = request.GET.get('kw', '')
    # 마이너스를 붙여 역순으로 정렬
    question_list = Question.objects.order_by('-pk')
    if kw:
        question_list = question_list.filter(
            Q(subject__icontains=kw) |  # 제목 검색
            Q(content__icontains=kw) |  # 내용 검색
            Q(answer__content__icontains=kw) |  # 답변 내용 검색
            Q(author__username__icontains=kw) |  # 질문 글쓴이 검색
            Q(answer__author__username__icontains=kw)  # 답변 글쓴이 검색
        ).distinct()
    # https://velog.io/@may_soouu/장고-Q이해하기

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
