from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

from api.serializers import AccountSerializer, CategorySerializer, TransactionSerializer
from main.models import Category, Account, Transaction


class AccountAPIView(APIView):
    """
        /api/accounts:
        
    """
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        accounts = Account.objects.all()
        serialized_data = self.serializer_class(accounts, many=True)
        return Response(serialized_data.data)


class CategoryAPIView(APIView):
    """
        /api/category:
        
    """
    serializer_class = CategorySerializer

    def get(self, request):
        categories = Category.objects.all()
        serialized_data = self.serializer_class(categories, many=True)
        return Response(serialized_data.data)


class TransactionAPIView(APIView):
    """
        /api/transactions:
            
    """
    serializer_class = TransactionSerializer

    def get(self, request):
        transactions = Transaction.objects.all()
        serialized_data = self.serializer_class(transactions, many=True)
        return Response(serialized_data.data)



class IncomeAPIView(generics.ListAPIView):
    
    serializer_class = TransactionSerializer
    
    def get_queryset(self):
        return Transaction.objects.filter(transaction_type="1")
    
class ExpenseAPIView(generics.ListAPIView):
    
    serializer_class = TransactionSerializer
    
    def get_queryset(self):
        return Transaction.objects.filter(transaction_type="2")
