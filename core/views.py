from django.shortcuts import render
from core.models import Food, Consume

def index(request):
    if request.method == "GET":
        foods = Food.objects.all()
        consumed_food = Consume.objects.all()
    return render(request, 'core/index.html', {'foods': foods, 'consumed_food': consumed_food})