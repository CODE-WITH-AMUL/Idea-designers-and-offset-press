from django.shortcuts import render
from .models import *
from .models import Order
from django.contrib import messages
from django.shortcuts import redirect



def index(request):
    return render(request, 'index.html')

def order(request):
    if request.method == "POST":
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        location = request.POST.get('location')
        product = request.POST.get('product')
        quantity = request.POST.get('quantity')
        order = Order(
            firstname=firstname,
            lastname=lastname,
            email=email,
            phone_number=phone_number,
            location=location,
            product=product,
            quantity=quantity
        )
        order.save()
        messages.success(request, 'Order placed successfully!')
        return render(request, 'order.html')
    else:
        messages.error(request, 'Failed to place order. Please try again.')
        # Optionally, you can redirect to the same page or another page
        return redirect('order')
        