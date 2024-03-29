from django.core.paginator import Paginator
from django.shortcuts import render, get_object_or_404
from ..models import Question

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