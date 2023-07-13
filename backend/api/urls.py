from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

from api.views import CustomTokenObtainPairView, RegisterCustomerView, RegisterUserView, SendEmailView

urlpatterns = [
    
    # Client User
    path("auth/token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("auth/register/", RegisterUserView.as_view(), name="register"),
    
    # Client Authentication
    path("auth/customer/", CustomTokenObtainPairView.as_view(), name="token_customer"),
    path( "auth/customer/register/", RegisterCustomerView.as_view(), name="customer_register"),
    
    path('send-email/', SendEmailView.as_view(), name='send_email'),
    
    # Api product
    path("", include("product.router")),
    path('product-filter/', include('product.urls')),
        
    path("", include("api.router")),
]
