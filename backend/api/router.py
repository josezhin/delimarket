from rest_framework.routers import SimpleRouter

from api.views import CountryViewSet, DocumentTypeViewSet

router = SimpleRouter()
router.register(r"document-type", DocumentTypeViewSet, basename="document-type")
router.register(r"country", CountryViewSet, basename="country")

urlpatterns = router.urls
