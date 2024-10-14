from django.shortcuts import render
from django.views import View
from main.models import Transaction

# Create your views here.
class MainView(View):
    def get ( self, request):
        print(Transaction.objects.all())
        return render ( request,"index.html")
    
class TarakonshView(View):
    def get ( self, request):
        print(Transaction.objects.all())
        return render ( request,"Tarakonsh.html")
    
class ExpenseView(View):
    def get ( self, request):
        print(Transaction.objects.all())
        return render ( request,"Expense.html")
        
class IncomeView(View):
    def get ( self, request):
        print(Transaction.objects.all())
        return render ( request,"Income.html")
    
    