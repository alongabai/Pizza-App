from django.http import HttpResponse
from django.shortcuts import render

from .models import Pizza, Toppings
# Create your views here.
def index(request):
    context = {
        "toppings": Toppings.objects.all()
    }
    return render(request, "orders/index.html", context)

def checkout(request):
    order = request.POST.getlist('order[]')
    for pizza in order:
        if len(pizza) == 1:
            pizzaSplit = Pizza(size=pizza[0], done=False)
            pizzaSplit.save()
        if len(pizza) == 2:
            pizzaSplit = Pizza(size=pizza[0], topping1=pizza[1], done=False)
            pizzaSplit.save()
        if len(pizza) == 3:
            pizzaSplit = Pizza(size=pizza[0], topping1=pizza[1], topping2=pizza[2], done=False)
            pizzaSplit.save()
        if len(pizza) == 4:
            pizzaSplit = Pizza(size=pizza[0], topping1=pizza[1], topping2=pizza[2], topping3=pizza[3], done=False)
            pizzaSplit.save()
    return HttpResponse("Done")
