from rest_framework.routers import SimpleRouter

from product.views import ProductViewSet, CategoryViewSet

router = SimpleRouter()
router.register(r"product", ProductViewSet, basename="product")
router.register(r"category", CategoryViewSet, basename="category")

urlpatterns = router.urls
