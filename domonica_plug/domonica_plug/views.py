from django.shortcuts import render

def reactindex(request):
    return render(request, 'index.html')