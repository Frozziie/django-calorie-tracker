from django.shortcuts import render, redirect
from core.models import Food, Consume


def index(request):
    if request.method == "POST":
        # Get data from request
        food_consumed = request.POST['food_consumed']
        consume = Food.objects.get(name=food_consumed)
        user = request.user
        # Create new table object and save in database
        consume = Consume(user=user, food_consumed=consume)
        consume.save()
        # Context variable
        foods = Food.objects.all()
    else:
        # Context variable
        foods = Food.objects.all()

    consumed_food = Consume.objects.all()

    return render(request, 'core/index.html', {'foods': foods, 'consumed_food': consumed_food})


def delete_consume(request, id):
    consumed_food = Consume.objects.get(id=id)
    if request.method == "POST":
        consumed_food.delete()
        return redirect('/')
    return render(request, 'core/delete.html')