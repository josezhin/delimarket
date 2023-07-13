from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from product.models import Product, Category
from product.serializers import ProductSerializer, CategorySerializer
from rest_framework.permissions import AllowAny

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer    
        
    def get_queryset(self):
        queryset = super().get_queryset()
        params = self.request.query_params.get("category")
        if params:
            queryset = queryset.filter(category__name=params)
        return queryset


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer