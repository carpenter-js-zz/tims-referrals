from rest_framework import routers
from .views import ReferralViewSet

router = routers.DefaultRouter()
router.register('api/referrals', ReferralViewSet, 'referrals')

urlpatterns = router.urls  