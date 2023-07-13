from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from . import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()

router.register(r'category', views.CategoryViewSet, 'categoria')
router.register(r"Product", views.ProductViewSet, "producto")

urlpatterns = [
    path("", include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)